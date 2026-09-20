const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const loginNote = document.getElementById('loginNote');

// ===== Auth =====
async function checkSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    showDashboard(session);
  } else {
    showLogin();
  }
}

function showLogin() {
  loginView.hidden = false;
  dashboardView.hidden = true;
}

function showDashboard(session) {
  loginView.hidden = true;
  dashboardView.hidden = false;
  document.getElementById('userEmail').textContent = session.user.email;
  loadProperties();
  loadLeads();
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  loginNote.textContent = '登入中...';
  loginNote.classList.remove('success');

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    loginNote.textContent = '登入失敗:' + error.message;
    return;
  }
  loginNote.textContent = '';
  showDashboard(data.session);
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  showLogin();
});

// ===== Tabs =====
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.getElementById('panel-properties').hidden = target !== 'properties';
    document.getElementById('panel-leads').hidden = target !== 'leads';
  });
});

// ===== Properties CRUD =====
async function loadProperties() {
  const { data, error } = await supabaseClient.from('properties').select('*').order('id', { ascending: false });
  const tbody = document.getElementById('propertyTableBody');
  if (error) {
    tbody.innerHTML = `<tr><td colspan="7">載入失敗:${error.message}</td></tr>`;
    return;
  }
  tbody.innerHTML = data.map(p => `
    <tr>
      <td><img src="${p.img}" alt="${p.title}"></td>
      <td>${p.title}</td>
      <td>${p.type}</td>
      <td>${p.location}</td>
      <td>NT$ ${p.price_label}</td>
      <td>${p.status || '-'}</td>
      <td>
        <button class="admin-action-btn admin-action-edit" data-edit="${p.id}">編輯</button>
        <button class="admin-action-btn admin-action-delete" data-delete="${p.id}">刪除</button>
      </td>
    </tr>
  `).join('') || `<tr><td colspan="7">尚無房源資料</td></tr>`;

  tbody.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => openPropertyForm(data.find(p => p.id === Number(btn.dataset.edit))));
  });
  tbody.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', () => deleteProperty(Number(btn.dataset.delete)));
  });
}

async function deleteProperty(id) {
  if (!confirm('確定要刪除這筆房源嗎?此操作無法復原。')) return;
  const { error } = await supabaseClient.from('properties').delete().eq('id', id);
  if (error) { alert('刪除失敗:' + error.message); return; }
  loadProperties();
}

const propertyFormModal = document.getElementById('propertyFormModal');
const propertyForm = document.getElementById('propertyForm');

function openPropertyForm(prop) {
  document.getElementById('propertyFormTitle').textContent = prop ? '編輯房源' : '新增房源';
  document.getElementById('propId').value = prop ? prop.id : '';
  document.getElementById('propTitle').value = prop ? prop.title : '';
  document.getElementById('propType').value = prop ? prop.type : '住宅';
  document.getElementById('propLocation').value = prop ? prop.location : '';
  document.getElementById('propPrice').value = prop ? prop.price : '';
  document.getElementById('propArea').value = prop ? prop.area : '';
  document.getElementById('propRooms').value = prop ? prop.rooms : '';
  document.getElementById('propBaths').value = prop ? prop.baths : '';
  document.getElementById('propFloor').value = prop ? prop.floor : '';
  document.getElementById('propAge').value = prop ? prop.age : '';
  document.getElementById('propStatus').value = prop ? (prop.status || '') : '';
  document.getElementById('propImg').value = prop ? prop.img : '';
  document.getElementById('propDesc').value = prop ? prop.description : '';
  document.getElementById('propertyFormNote').textContent = '';
  propertyFormModal.classList.add('open');
}

document.getElementById('addPropertyBtn').addEventListener('click', () => openPropertyForm(null));
document.getElementById('propertyFormClose').addEventListener('click', () => propertyFormModal.classList.remove('open'));
propertyFormModal.addEventListener('click', (e) => { if (e.target === propertyFormModal) propertyFormModal.classList.remove('open'); });

propertyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('propId').value;
  const price = Number(document.getElementById('propPrice').value);
  const record = {
    title: document.getElementById('propTitle').value.trim(),
    type: document.getElementById('propType').value,
    location: document.getElementById('propLocation').value.trim(),
    price: price,
    price_label: price.toLocaleString('zh-Hant-TW') + '萬',
    area: Number(document.getElementById('propArea').value),
    rooms: Number(document.getElementById('propRooms').value),
    baths: Number(document.getElementById('propBaths').value),
    floor: document.getElementById('propFloor').value.trim(),
    age: Number(document.getElementById('propAge').value),
    status: document.getElementById('propStatus').value,
    img: document.getElementById('propImg').value.trim(),
    description: document.getElementById('propDesc').value.trim()
  };

  const note = document.getElementById('propertyFormNote');
  const query = id
    ? supabaseClient.from('properties').update(record).eq('id', Number(id))
    : supabaseClient.from('properties').insert(record);

  const { error } = await query;
  if (error) {
    note.textContent = '儲存失敗:' + error.message;
    return;
  }
  propertyFormModal.classList.remove('open');
  loadProperties();
});

// ===== Leads =====
async function loadLeads() {
  const { data, error } = await supabaseClient.from('leads').select('*').order('created_at', { ascending: false });
  const tbody = document.getElementById('leadTableBody');
  if (error) {
    tbody.innerHTML = `<tr><td colspan="7">載入失敗:${error.message}</td></tr>`;
    return;
  }
  const interestLabels = { buy: '想買房', sell: '想賣房', rent: '想租房', other: '其他' };
  tbody.innerHTML = data.map(l => `
    <tr>
      <td>${new Date(l.created_at).toLocaleString('zh-Hant-TW')}</td>
      <td>${l.name}</td>
      <td>${l.phone}</td>
      <td>${l.email || '-'}</td>
      <td>${interestLabels[l.interest] || l.interest || '-'}</td>
      <td class="desc-cell" title="${l.message || ''}">${l.message || '-'}</td>
      <td><button class="admin-action-btn admin-action-delete" data-lead-delete="${l.id}">刪除</button></td>
    </tr>
  `).join('') || `<tr><td colspan="7">尚無留言</td></tr>`;

  tbody.querySelectorAll('[data-lead-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('確定要刪除這筆留言嗎?')) return;
      const { error } = await supabaseClient.from('leads').delete().eq('id', Number(btn.dataset.leadDelete));
      if (error) { alert('刪除失敗:' + error.message); return; }
      loadLeads();
    });
  });
}

checkSession();
