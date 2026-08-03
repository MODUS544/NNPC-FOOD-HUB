// Meal Point - NNPC Limited Workplace Food Ordering Platform - Core Application Logic

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
      desk: 'Workstation 712',
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
      desk: 'Workstation 305',
      avatar: '🎓',
      role: 'INTERN',
      wallet: { subsidyBalance: 8500, personalBalance: 2000 }
    },
    CONTRACTOR: {
      staffId: 'NNPC/CON/2025/109',
      name: 'Michael Sterling',
      title: 'Senior IT Infrastructure Consultant',
      department: 'Schlumberger Technical Support',
      building: 'Executive Wing Tower C',
      floor: 'Floor 5',
      desk: 'Consultant Office 502',
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
      desk: 'Kitchen Station 1',
      avatar: '👨‍🍳',
      role: 'CAFETERIA_VENDOR',
      wallet: { subsidyBalance: 20000, personalBalance: 15000 }
    },
    SUPER_ADMIN: {
      staffId: 'NNPC/ADM/2010/001',
      name: 'Arc. Kabir Ibrahim',
      title: 'Chief Information Officer (CIO)',
      department: 'IT & Digital Transformation',
      building: 'Executive Penthouse Tower A',
      floor: 'Floor 12',
      desk: 'CIO Suite 1201',
      avatar: '🛡️',
      role: 'SUPER_ADMIN',
      wallet: { subsidyBalance: 20000, personalBalance: 50000 }
    }
  },

  cafeterias: [
    {
      id: 'caf-1',
      name: 'NNPC Towers Main Cafeteria',
      location: 'Ground Floor, Block A, Abuja HQ',
      operatingHours: '07:30 AM - 05:30 PM',
      rating: 4.9,
      status: 'OPEN',
      approvalStatus: 'APPROVED'
    },
    {
      id: 'caf-2',
      name: 'Executive Lounge & Dining',
      location: '11th Floor, Executive Wing, Abuja',
      operatingHours: '08:00 AM - 04:30 PM',
      rating: 4.9,
      status: 'OPEN',
      approvalStatus: 'APPROVED'
    },
    {
      id: 'caf-3',
      name: 'Refinery Staff Pavilion',
      location: 'Port Harcourt Refining Complex',
      operatingHours: '07:00 AM - 06:00 PM',
      rating: 4.7,
      status: 'OPEN',
      approvalStatus: 'APPROVED'
    }
  ],

  menuItems: [
    {
      id: 'item-1',
      cafeteriaId: 'caf-1',
      name: 'NNPC Special Jollof Rice Combo',
      description: 'Smoky party jollof rice served with fried ripe plantain, moin-moin, and grilled quarter chicken.',
      category: 'LOCAL_NIGERIAN',
      price: 2800,
      subsidizedPrice: 1800,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['SPICY', 'HALAL', 'HIGH_PROTEIN'],
      stock: 42,
      prepTime: 15,
      calories: 650,
      isAvailable: true
    },
    {
      id: 'item-2',
      cafeteriaId: 'caf-1',
      name: 'Pounded Yam & Egusi Soup (Goat Meat)',
      description: 'Smooth white pounded yam served with rich melon Egusi soup, stockfish, and tender goat meat.',
      category: 'LOCAL_NIGERIAN',
      price: 3500,
      subsidizedPrice: 2200,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['HALAL', 'HIGH_PROTEIN'],
      stock: 28,
      prepTime: 20,
      calories: 820,
      isAvailable: true
    },
    {
      id: 'item-3',
      cafeteriaId: 'caf-1',
      name: 'Gourmet Suya Beef Platter',
      description: 'Thinly sliced spiced grilled suya beef with sliced red onions, tomatoes, and yaji chili powder.',
      category: 'LOCAL_NIGERIAN',
      price: 4200,
      subsidizedPrice: 3000,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['SPICY', 'HIGH_PROTEIN', 'GLUTEN_FREE'],
      stock: 18,
      prepTime: 12,
      calories: 540,
      isAvailable: true
    },
    {
      id: 'item-4',
      cafeteriaId: 'caf-1',
      name: 'Fisherman Pepper Soup & Yam Chips',
      description: 'Spiced hot herbal fish pepper soup with fresh catfish chunks and crispy golden yam chips.',
      category: 'LOCAL_NIGERIAN',
      price: 3000,
      subsidizedPrice: 1900,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['SPICY', 'HALAL', 'LOW_CARB'],
      stock: 25,
      prepTime: 18,
      calories: 410,
      isAvailable: true
    },
    {
      id: 'item-5',
      cafeteriaId: 'caf-1',
      name: 'Quinoa & Grilled Salmon Healthy Bowl',
      description: 'Fluffy organic quinoa, Norwegian grilled salmon fillet, avocado slices, and lime vinaigrette.',
      category: 'HEALTHY_SALADS',
      price: 4800,
      subsidizedPrice: 3200,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['VEGETARIAN', 'GLUTEN_FREE', 'LOW_CARB', 'HIGH_PROTEIN'],
      stock: 15,
      prepTime: 15,
      calories: 480,
      isAvailable: true
    },
    {
      id: 'item-6',
      cafeteriaId: 'caf-1',
      name: 'Classic NNPC Meat Pie & Cold Maltina',
      description: 'Flaky golden pastry filled with seasoned minced beef, potatoes, carrots, served with ice-cold Maltina.',
      category: 'PASTRIES_SNACKS',
      price: 1200,
      subsidizedPrice: 700,
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['HALAL'],
      stock: 60,
      prepTime: 5,
      calories: 420,
      isAvailable: true
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
      deliveryDesk: 'Workstation 712',
      items: [
        { name: 'NNPC Special Jollof Rice Combo', qty: 1, price: 1800 },
        { name: 'Classic NNPC Meat Pie & Cold Maltina', qty: 1, price: 700 }
      ],
      total: 2500,
      paymentMethod: 'COMPANY_SUBSIDY_WALLET',
      pickupTime: '12:30 PM',
      estimatedArrival: '12:42 PM (~12 Mins)',
      status: 'PREPARING',
      timestamp: '12:05 PM',
      qrCode: 'MEALPOINT-9821-VALID'
    },
    {
      id: 'ORD-9822',
      customerName: 'Chidiebere Okafor',
      staffId: 'NNPC/INT/2026/014',
      cafeteriaName: 'NNPC Towers Main Cafeteria',
      deliveryBuilding: 'NNPC HQ Tower B',
      deliveryFloor: 'Floor 3',
      deliveryDesk: 'Workstation 305',
      items: [
        { name: 'Pounded Yam & Egusi Soup (Goat Meat)', qty: 1, price: 2200 }
      ],
      total: 2200,
      paymentMethod: 'COMPANY_SUBSIDY_WALLET',
      pickupTime: '01:00 PM',
      estimatedArrival: '01:15 PM (~15 Mins)',
      status: 'RECEIVED',
      timestamp: '12:12 PM',
      qrCode: 'MEALPOINT-9822-VALID'
    }
  ],

  announcements: [
    { id: 'ann-1', message: '🔔 Lunch Break Reminder: Kitchen peak ordering hours are between 12:15 PM and 01:30 PM. Pre-order early for direct office workstation delivery!', type: 'INFO' }
  ]
};

