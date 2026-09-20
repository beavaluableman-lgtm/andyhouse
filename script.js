// ===== Property Data =====
// Fallback seed data, used only if the Supabase fetch fails (e.g. offline)
const SEED_PROPERTIES = [
  {
    id: 1, type: '住宅', title: '信義豪景大樓 高樓層景觀戶',
    location: '台北市信義區松仁路', price: 3680, priceLabel: '3,680萬',
    area: 42, rooms: 3, baths: 2, floor: '18F/25F', age: 8, status: '熱門',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    desc: '位於信義計畫區精華地段,近捷運站步行5分鐘,景觀視野極佳,採光通風良好,生活機能完善,鄰近百貨商圈與國際學校。'
  },
  {
    id: 2, type: '華廈', title: '大安森林公園景觀華廈',
    location: '台北市大安區新生南路', price: 2980, priceLabel: '2,980萬',
    area: 35, rooms: 2, baths: 2, floor: '6F/12F', age: 15, status: '新上架',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    desc: '面對大安森林公園第一排,擁有無敵綠意景觀,社區管理完善,近捷運大安森林公園站,步行即可享受都會綠洲生活。'
  },
  {
    id: 3, type: '透天', title: '新莊獨棟三層透天別墅',
    location: '新北市新莊區中正路', price: 3200, priceLabel: '3,200萬',
    area: 58, rooms: 4, baths: 3, floor: '3F獨棟', age: 5, status: '熱門',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    desc: '全新整理獨棟透天,前後院皆有,含車庫,格局方正採光佳,鄰近學區與傳統市場,生活機能便利,適合家庭自住。'
  },
  {
    id: 4, type: '套房', title: '中山商圈時尚套房',
    location: '台北市中山區南京東路', price: 880, priceLabel: '880萬',
    area: 12, rooms: 1, baths: 1, floor: '9F/14F', age: 10, status: '新上架',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    desc: '精緻裝潢套房,鄰近捷運中山站與南京復興站,商圈生活機能完善,適合小家庭或首購族群,投報率佳。'
  },
  {
    id: 5, type: '住宅', title: '板橋車站特區景觀住宅',
    location: '新北市板橋區縣民大道', price: 1980, priceLabel: '1,980萬',
    area: 32, rooms: 3, baths: 2, floor: '12F/20F', age: 12, status: '',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    desc: '緊鄰板橋車站特區,高鐵、捷運、客運三鐵共構,生活機能便利,學區優良,適合小家庭首購自住。'
  },
  {
    id: 6, type: '華廈', title: '中山雙捷運美式華廈',
    location: '台北市中山區民權東路', price: 2560, priceLabel: '2,560萬',
    area: 38, rooms: 3, baths: 2, floor: '5F/10F', age: 20, status: '',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    desc: '雙捷運交會生活圈,鄰近行天宮商圈,美式建築風格,社區安靜舒適,適合重視生活品質的首購或換屋族。'
  },
  {
    id: 7, type: '透天', title: '新莊副都心全新透天別墅',
    location: '新北市新莊區中平路', price: 4580, priceLabel: '4,580萬',
    area: 65, rooms: 5, baths: 4, floor: '4F獨棟', age: 2, status: '熱門',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    desc: '新莊副都心指標建案,全新落成,挑高氣派設計,含電梯與車庫,鄰近新開幕商場與公園綠地。'
  },
  {
    id: 8, type: '套房', title: '信義區質感簡約套房',
    location: '台北市信義區忠孝東路', price: 1050, priceLabel: '1,050萬',
    area: 14, rooms: 1, baths: 1, floor: '7F/15F', age: 6, status: '',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    desc: '近捷運國父紀念館站,精品簡約風格裝潢,採光通風佳,鄰近商圈與公園,生活機能一應俱全。'
  },
  {
    id: 9, type: '住宅', title: '大安精華地段電梯大樓',
    location: '台北市大安區敦化南路', price: 4200, priceLabel: '4,200萬',
    area: 45, rooms: 3, baths: 2, floor: '15F/22F', age: 10, status: '熱門',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    desc: '敦化南路精華地段,鄰近東區商圈與捷運站,建材與公設規劃高質感,適合追求生活品味的您。'
  },
  {
    id: 10, type: '住宅', title: '新興路全新完工電梯大樓',
    location: '桃園市楊梅區新興路', price: 1580, priceLabel: '1,580萬',
    area: 30, rooms: 3, baths: 2, floor: '8F/11F', age: 1, status: '新上架',
    img: 'images/property-10.jpg',
    desc: '全新落成電梯大樓,鄰近新湖口交流道與市區生活圈,建材質感佳,格局方正採光通風良好,適合首購或換屋自住。'
  }
];

let PROPERTIES = [];
const PAGE_SIZE = 6;
let currentFilter = 'all';
let visibleCount = PAGE_SIZE;

