// Meal Point - NNPC Limited Workplace Food Platform - Core Application Logic

// Mock Seed Data
const MOCK_DATA = {
  users: {
    EMPLOYEE: {
      staffId: 'NNPC/ENG/2021/4892',
      name: 'Engr. Babatunde Lawal',
      title: 'Senior Petroleum Engineer',
      department: 'Upstream Operations',
      building: 'NNPC HQ Tower A',
      floor: 'Floor 7',
      office: 'Office 712',
      avatar: '👨‍💼',
      role: 'EMPLOYEE',
      wallet: { subsidyBalance: 14500, personalBalance: 6200 }
    },
    INTERN: {
      staffId: 'NNPC/INT/2026/014',
      name: 'Chidiebere Okafor',
      title: 'Graduate Petroleum Intern',
      department: 'Reservoir Engineering',
      building: 'NNPC HQ Tower B',
      floor: 'Floor 3',
      office: 'Office 305',
      avatar: '🎓',
      role: 'INTERN',
      wallet: { subsidyBalance: 8500, personalBalance: 2000 }
    },
    CONTRACTOR: {
      staffId: 'NNPC/CON/2025/109',
      name: 'Michael Sterling',
      title: 'Senior IT Consultant',
      department: 'IT & Digital Transformation',
      building: 'Executive Wing Tower C',
      floor: 'Floor 5',
      office: 'Office 502',
      avatar: '💼',
      role: 'CONTRACTOR',
      wallet: { subsidyBalance: 0, personalBalance: 18500 }
    },
    CAFETERIA_VENDOR: {
      staffId: 'NNPC/CAF/2018/003',
      name: 'Chef Aliyu Mohammed',
      title: 'Head Chef & Vendor Manager',
      department: 'NNPC Towers Main Cafeteria',
      building: 'Ground Floor, Block A',
      floor: 'Ground Floor',
      office: 'Kitchen 1',
      avatar: '👨‍🍳',
      role: 'CAFETERIA_VENDOR',
      wallet: { subsidyBalance: 20000, personalBalance: 15000 }
    },
    SUPER_ADMIN: {
      staffId: 'NNPC/ADM/2010/001',
      name: 'Arc. Kabir Ibrahim',
      title: 'Chief Information Officer (CIO)',
      department: 'IT & Digital Transformation',
      building: 'Executive Wing Tower A',
      floor: 'Floor 12',
      office: 'Suite 1201',
      avatar: '🛡️',
      role: 'SUPER_ADMIN',
      wallet: { subsidyBalance: 20000, personalBalance: 50000 }
    },
    COURIER: {
      staffId: 'NNPC/LOG/2024/088',
      name: 'Musa Garba',
      title: 'Senior Floor Dispatcher & Courier',
      department: 'Workplace Logistics',
      building: 'NNPC HQ Logistics Hub',
      floor: 'Ground Floor',
      office: 'Dispatch Station 2',
      avatar: '🛵',
      role: 'COURIER',
      vehicle: 'Motorbike #04 (NNPC Express)',
      rating: 4.95,
      earningsToday: 18500,
      completedDeliveriesToday: 14,
      wallet: { subsidyBalance: 10000, personalBalance: 28500 }
    }
  },

  cafeterias: [
    { id: 'caf-1', name: 'NNPC Towers Main Cafeteria', location: 'Ground Floor, Block A, Abuja', rating: 4.9, status: 'OPEN' },
    { id: 'caf-2', name: 'Executive Lounge & Dining', location: '11th Floor, Executive Wing, Abuja', rating: 4.9, status: 'OPEN' },
    { id: 'caf-3', name: 'Refinery Staff Pavilion', location: 'Port Harcourt Refining Complex', rating: 4.7, status: 'OPEN' }
  ],

  menuItems: [
    {
      id: 'item-1',
      cafeteriaId: 'caf-1',
      name: 'NNPC Special Jollof Rice Combo',
      description: 'Smokey firewood Jollof rice, fried plantain, spicy grilled chicken leg, and fresh coleslaw.',
      category: 'LOCAL_DISHES',
      price: 2500,
      subsidizedPrice: 1800,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      stock: 45,
      prepTime: 12,
      rating: 4.9,
      isAvailable: true,
      isSpecial: true
    },
    {
      id: 'item-2',
      cafeteriaId: 'caf-1',
      name: 'Pounded Yam & Egusi (Goat Meat)',
      description: 'Smooth white pounded yam served with rich melon Egusi soup, stockfish, and tender goat meat.',
      category: 'LOCAL_DISHES',
      price: 3200,
      subsidizedPrice: 2200,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
      stock: 30,
      prepTime: 15,
      rating: 4.8,
      isAvailable: true,
      isSpecial: false
    },
    {
      id: 'item-3',
      cafeteriaId: 'caf-1',
      name: 'Gourmet Beef Burger & Potato Wedges',
      description: '100% Angus beef patty, melted cheddar cheese, caramelized onions, crisp lettuce, served with crispy wedges.',
      category: 'FAST_FOOD',
      price: 3800,
      subsidizedPrice: 2500,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      stock: 20,
      prepTime: 10,
      rating: 4.7,
      isAvailable: true,
      isSpecial: false
    },
    {
      id: 'item-4',
      cafeteriaId: 'caf-1',
      name: 'Quinoa & Grilled Salmon Salad Bowl',
      description: 'Fluffy organic quinoa, Norwegian grilled salmon fillet, avocado slices, and lemon herb vinaigrette.',
      category: 'HEALTHY_SALADS',
      price: 4800,
      subsidizedPrice: 3200,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      stock: 15,
      prepTime: 12,
      rating: 4.9,
      isAvailable: true,
      isSpecial: true
    },
    {
      id: 'item-5',
      cafeteriaId: 'caf-1',
      name: 'Classic NNPC Meat Pie & Ice-Cold Maltina',
      description: 'Flaky golden pastry filled with seasoned minced beef, potatoes, served with ice-cold Maltina.',
      category: 'PASTRIES_SNACKS',
      price: 1200,
      subsidizedPrice: 700,
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80',
      stock: 60,
      prepTime: 5,
      rating: 4.6,
      isAvailable: true,
      isSpecial: false
    },
    {
      id: 'item-6',
      cafeteriaId: 'caf-1',
      name: 'Fresh Mango & Pineapple Smoothie',
      description: '100% natural freshly blended tropical mango, pineapple, and honey smoothie.',
      category: 'BEVERAGES',
      price: 1500,
      subsidizedPrice: 900,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
      stock: 40,
      prepTime: 5,
      rating: 4.9,
      isAvailable: true,
      isSpecial: false
    }
  ],

  initialOrders: [
    {
      id: 'ORD-9821',
      customerName: 'Engr. Babatunde Lawal',
      staffId: 'NNPC/ENG/2021/4892',
      cafeteriaName: 'NNPC Towers Main Cafeteria',
      deliveryBuilding: 'NNPC HQ Tower A',
      deliveryFloor: 'Floor 7',
      deliveryDept: 'Upstream Operations',
      deliveryOffice: 'Office 712',
      fulfillmentMethod: 'DELIVERY',
      scheduledTime: '12:30 PM',
      items: [
        { id: 'item-1', name: 'NNPC Special Jollof Rice Combo', qty: 1, price: 1800 },
        { id: 'item-5', name: 'Classic NNPC Meat Pie & Ice-Cold Maltina', qty: 1, price: 700 }
      ],
      total: 2500,
      status: 'PREPARING',
      prepTimeRemaining: 8,
      timestamp: '12:05 PM',
      qrCode: 'MEALPOINT-9821-VALID'
    },
    {
      id: 'ORD-9820',
      customerName: 'Chidiebere Okafor',
      staffId: 'NNPC/INT/2026/014',
      cafeteriaName: 'NNPC Towers Main Cafeteria',
      deliveryBuilding: 'NNPC HQ Tower B',
      deliveryFloor: 'Floor 3',
      deliveryDept: 'Reservoir Engineering',
      deliveryOffice: 'Office 305',
      fulfillmentMethod: 'DELIVERY',
      scheduledTime: 'IMMEDIATE',
      items: [
        { id: 'item-2', name: 'Pounded Yam & Egusi (Goat Meat)', qty: 1, price: 2200 }
      ],
      total: 2200,
      status: 'DELIVERED',
      prepTimeRemaining: 0,
      timestamp: '11:40 AM',
      qrCode: 'MEALPOINT-9820-VALID'
    }
  ],

  notifications: [
    { id: 'notif-1', title: 'Order Accepted 📝', message: 'Your order #ORD-9821 has been received by NNPC Main Cafeteria.', time: '10 Mins ago', unread: true },
    { id: 'notif-2', title: 'Kitchen Preparing 👨‍🍳', message: 'Chef Aliyu is preparing your Jollof Rice Combo. ~8 mins remaining.', time: '5 Mins ago', unread: true },
    { id: 'notif-3', title: 'Subsidy Refreshed 💳', message: 'Your NNPC monthly meal subsidy balance has been credited.', time: '2 Hours ago', unread: false }
  ]
};