// Global Meal Point State
const state = {
  currentRole: 'EMPLOYEE',
  activeCafeteria: 'caf-1',
  activeCategory: 'ALL',
  searchQuery: '',
  cart: [],
  orders: [...MOCK_DATA.initialOrders],
  favorites: ['item-1'],
  activeTab: 'menu',
  wallet: { ...MOCK_DATA.users.EMPLOYEE.wallet },
  deliveryBuilding: MOCK_DATA.users.EMPLOYEE.building,
  deliveryFloor: MOCK_DATA.users.EMPLOYEE.floor,
  deliveryDesk: MOCK_DATA.users.EMPLOYEE.desk,
  aiChatHistory: [
    { text: 'Welcome to Meal Point 🍲! I am Chef NNPC AI. How can I assist you with today\'s cafeteria menu or office floor delivery?', sender: 'ai' }
  ]
};

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  initRoleSwitcher();
  initSearch();
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
  state.deliveryDesk = userObj.desk;

  // Header UI Update
  document.getElementById('header-user-name').innerText = userObj.name;
  document.getElementById('header-user-title').innerText = `${userObj.title} • ${userObj.department}`;
  document.getElementById('header-user-avatar').innerText = userObj.avatar;
  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;
  document.getElementById('delivery-pill-text').innerText = `${state.deliveryBuilding} • ${state.deliveryFloor} (${state.deliveryDesk})`;

  if (role === 'CAFETERIA_VENDOR') {
    switchTab('vendor');
  } else if (role === 'SUPER_ADMIN') {
    switchTab('admin');
  } else {
    switchTab('menu');
  }

  showToast(`Switched perspective to: ${userObj.name} (${role.replace('_', ' ')})`);
}