// ===== Load Properties from Supabase =====
async function loadProperties() {
  try {
    const { data, error } = await supabaseClient
      .from('properties')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;

    PROPERTIES = data.map(row => ({
      id: row.id,
      type: row.type,
      title: row.title,
      location: row.location,
      price: row.price,
      priceLabel: row.price_label,
      area: row.area,
      rooms: row.rooms,
      baths: row.baths,
      floor: row.floor,
      age: row.age,
      status: row.status,
      img: row.img,
      desc: row.description
    }));
  } catch (err) {
    console.warn('無法連線至資料庫,改用預設房源資料', err);
    PROPERTIES = SEED_PROPERTIES;
  }
  renderListings();
}

// ===== Render Listings =====
function getFilteredProperties() {
  if (currentFilter === 'all') return PROPERTIES;
  return PROPERTIES.filter(p => p.type === currentFilter);
}

function renderListings() {
  const grid = document.getElementById('listingGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const filtered = getFilteredProperties();
  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = toShow.map(p => `
    <div class="listing-card" data-id="${p.id}">
      <div class="listing-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <span class="listing-tag">${p.type}</span>
        ${p.status ? `<span class="listing-status">${p.status}</span>` : ''}
      </div>
      <div class="listing-body">
        <div class="listing-price">NT$ ${p.priceLabel}</div>
        <div class="listing-title">${p.title}</div>
        <div class="listing-location">📍 ${p.location}</div>
        <div class="listing-meta">
          <span>坪數 ${p.area}坪</span>
          <span>${p.rooms}房${p.baths}衛</span>
          <span>${p.floor}</span>
        </div>
      </div>
    </div>
  `).join('');

  loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-block';

  grid.querySelectorAll('.listing-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });
}

// ===== Filter Bar =====
document.getElementById('filterBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  visibleCount = PAGE_SIZE;
  renderListings();
});

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderListings();
});

// ===== Hero Search -> filters + scroll =====
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.getElementById('searchType').value;
  currentFilter = type || 'all';
  visibleCount = PAGE_SIZE;

  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === currentFilter);
  });

  renderListings();
  document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
});

// ===== Modal =====
const modal = document.getElementById('propertyModal');
const modalBody = document.getElementById('modalBody');

function openModal(id) {
  const p = PROPERTIES.find(item => item.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="modal-img">
    <div class="modal-body-inner">
      <div class="listing-price">NT$ ${p.priceLabel}</div>
      <h2>${p.title}</h2>
      <div class="listing-location">📍 ${p.location}</div>
      <div class="modal-meta-grid">
        <div><strong>${p.area}</strong><span>坪數</span></div>
        <div><strong>${p.rooms}</strong><span>房間</span></div>
        <div><strong>${p.baths}</strong><span>衛浴</span></div>
        <div><strong>${p.age}</strong><span>屋齡(年)</span></div>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <a href="#contact" class="btn btn-primary" id="modalContactBtn" style="width:100%;">預約看屋</a>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalContactBtn').addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== Testimonial Slider =====
const track = document.getElementById('testimonialTrack');
let testIndex = 0;

function getCardsPerView() {
  const w = window.innerWidth;
  if (w <= 768) return 1;
  if (w <= 992) return 2;
  return 3;
}

function updateSlider() {
  const cards = track.children;
  const perView = getCardsPerView();
  const maxIndex = Math.max(0, cards.length - perView);
  if (testIndex > maxIndex) testIndex = maxIndex;
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 24;
  track.style.transform = `translateX(-${testIndex * (cardWidth + gap)}px)`;
}

document.getElementById('testimonialNext').addEventListener('click', () => {
  const perView = getCardsPerView();
  const maxIndex = Math.max(0, track.children.length - perView);
  testIndex = testIndex >= maxIndex ? 0 : testIndex + 1;
  updateSlider();
});

document.getElementById('testimonialPrev').addEventListener('click', () => {
  const perView = getCardsPerView();
  const maxIndex = Math.max(0, track.children.length - perView);
  testIndex = testIndex <= 0 ? maxIndex : testIndex - 1;
  updateSlider();
});

window.addEventListener('resize', updateSlider);

// ===== Contact Form =====
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();
  const note = document.getElementById('formNote');
  const submitBtn = e.target.querySelector('.form-submit');

  if (!name || !phone) {
    note.textContent = '請填寫姓名與電話。';
    note.classList.remove('success');
    return;
  }

  submitBtn.disabled = true;
  try {
    const { error } = await supabaseClient.from('leads').insert({
      name, phone, email: email || null, interest, message: message || null
    });
    if (error) throw error;

    note.textContent = `感謝 ${name} 的諮詢!我們將盡快與您聯繫。`;
    note.classList.add('success');
    e.target.reset();
  } catch (err) {
    console.error('送出諮詢失敗', err);
    note.textContent = '送出失敗,請稍後再試或直接來電聯繫我們。';
    note.classList.remove('success');
  } finally {
    submitBtn.disabled = false;
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const siteHeader = document.getElementById('siteHeader');

navToggle.addEventListener('click', () => {
  siteHeader.classList.toggle('nav-open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => siteHeader.classList.remove('nav-open'));
});

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Init =====
loadProperties();