// Global Application State
const state = {
  currentRole: 'EMPLOYEE',
  activeCategory: 'ALL',
  searchQuery: '',
  cart: [],
  orders: [...MOCK_DATA.initialOrders],
  favorites: ['item-1', 'item-4'],
  activeTab: 'menu',
  wallet: { ...MOCK_DATA.users.EMPLOYEE.wallet },
  deliveryBuilding: MOCK_DATA.users.EMPLOYEE.building,
  deliveryFloor: MOCK_DATA.users.EMPLOYEE.floor,
  deliveryDept: MOCK_DATA.users.EMPLOYEE.department,
  deliveryOffice: MOCK_DATA.users.EMPLOYEE.office,
  fulfillmentMethod: 'DELIVERY',
  scheduledTime: 'IMMEDIATE',
  notifications: [...MOCK_DATA.notifications],
  menuItems: [...MOCK_DATA.menuItems],
  ratingStar: 5,
  ratingMealId: null
};

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  initRoleSwitcher();
  renderApp();
});

// Role Switcher
function initRoleSwitcher() {
  const chips = document.querySelectorAll('.role-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      const targetRole = e.currentTarget.getAttribute('data-role');
      e.currentTarget.classList.add('active');
      switchRole(targetRole);
    });
  });
}

function switchRole(role) {
  state.currentRole = role;
  const userObj = MOCK_DATA.users[role];
  state.wallet = { ...userObj.wallet };
  state.deliveryBuilding = userObj.building;
  state.deliveryFloor = userObj.floor;
  state.deliveryDept = userObj.department;
  state.deliveryOffice = userObj.office;

  // Header UI Update
  document.getElementById('header-user-name').innerText = userObj.name;
  document.getElementById('header-user-title').innerText = `${userObj.title} • ${userObj.department}`;
  document.getElementById('header-user-avatar').innerText = userObj.avatar;
  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;
  updateDeliveryPillText();

  if (role === 'CAFETERIA_VENDOR') {
    switchTab('vendor');
  } else if (role === 'SUPER_ADMIN') {
    switchTab('admin');
  } else if (role === 'COURIER') {
    switchTab('courier');
  } else {
    switchTab('menu');
  }

  showToast(`Switched perspective to: ${userObj.name} (${role.replace('_', ' ')})`);
}

function updateDeliveryPillText() {
  const pillText = `${state.deliveryBuilding} • ${state.deliveryFloor} • ${state.deliveryDept} • ${state.deliveryOffice}`;
  document.getElementById('delivery-pill-text').innerText = pillText;
  document.getElementById('checkout-delivery-location').innerText = pillText;
}

function switchTab(tab) {
  state.activeTab = tab;
  renderSidebarNav();
  renderMainContent();
}

function renderApp() {
  renderSidebarNav();
  renderMainContent();
  renderNotificationsList();
}