function initSearch() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderMenu();
  });
}

function switchTab(tab) {
  state.activeTab = tab;
  renderSidebarNav();
  renderMainContent();
}

function renderApp() {
  renderSidebarNav();
  renderMainContent();
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
      <div class="nav-section-label">Vendor Dashboard</div>
      <div class="nav-item ${state.activeTab === 'vendor' ? 'active' : ''}" onclick="switchTab('vendor')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Incoming Orders (KDS)
      </div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        Menu & Stock Control
      </div>
    `;
  } else {
    // Super Admin
    html = `
      <div class="nav-section-label">Super Admin Suite</div>
      <div class="nav-item ${state.activeTab === 'admin' ? 'active' : ''}" onclick="switchTab('admin')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        System Control & Analytics
      </div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Browse All Menus
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderMainContent() {
  const container = document.getElementById('main-container');

  if (state.activeTab === 'menu') {
    container.innerHTML = renderMenuView();
  } else if (state.activeTab === 'orders') {
    container.innerHTML = renderOrdersView();
  } else if (state.activeTab === 'favorites') {
    container.innerHTML = renderFavoritesView();
  } else if (state.activeTab === 'wallet') {
    container.innerHTML = renderWalletView();
  } else if (state.activeTab === 'vendor') {
    container.innerHTML = renderVendorDashboard();
  } else if (state.activeTab === 'admin') {
    container.innerHTML = renderAdminDashboard();
    setTimeout(renderAdminChart, 100);
  }
}

// Menu View
function renderMenuView() {
  let filtered = MOCK_DATA.menuItems.filter(item => {
    const matchesCategory = state.activeCategory === 'ALL' || item.category === state.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) || item.description.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  let mealsHTML = filtered.map(item => {
    const isFav = state.favorites.includes(item.id);

    return `
      <div class="glovo-meal-card">
        <div class="food-img-container">
          <img src="${item.image}" alt="${item.name}" class="food-img" onclick="openMealDetailsModal('${item.id}')" style="cursor:pointer;" />
          <button class="heart-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}')">
            ${isFav ? '❤️' : '🤍'}
          </button>
          <div class="dietary-badges">
            <span class="badge badge-subsidized">⚡ NNPC Subsidized</span>
            ${item.dietaryTags.map(tag => `<span class="badge">${tag}</span>`).join('')}
          </div>
        </div>

        <div class="food-card-body">
          <h3 class="food-title" onclick="openMealDetailsModal('${item.id}')" style="cursor:pointer;">${item.name}</h3>
          <p class="food-desc">${item.description}</p>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:11px; color:var(--slate-500);">
            <span>⏱️ Prep: ${item.prepTime} mins</span>
            <span>🔥 ${item.calories} kcal</span>
          </div>

          <div class="food-card-footer">
            <div class="price-tag">
              <span class="original-price">₦${item.price.toLocaleString()}</span>
              <span class="final-price">₦${item.subsidizedPrice.toLocaleString()}</span>
            </div>

            <button class="add-btn" onclick="addToCart('${item.id}')">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">
        Meal Point – Internal Cafeteria Menu
      </h2>
      <p style="font-size:13px; color:var(--slate-600);">
        Order fresh meals directly to your NNPC workstation: <strong style="color:var(--nnpc-green);">${state.deliveryBuilding} • ${state.deliveryFloor} (${state.deliveryDesk})</strong>
      </p>
    </div>

    <!-- Category Filters -->
    <div class="category-filter-row">
      <div class="filter-pills">
        <button class="pill-btn ${state.activeCategory === 'ALL' ? 'active' : ''}" onclick="filterCategory('ALL')">🍽️ All Items</button>
        <button class="pill-btn ${state.activeCategory === 'LOCAL_NIGERIAN' ? 'active' : ''}" onclick="filterCategory('LOCAL_NIGERIAN')">🇳🇬 Nigerian Delicacies</button>
        <button class="pill-btn ${state.activeCategory === 'HEALTHY_SALADS' ? 'active' : ''}" onclick="filterCategory('HEALTHY_SALADS')">🥗 Healthy & Salads</button>
        <button class="pill-btn ${state.activeCategory === 'PASTRIES_SNACKS' ? 'active' : ''}" onclick="filterCategory('PASTRIES_SNACKS')">🥐 Pastries & Snacks</button>
      </div>

      ${state.currentRole === 'CAFETERIA_VENDOR' ? `
        <button class="add-btn" onclick="openAddMenuModal()" style="background:var(--nnpc-gold); color:var(--slate-900);">
          ➕ Add Meal to Menu
        </button>
      ` : ''}
    </div>

    <!-- Meals Grid -->
    <div class="menu-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:24px;">
      ${mealsHTML}
    </div>
  `;
}

function filterCategory(cat) {
  state.activeCategory = cat;
  renderMainContent();
}

function toggleFavorite(itemId) {
  const index = state.favorites.indexOf(itemId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('Removed meal from favorites.');
  } else {
    state.favorites.push(itemId);
    showToast('Added meal to favorites! ❤️');
  }
  renderMainContent();
}

// Cart System & Office Delivery
function addToCart(itemId) {
  const item = MOCK_DATA.menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existing = state.cart.find(c => c.item.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ item, qty: 1 });
  }

  updateCartBadge();
  showToast(`Added "${item.name}" to your cart!`);
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cart-badge-count');
  badge.innerText = totalCount;
  badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  drawer.classList.toggle('open');
  renderCartDrawerContent();
}

function renderCartDrawerContent() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:48px 16px;">
        <span style="font-size:48px;">🛍️</span>
        <h4 style="font-size:16px; font-weight:700; margin-top:12px;">Your Cart is Empty</h4>
        <p style="font-size:12px; color:var(--slate-500); margin-top:4px;">Browse the menu and add meals to your cart!</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';

  let subtotal = 0;
  let html = state.cart.map((c, index) => {
    const itemTotal = c.item.subsidizedPrice * c.qty;
    subtotal += itemTotal;

    return `
      <div style="display:flex; gap:12px; padding:12px 0; border-bottom:1px solid #f1f5f9; align-items:center;">
        <img src="${c.item.image}" style="width:56px; height:56px; border-radius:8px; object-fit:cover;" />
        <div style="flex:1;">
          <h5 style="font-size:13px; font-weight:700; color:var(--slate-900);">${c.item.name}</h5>
          <p style="font-size:12px; font-weight:700; color:var(--nnpc-green);">₦${c.item.subsidizedPrice.toLocaleString()} x ${c.qty}</p>
        </div>
        <div style="display:flex; align-items:center; gap:6px; background:#f1f5f9; padding:4px 8px; border-radius:8px;">
          <button onclick="changeQty(${index}, -1)" style="border:none; background:none; cursor:pointer; font-weight:800;">-</button>
          <span style="font-size:12px; font-weight:700;">${c.qty}</span>
          <button onclick="changeQty(${index}, 1)" style="border:none; background:none; cursor:pointer; font-weight:800;">+</button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  document.getElementById('cart-subtotal').innerText = `₦${subtotal.toLocaleString()}`;
  document.getElementById('checkout-delivery-location').innerText = `${state.deliveryBuilding} • ${state.deliveryFloor} (${state.deliveryDesk})`;
}

function changeQty(index, change) {
  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartBadge();
  renderCartDrawerContent();
}

function checkoutOrder() {
  if (state.cart.length === 0) return;

  const totalAmount = state.cart.reduce((sum, c) => sum + (c.item.subsidizedPrice * c.qty), 0);

  if (state.wallet.subsidyBalance < totalAmount && state.currentRole !== 'CONTRACTOR') {
    alert('Insufficient NNPC Subsidy Wallet balance! Top-up your personal wallet to proceed.');
    return;
  }

  // Deduct balance
  if (state.currentRole !== 'CONTRACTOR') {
    state.wallet.subsidyBalance -= totalAmount;
  } else {
    state.wallet.personalBalance -= totalAmount;
  }

  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;

  const newOrder = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: MOCK_DATA.users[state.currentRole].name,
    staffId: MOCK_DATA.users[state.currentRole].staffId,
    cafeteriaName: 'NNPC Towers Main Cafeteria',
    deliveryBuilding: state.deliveryBuilding,
    deliveryFloor: state.deliveryFloor,
    deliveryDesk: state.deliveryDesk,
    items: state.cart.map(c => ({ name: c.item.name, qty: c.qty, price: c.item.subsidizedPrice })),
    total: totalAmount,
    paymentMethod: 'COMPANY_SUBSIDY_WALLET',
    pickupTime: '12:30 PM',
    estimatedArrival: '12:45 PM (~15 Mins)',
    status: 'RECEIVED',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    qrCode: `MEALPOINT-${Math.floor(100000 + Math.random() * 900000)}`
  };

  state.orders.unshift(newOrder);
  state.cart = [];
  updateCartBadge();
  toggleCartDrawer();

  switchTab('orders');
  showToast(`Order #${newOrder.id} placed! Office delivery assigned to ${state.deliveryFloor}.`);
}

// Orders View & Tracking Stepper
function renderOrdersView() {
  let ordersHTML = state.orders.map(ord => `
    <div class="glass-card" style="margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.06); padding-bottom:12px; margin-bottom:16px;">
        <div>
          <span style="font-weight:800; font-size:16px; color:var(--nnpc-green);">${ord.id}</span>
          <span style="font-size:12px; color:var(--slate-500); margin-left:10px;">Placed at ${ord.timestamp} • Est. Arrival: ${ord.estimatedArrival}</span>
        </div>
        <span class="badge badge-subsidized" style="font-size:12px; padding:6px 12px;">
          ${ord.status}
        </span>
      </div>

      <!-- Live Delivery Stepper -->
      <div class="order-stepper">
        <div class="stepper-step completed">
          <div class="stepper-icon">✓</div>
          <span style="font-size:11px; font-weight:700; margin-top:4px;">Received</span>
        </div>
        <div class="stepper-step ${ord.status === 'PREPARING' || ord.status === 'READY' || ord.status === 'DELIVERED' ? 'completed' : ''}">
          <div class="stepper-icon">👨‍🍳</div>
          <span style="font-size:11px; font-weight:700; margin-top:4px;">Preparing</span>
        </div>
        <div class="stepper-step ${ord.status === 'READY' || ord.status === 'DELIVERED' ? 'completed' : ''}">
          <div class="stepper-icon">🛵</div>
          <span style="font-size:11px; font-weight:700; margin-top:4px;">On the Way</span>
        </div>
        <div class="stepper-step ${ord.status === 'DELIVERED' ? 'completed' : ''}">
          <div class="stepper-icon">✅</div>
          <span style="font-size:11px; font-weight:700; margin-top:4px;">Delivered</span>
        </div>
      </div>

      <div style="font-size:13px; color:var(--slate-700); margin-bottom:12px;">
        📍 <strong>Office Destination:</strong> ${ord.deliveryBuilding} • ${ord.deliveryFloor} (${ord.deliveryDesk})
      </div>

      <div style="border-top:1px dashed #e2e8f0; padding-top:12px;">
        ${ord.items.map(i => `
          <div style="display:flex; justify-content:space-between; font-size:13px;">
            <span>• ${i.name} x ${i.qty}</span>
            <span style="font-weight:700;">₦${(i.price * i.qty).toLocaleString()}</span>
          </div>
        `).join('')}
        <div style="margin-top:8px; font-size:14px; font-weight:800; color:var(--nnpc-green); text-align:right;">
          Total Paid: ₦${ord.total.toLocaleString()}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">My Active Orders & Workplace Delivery Tracker</h2>
      <p style="font-size:13px; color:var(--slate-600);">Real-time tracking for office workstation deliveries across NNPC towers.</p>
    </div>
    <div>${ordersHTML}</div>
  `;
}

// Favorite Meals View
function renderFavoritesView() {
  const favItems = MOCK_DATA.menuItems.filter(i => state.favorites.includes(i.id));

  if (favItems.length === 0) {
    return `
      <div style="text-align:center; padding:60px 20px;" class="glass-card">
        <span style="font-size:48px;">🤍</span>
        <h3 style="font-size:18px; font-weight:800; margin-top:12px;">No Favorite Meals Yet</h3>
        <p style="font-size:13px; color:var(--slate-500); margin-top:4px;">Click the heart icon on any meal card to save your favorites for 1-click reordering!</p>
      </div>
    `;
  }

  let html = favItems.map(item => `
    <div class="glass-card" style="display:flex; gap:16px; align-items:center; margin-bottom:16px;">
      <img src="${item.image}" style="width:80px; height:80px; border-radius:12px; object-fit:cover;" />
      <div style="flex:1;">
        <h4 style="font-size:16px; font-weight:800; color:var(--slate-900);">${item.name}</h4>
        <p style="font-size:12px; color:var(--slate-500); margin-top:2px;">${item.description}</p>
        <span style="font-size:16px; font-weight:800; color:var(--nnpc-green); margin-top:6px; display:inline-block;">₦${item.subsidizedPrice.toLocaleString()}</span>
      </div>
      <button class="add-btn" onclick="addToCart('${item.id}')">🛒 Reorder Now</button>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">My Saved Favorite Meals</h2>
      <p style="font-size:13px; color:var(--slate-600);">Quickly reorder your most enjoyed NNPC cafeteria dishes.</p>
    </div>
    <div>${html}</div>
  `;
}

// Vendor Dashboard
function renderVendorDashboard() {
  let tickets = state.orders.map(ord => `
    <div class="glass-card" style="margin-bottom:20px; border-left:6px solid var(--nnpc-green);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span style="font-size:16px; font-weight:800;">${ord.id}</span>
        <span class="badge badge-subsidized">${ord.status}</span>
      </div>
      <div style="font-size:13px; font-weight:700; color:var(--slate-800); margin-bottom:4px;">
        👤 ${ord.customerName} (${ord.staffId})
      </div>
      <div style="font-size:12px; color:var(--slate-600); margin-bottom:12px;">
        📍 Deliver To: <strong>${ord.deliveryBuilding} • ${ord.deliveryFloor} (${ord.deliveryDesk})</strong>
      </div>
      <div style="margin-bottom:16px; font-size:13px;">
        ${ord.items.map(i => `<div>• ${i.qty}x ${i.name}</div>`).join('')}
      </div>
      <div style="display:flex; gap:10px;">
        ${ord.status === 'RECEIVED' ? `
          <button class="add-btn" onclick="updateOrderStatus('${ord.id}', 'PREPARING')">👨‍🍳 Accept & Prepare</button>
        ` : ''}
        ${ord.status === 'PREPARING' ? `
          <button class="add-btn" style="background:#10b981;" onclick="updateOrderStatus('${ord.id}', 'READY')">🛵 Dispatch to Floor</button>
        ` : ''}
        ${ord.status === 'READY' ? `
          <button class="add-btn" style="background:#3b82f6;" onclick="updateOrderStatus('${ord.id}', 'DELIVERED')">✅ Confirm Delivered</button>
        ` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Internal Vendor KDS & Order Fulfillment</h2>
      <p style="font-size:13px; color:var(--slate-600);">Real-time kitchen order incoming board and workplace dispatch status updates.</p>
    </div>
    <div>${tickets}</div>
  `;
}

function updateOrderStatus(orderId, newStatus) {
  const ord = state.orders.find(o => o.id === orderId);
  if (ord) {
    ord.status = newStatus;
    renderMainContent();
    showToast(`Updated Order ${orderId} status to ${newStatus}!`);
  }
}

// Super Admin Suite
function renderAdminDashboard() {
  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Meal Point Super Admin Suite</h2>
      <p style="font-size:13px; color:var(--slate-600);">System-wide control, vendor account approvals, user management, and executive analytics.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; margin-bottom:24px;">
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:700;">Active NNPC Users</span>
        <h3 style="font-size:26px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">8,940 Staff</h3>
      </div>
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:700;">Approved Vendors</span>
        <h3 style="font-size:26px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">12 Cafeterias</h3>
      </div>
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:700;">Monthly Sales Revenue</span>
        <h3 style="font-size:26px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">₦42.8M</h3>
      </div>
    </div>

    <div class="glass-card" style="margin-bottom:24px;">
      <h4 style="font-size:16px; font-weight:800; margin-bottom:16px;">Daily Sales & Workplace Delivery Distribution</h4>
      <div style="height:220px;">
        <canvas id="adminChart" style="width:100%; height:100%;"></canvas>
      </div>
    </div>
  `;
}

function renderAdminChart() {
  const canvas = document.getElementById('adminChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = 220;

  ctx.fillStyle = '#006633';
  ctx.font = '700 13px Plus Jakarta Sans';
  ctx.fillText('📊 Interactive Sales Chart Loaded Successfully', 40, 110);
}

// Wallet View
function renderWalletView() {
  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Meal Point Allowance & Wallet</h2>
      <p style="font-size:13px; color:var(--slate-600);">NNPC Subsidized Food Account Ledger.</p>
    </div>

    <div class="glass-card" style="background:linear-gradient(135deg, var(--nnpc-green-dark) 0%, var(--nnpc-green) 100%); color:#fff; padding:24px; border-radius:18px; margin-bottom:24px;">
      <span style="font-size:12px; text-transform:uppercase; letter-spacing:0.8px; opacity:0.9;">Monthly NNPC Subsidy Credit Balance</span>
      <h1 style="font-size:36px; font-weight:800; color:var(--nnpc-gold); margin:10px 0;">₦${state.wallet.subsidyBalance.toLocaleString()}</h1>
      <p style="font-size:12px; opacity:0.8;">Auto-renews on the 1st of every month.</p>
    </div>
  `;
}

// Location Picker Modal
function openLocationModal() {
  const building = prompt('Select NNPC Office Building / Tower:', state.deliveryBuilding);
  const floor = prompt('Select Office Floor:', state.deliveryFloor);
  const desk = prompt('Enter Room or Workstation Number:', state.deliveryDesk);

  if (building && floor && desk) {
    state.deliveryBuilding = building;
    state.deliveryFloor = floor;
    state.deliveryDesk = desk;
    document.getElementById('delivery-pill-text').innerText = `${building} • ${floor} (${desk})`;
    renderMainContent();
    showToast('Updated delivery location!');
  }
}

// AI Assistant Modal
function toggleAIModal() {
  const modal = document.getElementById('ai-chat-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function sendAIMessage(presetText) {
  const input = document.getElementById('ai-input');
  const text = presetText || input.value.trim();
  if (!text) return;

  state.aiChatHistory.push({ text, sender: 'user' });
  if (!presetText) input.value = '';
  renderAIChat();

  setTimeout(() => {
    let resp = "I am Chef NNPC AI 🤖! Ask me about low-carb dishes, Nigerian food options, or your meal subsidy balance.";
    const lower = text.toLowerCase();
    if (lower.includes('healthy') || lower.includes('low-carb')) {
      resp = "🥗 Recommended for today: **Quinoa & Grilled Salmon Healthy Bowl** (₦3,200) or **Fisherman Pepper Soup** (₦1,900).";
    } else if (lower.includes('balance') || lower.includes('wallet')) {
      resp = `💳 Your remaining NNPC Subsidy Wallet Balance is **₦${state.wallet.subsidyBalance.toLocaleString()}**.`;
    }

    state.aiChatHistory.push({ text: resp, sender: 'ai' });
    renderAIChat();
  }, 600);
}

function renderAIChat() {
  const container = document.getElementById('ai-chat-messages');
  container.innerHTML = state.aiChatHistory.map(msg => `
    <div class="chat-bubble ${msg.sender}">
      ${msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

// Toast System
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 28px;
    left: 28px;
    background: var(--nnpc-green-dark);
    color: #fff;
    border: 1px solid var(--nnpc-gold);
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    z-index: 9999;
  `;
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