function renderSidebarNav() {
  const container = document.getElementById('sidebar-nav');
  let html = '';

  if (state.currentRole === 'EMPLOYEE' || state.currentRole === 'INTERN' || state.currentRole === 'CONTRACTOR') {
    html = `
      <div class="nav-section-label">Meal Point Service</div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Cafeteria Menu
      </div>
      <div class="nav-item ${state.activeTab === 'orders' ? 'active' : ''}" onclick="switchTab('orders')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        My Orders & Tracking
      </div>
      <div class="nav-item ${state.activeTab === 'favorites' ? 'active' : ''}" onclick="switchTab('favorites')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        Favorite Meals
      </div>
      <div class="nav-item ${state.activeTab === 'wallet' ? 'active' : ''}" onclick="switchTab('wallet')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        Subsidy Wallet
      </div>
    `;
  } else if (state.currentRole === 'CAFETERIA_VENDOR') {
    html = `
      <div class="nav-section-label">Vendor Management</div>
      <div class="nav-item ${state.activeTab === 'vendor' ? 'active' : ''}" onclick="switchTab('vendor')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Kitchen Orders (KDS)
      </div>
    `;
  } else if (state.currentRole === 'COURIER') {
    html = `
      <div class="nav-section-label">Courier Logistics</div>
      <div class="nav-item ${state.activeTab === 'courier' ? 'active' : ''}" onclick="switchTab('courier')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Rider Dispatch & Hand-off
      </div>
    `;
  } else if (state.currentRole === 'SUPER_ADMIN') {
    html = `
      <div class="nav-section-label">Enterprise Control</div>
      <div class="nav-item ${state.activeTab === 'admin' ? 'active' : ''}" onclick="switchTab('admin')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        Platform Analytics
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderMainContent() {
  const container = document.getElementById('main-container');

  if (state.activeTab === 'menu') {
    renderMenuView(container);
  } else if (state.activeTab === 'orders') {
    renderOrdersView(container);
  } else if (state.activeTab === 'favorites') {
    renderFavoritesView(container);
  } else if (state.activeTab === 'wallet') {
    renderWalletView(container);
  } else if (state.activeTab === 'vendor') {
    renderVendorView(container);
  } else if (state.activeTab === 'courier') {
    renderCourierView(container);
  } else if (state.activeTab === 'admin') {
    renderAdminView(container);
  }
}
    renderOrdersView(container);
  } else if (state.activeTab === 'favorites') {
    renderFavoritesView(container);
  } else if (state.activeTab === 'wallet') {
    renderWalletView(container);
  } else if (state.activeTab === 'vendor') {
    renderVendorView(container);
  } else if (state.activeTab === 'admin') {
    renderAdminView(container);
  }
}

// ----------------------------------------------------
// MENU VIEW
// ----------------------------------------------------
function renderMenuView(container) {
  const userObj = MOCK_DATA.users[state.currentRole];
  const timeGreeting = getTimeGreeting();

  const filteredItems = state.menuItems.filter(item => {
    const matchesCategory = state.activeCategory === 'ALL' || item.category === state.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) || item.description.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  const specials = state.menuItems.filter(item => item.isSpecial);

  container.innerHTML = `
    <!-- Personalized Hero Greeting -->
    <div class="hero-greeting-card">
      <div class="hero-greeting-title">${timeGreeting}, ${userObj.name}</div>
      <div class="hero-greeting-subtitle">What would you like to eat today at NNPC Limited?</div>
      <div class="hero-search-wrapper">
        <span class="hero-search-icon">🔍</span>
        <input type="text" class="hero-search-input" id="menu-search-input" value="${state.searchQuery}" placeholder="Search meals, snacks, healthy bowls, drinks..." oninput="handleSearchInput(event)">
      </div>
    </div>

    <!-- Food Category Pills -->
    <div class="category-pills-bar">
      <button class="category-pill-btn ${state.activeCategory === 'ALL' ? 'active' : ''}" onclick="setCategory('ALL')">🍽️ All Meals</button>
      <button class="category-pill-btn ${state.activeCategory === 'LOCAL_DISHES' ? 'active' : ''}" onclick="setCategory('LOCAL_DISHES')">🍛 Local Dishes</button>
      <button class="category-pill-btn ${state.activeCategory === 'FAST_FOOD' ? 'active' : ''}" onclick="setCategory('FAST_FOOD')">🍔 Fast Food</button>
      <button class="category-pill-btn ${state.activeCategory === 'HEALTHY_SALADS' ? 'active' : ''}" onclick="setCategory('HEALTHY_SALADS')">🥗 Healthy Choice</button>
      <button class="category-pill-btn ${state.activeCategory === 'BEVERAGES' ? 'active' : ''}" onclick="setCategory('BEVERAGES')">🥤 Drinks</button>
      <button class="category-pill-btn ${state.activeCategory === 'PASTRIES_SNACKS' ? 'active' : ''}" onclick="setCategory('PASTRIES_SNACKS')">🍰 Pastries & Snacks</button>
    </div>

    <!-- Today's Special Banner -->
    ${specials.length > 0 ? `
      <div class="specials-banner">
        <div>
          <span class="specials-badge">⭐ Today's Chef Special</span>
          <h3 style="font-size:16px; font-weight:800; color:var(--slate-900); margin-top:6px;">${specials[0].name}</h3>
          <p style="font-size:12px; color:var(--slate-600); margin-top:2px;">${specials[0].description}</p>
        </div>
        <div style="text-align:right;">
          <div style="font-size:18px; font-weight:800; color:var(--nnpc-green);">₦${specials[0].subsidizedPrice.toLocaleString()}</div>
          <button onclick="addToCart('${specials[0].id}')" class="btn-add-cart" style="margin-top:6px;">Add to Order</button>
        </div>
      </div>
    ` : ''}

    <!-- Popular Meals Grid -->
    <div class="section-header">
      <h2 class="section-title">🍛 Popular & Recommended Meals</h2>
      <span style="font-size:12px; color:var(--slate-500); font-weight:600;">Showing ${filteredItems.length} items</span>
    </div>

    <div class="meal-grid">
      ${filteredItems.map(item => `
        <div class="meal-card">
          <div class="meal-card-image-wrap">
            <img src="${item.image}" alt="${item.name}" class="meal-card-image">
            <span class="meal-card-badge">⏱️ ${item.prepTime} Mins</span>
            ${!item.isAvailable ? `<div class="meal-sold-out-overlay">Sold Out</div>` : ''}
          </div>
          <div class="meal-card-body">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <h3 class="meal-card-title">${item.name}</h3>
              <span style="font-size:12px; font-weight:700; color:var(--nnpc-gold-dark);">⭐ ${item.rating}</span>
            </div>
            <p class="meal-card-desc">${item.description}</p>
            <div class="meal-card-meta">
              <span>🏢 NNPC HQ Cafeteria</span>
              <span>• Stock: ${item.stock} left</span>
            </div>
            <div class="meal-card-footer">
              <div class="meal-price-box">
                <span class="meal-price-subsidized">₦${item.subsidizedPrice.toLocaleString()}</span>
                <span class="meal-price-original">₦${item.price.toLocaleString()}</span>
              </div>
              <div style="display:flex; gap:6px;">
                <button onclick="reorderSingleItem('${item.id}')" class="btn-reorder" title="Order Again with 1 Click">Order Again</button>
                <button onclick="addToCart('${item.id}')" class="btn-add-cart" ${!item.isAvailable ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function setCategory(cat) {
  state.activeCategory = cat;
  renderMainContent();
}

function handleSearchInput(e) {
  state.searchQuery = e.target.value.toLowerCase();
  renderMainContent();
}

// ----------------------------------------------------
// ORDERS VIEW & LIVE TRACKER
// ----------------------------------------------------
function renderOrdersView(container) {
  const activeOrders = state.orders.filter(o => o.status !== 'DELIVERED');
  const pastOrders = state.orders.filter(o => o.status === 'DELIVERED');

  container.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">📦 Active Orders & Live Tracking</h2>
    </div>

    ${activeOrders.length === 0 ? `
      <div style="background:#fff; border-radius:16px; padding:32px; text-align:center; border:1px solid var(--slate-200); margin-bottom:28px;">
        <span style="font-size:40px;">🍲</span>
        <h3 style="font-size:16px; font-weight:800; margin-top:12px;">No active orders right now</h3>
        <p style="font-size:12px; color:var(--slate-500); margin-top:4px;">Browse the menu to place an office workstation delivery order.</p>
      </div>
    ` : activeOrders.map(order => `
      <div style="background:#fff; border-radius:16px; padding:24px; border:1px solid var(--slate-200); margin-bottom:24px; box-shadow:var(--card-shadow);">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--slate-100); padding-bottom:12px; margin-bottom:16px;">
          <div>
            <span style="font-size:11px; font-weight:800; color:var(--nnpc-green-dark); background:var(--nnpc-green-light); padding:4px 10px; border-radius:12px;">${order.id}</span>
            <span style="font-size:12px; font-weight:700; color:var(--slate-600); margin-left:8px;">Placed at ${order.timestamp}</span>
          </div>
          <div style="font-size:16px; font-weight:800; color:var(--nnpc-green);">₦${order.total.toLocaleString()}</div>
        </div>

        <!-- 4-Stage Tracker Progress Bar -->
        <div class="tracker-progress-bar">
          <div class="tracker-progress-step completed">
            <div class="tracker-step-icon">📝</div>
            <span>Received</span>
          </div>
          <div class="tracker-progress-step ${order.status === 'PREPARING' || order.status === 'DRIVER_ASSIGNED' || order.status === 'DELIVERED' ? 'completed' : ''}">
            <div class="tracker-step-icon">👨‍🍳</div>
            <span>Preparing (${order.prepTimeRemaining}m)</span>
          </div>
          <div class="tracker-progress-step ${order.status === 'DRIVER_ASSIGNED' || order.status === 'DELIVERED' ? 'completed' : ''}">
            <div class="tracker-step-icon">🛵</div>
            <span>Driver Assigned</span>
          </div>
          <div class="tracker-progress-step ${order.status === 'DELIVERED' ? 'completed' : ''}">
            <div class="tracker-step-icon">🏁</div>
            <span>Delivered</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:16px; padding-top:12px; border-top:1px solid var(--slate-100);">
          <div style="font-size:12px; color:var(--slate-600);">
            <strong>Destination:</strong> ${order.deliveryBuilding} • ${order.deliveryFloor} • ${order.deliveryOffice}
          </div>
          <button onclick="openQRModal('${order.id}')" class="category-pill-btn" style="padding:6px 12px; font-size:11px;">📦 Show QR Pickup Code</button>
        </div>
      </div>
    `).join('')}

    <!-- Past Orders History -->
    <div class="section-header" style="margin-top:36px;">
      <h2 class="section-title">📜 Past Order History</h2>
    </div>

    ${pastOrders.map(order => `
      <div style="background:#fff; border-radius:12px; padding:16px 20px; border:1px solid var(--slate-200); margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
        <div>
          <div style="font-size:13px; font-weight:800; color:var(--slate-900);">${order.id} • ₦${order.total.toLocaleString()}</div>
          <div style="font-size:11px; color:var(--slate-500); margin-top:2px;">Delivered to ${order.deliveryOffice} on ${order.timestamp}</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button onclick="openRatingModal('${order.items[0].id}', '${order.items[0].name}')" class="category-pill-btn" style="padding:6px 12px; font-size:11px;">⭐ Rate Meal</button>
          <button onclick="reorderPastOrder('${order.id}')" class="btn-reorder">Order Again</button>
        </div>
      </div>
    `).join('')}
  `;
}

// ----------------------------------------------------
// FAVORITES VIEW
// ----------------------------------------------------
function renderFavoritesView(container) {
  const favoriteItems = state.menuItems.filter(item => state.favorites.includes(item.id));

  container.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">❤️ Saved Favorite Meals</h2>
    </div>

    <div class="meal-grid">
      ${favoriteItems.map(item => `
        <div class="meal-card">
          <div class="meal-card-image-wrap">
            <img src="${item.image}" alt="${item.name}" class="meal-card-image">
          </div>
          <div class="meal-card-body">
            <h3 class="meal-card-title">${item.name}</h3>
            <p class="meal-card-desc">${item.description}</p>
            <div class="meal-card-footer">
              <span class="meal-price-subsidized">₦${item.subsidizedPrice.toLocaleString()}</span>
              <button onclick="addToCart('${item.id}')" class="btn-add-cart">+ Add to Order</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ----------------------------------------------------
// WALLET VIEW
// ----------------------------------------------------
function renderWalletView(container) {
  container.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">💳 Subsidy & Personal Wallet</h2>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:28px;">
      <div style="background:linear-gradient(135deg, var(--nnpc-green) 0%, var(--nnpc-green-dark) 100%); color:#fff; padding:24px; border-radius:16px; box-shadow:0 8px 24px var(--nnpc-green-glow);">
        <div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--nnpc-gold);">NNPC Monthly Meal Subsidy</div>
        <div style="font-size:32px; font-weight:800; margin:10px 0;">₦${state.wallet.subsidyBalance.toLocaleString()}</div>
        <div style="font-size:11px; opacity:0.85;">Refreshes on the 1st of every month for NNPC Staff</div>
      </div>

      <div style="background:#fff; border:1px solid var(--slate-200); padding:24px; border-radius:16px; box-shadow:var(--card-shadow); display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--slate-500);">Personal Wallet Balance</div>
          <div style="font-size:32px; font-weight:800; color:var(--slate-900); margin:10px 0;">₦${state.wallet.personalBalance.toLocaleString()}</div>
        </div>
        <button onclick="openWalletTopupModal()" class="btn-add-cart" style="width:fit-content; padding:10px 18px;">+ Top Up Personal Balance</button>
      </div>
    </div>

    <div class="section-header">
      <h3 class="section-title">📜 Wallet Transaction History</h3>
    </div>
    <div style="background:#fff; border-radius:12px; border:1px solid var(--slate-200); overflow:hidden;">
      <div style="padding:14px 20px; border-bottom:1px solid var(--slate-100); display:flex; justify-content:space-between; font-size:12px;">
        <span><strong>Order #ORD-9821</strong> • Special Jollof Rice Combo</span>
        <span style="font-weight:800; color:var(--nnpc-red);">-₦1,800 (Subsidy)</span>
      </div>
      <div style="padding:14px 20px; border-bottom:1px solid var(--slate-100); display:flex; justify-content:space-between; font-size:12px;">
        <span><strong>Monthly Subsidy Allocation</strong> • NNPC Allowance</span>
        <span style="font-weight:800; color:var(--nnpc-green);">+₦20,000</span>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// VENDOR VIEW (KDS & OPERATIONAL DASHBOARD)
// ----------------------------------------------------
function renderVendorView(container) {
  const pendingOrders = state.orders.filter(o => o.status === 'RECEIVED');

  container.innerHTML = `
    <!-- High Priority Flashing Alert Banner for Incoming Orders -->
    ${pendingOrders.length > 0 ? `
      <div class="vendor-alert-flashing">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:22px;">🚨</span>
          <div>
            <div style="font-size:15px; font-weight:900;">${pendingOrders.length} NEW WORKPLACE ORDER(S) WAITING!</div>
            <div style="font-size:11px; opacity:0.9;">Accept or Reject within kitchen preparation SLA</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <button onclick="toggleAudioAlert()" style="background:rgba(255,255,255,0.2); border:1px solid #fff; color:#fff; padding:6px 12px; border-radius:8px; font-size:11px; font-weight:700; cursor:pointer;">
            🔔 Sound: ${state.audioAlert ? 'ON' : 'MUTED'}
          </button>
        </div>
      </div>
    ` : ''}

    <div class="section-header">
      <h2 class="section-title">👨‍🍳 Kitchen Display System (KDS) - Vendor Dashboard</h2>
      <button onclick="openVendorDishModal()" class="btn-add-cart" style="padding:10px 18px;">➕ Add New Dish / Price</button>
    </div>

    <!-- Active Kitchen Orders Queue -->
    <div style="margin-bottom:32px;">
      <h3 style="font-size:14px; font-weight:800; margin-bottom:14px; color:var(--slate-900);">📦 Incoming & Preparation Orders Queue</h3>
      
      ${state.orders.map(order => `
        <div style="background:#fff; border-radius:16px; padding:20px; border:1px solid var(--slate-200); margin-bottom:16px; box-shadow:var(--card-shadow);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--slate-100); padding-bottom:12px; margin-bottom:14px;">
            <div>
              <span class="kds-status-badge kds-status-${order.status}">${order.status}</span>
              <span style="font-size:16px; font-weight:900; color:var(--slate-900); margin-left:8px;">${order.id} • ${order.customerName}</span>
              <div style="font-size:12px; color:var(--slate-500); margin-top:2px;">
                🏢 <strong>Delivery:</strong> ${order.deliveryBuilding} • ${order.deliveryFloor} • ${order.deliveryOffice}
              </div>
            </div>

            <!-- Verification Code Display for Kitchen Staff -->
            <div style="text-align:right;">
              <div style="font-size:10px; font-weight:800; color:var(--slate-400); text-transform:uppercase;">Pickup Code:</div>
              <div class="verification-code-badge">${order.qrCode.split('-')[1] || '9821'}</div>
            </div>
          </div>

          <!-- Itemized Kitchen Checklist -->
          <div style="margin-bottom:14px; background:var(--slate-50); padding:12px; border-radius:10px;">
            <div style="font-size:11px; font-weight:800; color:var(--slate-500); text-transform:uppercase; margin-bottom:6px;">Items to Prepare:</div>
            ${order.items.map(item => `
              <div style="font-size:13px; font-weight:700; color:var(--slate-800); display:flex; justify-content:space-between;">
                <span>• ${item.name} x${item.qty || 1}</span>
                <span>₦${((item.subsidizedPrice || item.price) * (item.qty || 1)).toLocaleString()}</span>
              </div>
            `).join('')}
          </div>

          <!-- KDS Controls (Accept/Reject, Extend Time, Ready, Courier Match, Print Receipt) -->
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; border-top:1px solid var(--slate-100); padding-top:12px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <button onclick="openReceiptModal('${order.id}')" class="category-pill-btn" style="padding:6px 12px; font-size:11px;">🖨️ Print Receipt</button>
              ${order.status === 'PREPARING' ? `
                <button onclick="extendPrepTime('${order.id}', 5)" class="category-pill-btn" style="padding:6px 10px; font-size:11px;">+5m Prep</button>
                <button onclick="extendPrepTime('${order.id}', 10)" class="category-pill-btn" style="padding:6px 10px; font-size:11px;">+10m Prep</button>
              ` : ''}
            </div>

            <div style="display:flex; gap:8px;">
              ${order.status === 'RECEIVED' ? `
                <button onclick="openVendorRejectModal('${order.id}')" style="background:var(--nnpc-red-light); color:var(--nnpc-red); border:1px solid rgba(217,0,12,0.3); padding:8px 14px; border-radius:8px; font-weight:700; font-size:12px; cursor:pointer;">
                  Reject Order
                </button>
                <button onclick="advanceOrderStatus('${order.id}', 'PREPARING')" class="btn-add-cart" style="padding:8px 16px;">
                  ✅ Accept Order (Start Cooking)
                </button>
              ` : ''}

              ${order.status === 'PREPARING' ? `
                <button onclick="advanceOrderStatus('${order.id}', 'DRIVER_ASSIGNED')" class="btn-add-cart" style="padding:8px 16px; background:linear-gradient(135deg, var(--nnpc-gold-dark) 0%, var(--nnpc-gold) 100%); color:var(--slate-900);">
                  🛍️ Mark Bag Sealed & Ready for Courier
                </button>
              ` : ''}

              ${order.status === 'DRIVER_ASSIGNED' ? `
                <div style="font-size:12px; font-weight:800; color:var(--nnpc-green-dark); background:var(--nnpc-green-light); padding:6px 12px; border-radius:8px;">
                  🛵 Matched: Courier Musa Garba (ETA ~3m)
                </div>
                <button onclick="advanceOrderStatus('${order.id}', 'DELIVERED')" class="btn-add-cart" style="padding:8px 14px;">
                  🤝 Handed to Courier
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Vendor Menu Items Management Table -->
    <div style="background:#fff; border-radius:16px; padding:20px; border:1px solid var(--slate-200); margin-bottom:28px; box-shadow:var(--card-shadow);">
      <h3 style="font-size:14px; font-weight:800; margin-bottom:14px; color:var(--slate-900);">🍲 Cafeteria Menu Items & Pricing</h3>
      
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:12px;">
          <thead>
            <tr style="border-bottom:2px solid var(--slate-200); color:var(--slate-500); text-transform:uppercase; font-size:10px; font-weight:800;">
              <th style="padding:10px;">Dish</th>
              <th style="padding:10px;">Category</th>
              <th style="padding:10px;">Standard Price</th>
              <th style="padding:10px;">Subsidized Price</th>
              <th style="padding:10px;">Status</th>
              <th style="padding:10px; text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${state.menuItems.map(item => `
              <tr style="border-bottom:1px solid var(--slate-100);">
                <td style="padding:12px 10px; font-weight:800; color:var(--slate-900);">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${item.image}" alt="${item.name}" style="width:36px; height:36px; border-radius:8px; object-fit:cover;">
                    <div>
                      <div>${item.name}</div>
                      <div style="font-size:10px; color:var(--slate-400); font-weight:600;">Prep: ${item.prepTime}m • Stock: ${item.stock}</div>
                    </div>
                  </div>
                </td>
                <td style="padding:10px; font-weight:600; color:var(--slate-600);">${item.category.replace('_', ' ')}</td>
                <td style="padding:10px; font-weight:700; color:var(--slate-500); text-decoration:line-through;">₦${item.price.toLocaleString()}</td>
                <td style="padding:10px; font-weight:800; color:var(--nnpc-green);">₦${item.subsidizedPrice.toLocaleString()}</td>
                <td style="padding:10px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <label class="toggle-switch">
                      <input type="checkbox" ${item.isAvailable ? 'checked' : ''} onchange="toggleMealAvailability('${item.id}')">
                      <span class="toggle-slider"></span>
                    </label>
                    <span style="font-size:11px; font-weight:700; color:${item.isAvailable ? 'var(--nnpc-green)' : 'var(--nnpc-red)'};">
                      ${item.isAvailable ? 'Available' : 'Sold Out'}
                    </span>
                  </div>
                </td>
                <td style="padding:10px; text-align:right;">
                  <button onclick="openVendorDishModal('${item.id}')" class="category-pill-btn" style="padding:4px 10px; font-size:11px; display:inline-flex;">✏️ Edit</button>
                  <button onclick="deleteVendorDish('${item.id}')" style="background:var(--nnpc-red-light); color:var(--nnpc-red); border:1px solid rgba(217,0,12,0.2); padding:4px 10px; border-radius:8px; font-size:11px; font-weight:700; cursor:pointer; margin-left:4px;">🗑️ Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// COURIER / DRIVER VIEW (4TH INTERFACE LOGISTICS SYSTEM)
// ----------------------------------------------------
function renderCourierView(container) {
  const courierObj = MOCK_DATA.users.COURIER;

  container.innerHTML = `
    <!-- Rider Top Stats Header -->
    <div style="background:var(--slate-900); color:#fff; border-radius:20px; padding:24px; margin-bottom:28px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--nnpc-gold);">NNPC Express Courier Hub</div>
        <div style="font-size:24px; font-weight:900; margin-top:2px;">${courierObj.name}</div>
        <div style="font-size:12px; color:var(--slate-400); margin-top:2px;">🛵 ${courierObj.vehicle} • Rating ⭐ ${courierObj.rating}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px; text-transform:uppercase; color:var(--slate-400);">Today's Earnings</div>
        <div style="font-size:28px; font-weight:900; color:var(--nnpc-gold);">₦${courierObj.earningsToday.toLocaleString()}</div>
        <div style="font-size:11px; color:var(--nnpc-green); font-weight:700;">${courierObj.completedDeliveriesToday} Completed Orders</div>
      </div>
    </div>

    <!-- Active Courier Dispatch Card -->
    <div class="section-header">
      <h2 class="section-title">⚡ Live Dispatch & Order Hand-off</h2>
    </div>

    <div class="courier-card">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid var(--slate-100); padding-bottom:14px; margin-bottom:16px;">
        <div>
          <span style="font-size:11px; font-weight:900; background:var(--nnpc-gold); color:var(--slate-900); padding:4px 10px; border-radius:6px;">NEW DISPATCH ALERT</span>
          <h3 style="font-size:18px; font-weight:900; color:var(--slate-900); margin-top:6px;">Order #ORD-9821</h3>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px; font-weight:900; color:var(--nnpc-green);">₦1,200 Fee</div>
          <div style="font-size:11px; color:var(--slate-500);">Est. Transit: ~8 Mins</div>
        </div>
      </div>

      <!-- Pickup & Drop-Off Routing Details -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
        <div style="background:var(--slate-50); padding:14px; border-radius:12px; border:1px solid var(--slate-200);">
          <div style="font-size:10px; font-weight:800; text-transform:uppercase; color:var(--slate-500);">1. Merchant Pickup:</div>
          <div style="font-size:13px; font-weight:800; color:var(--slate-900); margin-top:2px;">NNPC Towers Main Cafeteria</div>
          <div style="font-size:11px; color:var(--slate-500);">Ground Floor, Block A • Counter 2</div>
          <div style="margin-top:8px;">
            <span style="font-size:10px; font-weight:800; color:var(--slate-400);">PRESENCE CODE:</span>
            <span class="verification-code-badge" style="font-size:16px; padding:2px 8px; margin-left:4px;">9821</span>
          </div>
        </div>

        <div style="background:var(--nnpc-green-light); padding:14px; border-radius:12px; border:1px solid rgba(0,102,51,0.2);">
          <div style="font-size:10px; font-weight:800; text-transform:uppercase; color:var(--nnpc-green-dark);">2. Customer Hand-off:</div>
          <div style="font-size:13px; font-weight:800; color:var(--nnpc-green-dark); margin-top:2px;">Engr. Babatunde Lawal</div>
          <div style="font-size:12px; font-weight:800; color:var(--slate-900);">NNPC HQ Tower A • Floor 7 • Office 712</div>
          <div style="font-size:11px; color:var(--slate-500); margin-top:4px;">📝 Note: "Leave on workstation desk 712"</div>
        </div>
      </div>

      <!-- Itemized Courier Verification Checklist -->
      <div style="margin-bottom:20px; background:#fff; border:1px solid var(--slate-200); padding:14px; border-radius:12px;">
        <div style="font-size:11px; font-weight:800; text-transform:uppercase; color:var(--slate-500); margin-bottom:8px;">Pickup Checklist Verification:</div>
        <label style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; margin-bottom:6px;">
          <input type="checkbox" checked style="width:16px; height:16px;"> NNPC Special Jollof Rice Combo (x1)
        </label>
        <label style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; margin-bottom:6px;">
          <input type="checkbox" checked style="width:16px; height:16px;"> Classic NNPC Meat Pie & Ice-Cold Maltina (x1)
        </label>
        <label style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700;">
          <input type="checkbox" checked style="width:16px; height:16px;"> Sealed Thermal Bag & Cutlery Pack
        </label>
      </div>

      <!-- Action Buttons -->
      <div style="display:grid; grid-template-columns:1fr 2fr; gap:12px;">
        <button onclick="showToast('Dispatch job declined.')" class="courier-btn-large courier-btn-decline">
          Decline Job (24s)
        </button>
        <button onclick="openCourierProofModal('ORD-9821')" class="courier-btn-large courier-btn-accept">
          🛵 Arrived at Office Floor / Confirm Drop-Off
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// SUPER ADMIN VIEW
// ----------------------------------------------------
function renderAdminView(container) {
  container.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">👑 Super Admin Platform Analytics</h2>
    </div>

    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:16px; margin-bottom:28px;">
      <div style="background:#fff; padding:20px; border-radius:14px; border:1px solid var(--slate-200);">
        <div style="font-size:11px; font-weight:700; color:var(--slate-500); text-transform:uppercase;">Today's Orders</div>
        <div style="font-size:26px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">148 Orders</div>
      </div>
      <div style="background:#fff; padding:20px; border-radius:14px; border:1px solid var(--slate-200);">
        <div style="font-size:11px; font-weight:700; color:var(--slate-500); text-transform:uppercase;">Today's Revenue</div>
        <div style="font-size:26px; font-weight:800; color:var(--slate-900); margin-top:4px;">₦342,500</div>
      </div>
      <div style="background:#fff; padding:20px; border-radius:14px; border:1px solid var(--slate-200);">
        <div style="font-size:11px; font-weight:700; color:var(--slate-500); text-transform:uppercase;">Peak Lunch Time</div>
        <div style="font-size:26px; font-weight:800; color:var(--nnpc-gold-dark); margin-top:4px;">12:30 PM</div>
      </div>
      <div style="background:#fff; padding:20px; border-radius:14px; border:1px solid var(--slate-200);">
        <div style="font-size:11px; font-weight:700; color:var(--slate-500); text-transform:uppercase;">Avg Delivery Time</div>
        <div style="font-size:26px; font-weight:800; color:var(--nnpc-green-dark); margin-top:4px;">14 Mins</div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// ACTIONS & MODALS
// ----------------------------------------------------
function addToCart(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existing = state.cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...item, qty: 1 });
  }

  updateCartBadge();
  showToast(`Added ${item.name} to cart!`);
}

function updateCartBadge() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge-count');
  badge.innerText = totalQty;
  badge.style.display = totalQty > 0 ? 'flex' : 'none';
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const isOpen = drawer.style.right === '0px';
  drawer.style.right = isOpen ? '-420px' : '0px';
  if (!isOpen) renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalElem = document.getElementById('cart-subtotal');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 0; color:var(--slate-400);">
        <span style="font-size:40px;">🛒</span>
        <p style="font-size:13px; font-weight:600; margin-top:10px;">Your cart is empty</p>
      </div>
    `;
    subtotalElem.innerText = '₦0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.subsidizedPrice * item.qty;
    subtotal += itemTotal;
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--slate-100);">
        <div>
          <div style="font-size:13px; font-weight:800; color:var(--slate-900);">${item.name}</div>
          <div style="font-size:11px; color:var(--slate-500);">₦${item.subsidizedPrice.toLocaleString()} x ${item.qty}</div>
        </div>
        <div style="font-size:14px; font-weight:800; color:var(--nnpc-green);">₦${itemTotal.toLocaleString()}</div>
      </div>
    `;
  }).join('');

  subtotalElem.innerText = `₦${subtotal.toLocaleString()}`;
}

function setFulfillment(method) {
  state.fulfillmentMethod = method;
  document.getElementById('fulfillment-delivery-btn').classList.toggle('active', method === 'DELIVERY');
  document.getElementById('fulfillment-pickup-btn').classList.toggle('active', method === 'PICKUP');
}

function checkoutOrder() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.subsidizedPrice * item.qty), 0);
  if (state.wallet.subsidyBalance < subtotal) {
    showToast('Insufficient Subsidy Wallet balance!');
    return;
  }

  state.wallet.subsidyBalance -= subtotal;
  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;

  const newOrder = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: MOCK_DATA.users[state.currentRole].name,
    staffId: MOCK_DATA.users[state.currentRole].staffId,
    cafeteriaName: 'NNPC Towers Main Cafeteria',
    deliveryBuilding: state.deliveryBuilding,
    deliveryFloor: state.deliveryFloor,
    deliveryDept: state.deliveryDept,
    deliveryOffice: state.deliveryOffice,
    fulfillmentMethod: state.fulfillmentMethod,
    scheduledTime: document.getElementById('checkout-schedule-time').value,
    items: [...state.cart],
    total: subtotal,
    status: 'PREPARING',
    prepTimeRemaining: 12,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    qrCode: `MEALPOINT-${Math.floor(1000 + Math.random() * 9000)}-VALID`
  };

  state.orders.unshift(newOrder);
  state.cart = [];
  updateCartBadge();
  toggleCartDrawer();

  showToast(`Order ${newOrder.id} placed successfully!`);
  switchTab('orders');
}

function toggleNotificationsDrawer() {
  const drawer = document.getElementById('notifications-drawer');
  drawer.classList.toggle('open');
}

function renderNotificationsList() {
  const container = document.getElementById('notifications-list');
  container.innerHTML = state.notifications.map(n => `
    <div class="notification-item ${n.unread ? 'unread' : ''}">
      <div>
        <div style="font-size:13px; font-weight:800; color:var(--slate-900);">${n.title}</div>
        <div style="font-size:12px; color:var(--slate-600); margin-top:2px;">${n.message}</div>
        <div style="font-size:10px; color:var(--slate-400); margin-top:4px;">${n.time}</div>
      </div>
    </div>
  `).join('');
}

// Location Picker Modal
function openLocationModal() {
  document.getElementById('location-modal').style.display = 'flex';
}
function closeLocationModal() {
  document.getElementById('location-modal').style.display = 'none';
}
function saveLocationSelection() {
  state.deliveryBuilding = document.getElementById('modal-building-select').value;
  state.deliveryFloor = document.getElementById('modal-floor-select').value;
  state.deliveryDept = document.getElementById('modal-dept-select').value;
  state.deliveryOffice = document.getElementById('modal-desk-input').value;
  updateDeliveryPillText();
  closeLocationModal();
  showToast('Office delivery location updated!');
}

// QR Code Modal
function openQRModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    document.getElementById('qr-display-box').innerText = order.qrCode || `MEALPOINT-${order.id}`;
    document.getElementById('qr-order-details').innerText = `Order #${order.id} • ${order.cafeteriaName}`;
  }
  document.getElementById('qr-modal').style.display = 'flex';
}
function closeQRModal() {
  document.getElementById('qr-modal').style.display = 'none';
}

// Rating Modal
function openRatingModal(mealId, mealName) {
  state.ratingMealId = mealId;
  document.getElementById('rating-meal-title').innerText = mealName;
  document.getElementById('rating-modal').style.display = 'flex';
}
function closeRatingModal() {
  document.getElementById('rating-modal').style.display = 'none';
}
function setRatingStar(num) {
  state.ratingStar = num;
  const stars = document.getElementById('star-rating-box').children;
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.opacity = i < num ? '1' : '0.3';
  }
}
function submitMealRating() {
  closeRatingModal();
  showToast(`Thank you! Submitted ${state.ratingStar}⭐ rating for your meal.`);
}

// Reorder Features
function reorderSingleItem(itemId) {
  addToCart(itemId);
  toggleCartDrawer();
}
function reorderPastOrder(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.items.forEach(item => addToCart(item.id));
    toggleCartDrawer();
  }
}

// KDS Availability Toggle
function toggleMealAvailability(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (item) {
    item.isAvailable = !item.isAvailable;
    renderMainContent();
    showToast(`${item.name} marked as ${item.isAvailable ? 'Available' : 'Sold Out'}`);
  }
}

// Vendor Menu Item Management
function openVendorDishModal(itemId = null) {
  const modal = document.getElementById('vendor-dish-modal');
  const title = document.getElementById('vendor-modal-title');
  const editId = document.getElementById('vendor-dish-edit-id');
  const nameInput = document.getElementById('vendor-dish-name');
  const catInput = document.getElementById('vendor-dish-category');
  const priceInput = document.getElementById('vendor-dish-price');
  const subPriceInput = document.getElementById('vendor-dish-subsidized-price');
  const prepInput = document.getElementById('vendor-dish-prep-time');
  const descInput = document.getElementById('vendor-dish-desc');
  const imgInput = document.getElementById('vendor-dish-image');
  const availInput = document.getElementById('vendor-dish-available');

  if (itemId) {
    const item = state.menuItems.find(i => i.id === itemId);
    if (item) {
      title.innerText = 'Edit Cafeteria Dish & Price';
      editId.value = item.id;
      nameInput.value = item.name;
      catInput.value = item.category;
      priceInput.value = item.price;
      subPriceInput.value = item.subsidizedPrice;
      prepInput.value = item.prepTime;
      descInput.value = item.description;
      imgInput.value = item.image;
      availInput.checked = item.isAvailable;
    }
  } else {
    title.innerText = 'Add New Cafeteria Dish';
    editId.value = '';
    nameInput.value = '';
    catInput.value = 'LOCAL_DISHES';
    priceInput.value = '';
    subPriceInput.value = '';
    prepInput.value = '12';
    descInput.value = '';
    imgInput.value = '';
    availInput.checked = true;
  }

  modal.style.display = 'flex';
}

function closeVendorDishModal() {
  document.getElementById('vendor-dish-modal').style.display = 'none';
}

function saveVendorDish() {
  const editId = document.getElementById('vendor-dish-edit-id').value;
  const name = document.getElementById('vendor-dish-name').value.trim();
  const category = document.getElementById('vendor-dish-category').value;
  const price = parseInt(document.getElementById('vendor-dish-price').value) || 0;
  const subsidizedPrice = parseInt(document.getElementById('vendor-dish-subsidized-price').value) || 0;
  const prepTime = parseInt(document.getElementById('vendor-dish-prep-time').value) || 10;
  const description = document.getElementById('vendor-dish-desc').value.trim();
  let image = document.getElementById('vendor-dish-image').value.trim();
  const isAvailable = document.getElementById('vendor-dish-available').checked;

  if (!name || price <= 0 || subsidizedPrice <= 0) {
    showToast('Please fill in dish name and prices!');
    return;
  }

  if (!image) {
    image = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
  }

  if (editId) {
    const item = state.menuItems.find(i => i.id === editId);
    if (item) {
      item.name = name;
      item.category = category;
      item.price = price;
      item.subsidizedPrice = subsidizedPrice;
      item.prepTime = prepTime;
      item.description = description;
      item.image = image;
      item.isAvailable = isAvailable;
      showToast(`Updated ${name} successfully!`);
    }
  } else {
    const newItem = {
      id: `item-${Date.now()}`,
      cafeteriaId: 'caf-1',
      name,
      category,
      price,
      subsidizedPrice,
      prepTime,
      description: description || 'Delicious freshly prepared cafeteria specialty.',
      image,
      stock: 30,
      rating: 5.0,
      isAvailable,
      isSpecial: false
    };
    state.menuItems.unshift(newItem);
    showToast(`Added new dish: ${name}!`);
  }

  closeVendorDishModal();
  renderMainContent();
}

function deleteVendorDish(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;
  
  state.menuItems = state.menuItems.filter(i => i.id !== itemId);
  renderMainContent();
  showToast(`Deleted ${item.name} from cafeteria menu.`);
}

function advanceOrderStatus(orderId, nextStatus) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.status = nextStatus;
    renderMainContent();
    showToast(`Order ${orderId} updated to ${nextStatus.replace('_', ' ')}`);
  }
}

// Wallet Topup
function openWalletTopupModal() {
  document.getElementById('wallet-topup-modal').style.display = 'flex';
}
function closeWalletTopupModal() {
  document.getElementById('wallet-topup-modal').style.display = 'none';
}
function selectTopupAmount(amt) {
  document.getElementById('custom-topup-amount').value = amt;
}
function confirmWalletTopup() {
  const amt = parseInt(document.getElementById('custom-topup-amount').value) || 0;
  if (amt <= 0) return;
  state.wallet.personalBalance += amt;
  closeWalletTopupModal();
  renderMainContent();
  showToast(`Successfully added ₦${amt.toLocaleString()} to Personal Wallet!`);
}

// Vendor Audio Alert Toggle
function toggleAudioAlert() {
  state.audioAlert = !state.audioAlert;
  renderMainContent();
  showToast(`Audio alerts ${state.audioAlert ? 'ENABLED 🔔' : 'MUTED 🔕'}`);
}

// Vendor Reject Order
function openVendorRejectModal(orderId) {
  document.getElementById('reject-order-id').value = orderId;
  document.getElementById('vendor-reject-modal').style.display = 'flex';
}
function closeVendorRejectModal() {
  document.getElementById('vendor-reject-modal').style.display = 'none';
}
function confirmVendorOrderRejection() {
  const orderId = document.getElementById('reject-order-id').value;
  const reason = document.getElementById('reject-reason-select').value;
  state.orders = state.orders.filter(o => o.id !== orderId);
  closeVendorRejectModal();
  renderMainContent();
  showToast(`Order ${orderId} rejected. Reason: ${reason}`);
}

// Printable KDS Receipt Modal
function openReceiptModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    document.getElementById('receipt-order-id').innerText = order.id;
    document.getElementById('receipt-date').innerText = order.timestamp;
    document.getElementById('receipt-customer-name').innerText = order.customerName;
    document.getElementById('receipt-staff-id').innerText = order.staffId || 'NNPC/ENG/2021/4892';
    document.getElementById('receipt-location').innerText = `${order.deliveryBuilding} • ${order.deliveryFloor} • ${order.deliveryOffice}`;
    document.getElementById('receipt-code-display').innerText = order.qrCode ? order.qrCode.split('-')[1] : '9821';
    document.getElementById('receipt-total-amount').innerText = `₦${order.total.toLocaleString()}`;

    const itemsContainer = document.getElementById('receipt-items-list');
    itemsContainer.innerHTML = order.items.map(i => `
      <div style="display:flex; justify-content:space-between; padding:4px 0;">
        <span>[x] ${i.name} (x${i.qty || 1})</span>
        <span>₦${((i.subsidizedPrice || i.price) * (i.qty || 1)).toLocaleString()}</span>
      </div>
    `).join('');
  }
  document.getElementById('receipt-modal').style.display = 'flex';
}
function closeReceiptModal() {
  document.getElementById('receipt-modal').style.display = 'none';
}

// Extend Prep Time
function extendPrepTime(orderId, mins) {
  const order = state.orders.find(o => o.id === orderId);
  if (order) {
    order.prepTimeRemaining = (order.prepTimeRemaining || 10) + mins;
    renderMainContent();
    showToast(`Extended preparation time by +${mins} minutes for Order ${orderId}`);
  }
}

// Courier Proof Modal Handlers
function openCourierProofModal(orderId) {
  document.getElementById('courier-deliver-order-id').value = orderId;
  document.getElementById('courier-customer-code').value = '';
  document.getElementById('photo-upload-status').style.display = 'none';
  document.getElementById('courier-proof-modal').style.display = 'flex';
}
function closeCourierProofModal() {
  document.getElementById('courier-proof-modal').style.display = 'none';
}
function simulatePhotoUpload() {
  document.getElementById('photo-upload-status').style.display = 'block';
  showToast('Desk Photo Proof Uploaded!');
}
function confirmCourierDelivery() {
  const orderId = document.getElementById('courier-deliver-order-id').value;
  const order = state.orders.find(o => o.id === orderId || o.id === 'ORD-9821');
  if (order) {
    order.status = 'DELIVERED';
  }
  
  MOCK_DATA.users.COURIER.earningsToday += 1200;
  MOCK_DATA.users.COURIER.completedDeliveriesToday += 1;
  
  closeCourierProofModal();
  renderMainContent();
  showToast('Order delivered successfully! ₦1,200 credited to courier earnings.');
}

// Helper Toast Alert
function showToast(msg) {
  const toast = document.createElement('div');
  toast.innerText = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: var(--slate-900);
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 700;
    z-index: 1000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    border-left: 4px solid var(--nnpc-gold);
    animation: fadeIn 0.2s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
