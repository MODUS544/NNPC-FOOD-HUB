// NNPC Limited Food Hub & Cafeteria Platform - Core Application Logic

// Initial Mock Seed Data
const MOCK_DATA = {
  users: {
    EMPLOYEE: {
      staffId: 'NNPC/ENG/2021/4892',
      name: 'Engr. Babatunde Lawal',
      title: 'Senior Petroleum Engineer',
      department: 'Upstream Operations',
      avatar: '👨‍💼',
      role: 'EMPLOYEE',
      wallet: { subsidyBalance: 14500, personalBalance: 6200, monthlyLimit: 20000 }
    },
    INTERN: {
      staffId: 'NNPC/INT/2026/014',
      name: 'Chidiebere Okafor',
      title: 'Graduate Petroleum Intern',
      department: 'Reservoir Engineering',
      avatar: '🎓',
      role: 'INTERN',
      wallet: { subsidyBalance: 8500, personalBalance: 2000, monthlyLimit: 10000 }
    },
    CAFETERIA_ADMIN: {
      staffId: 'NNPC/CAF/2018/003',
      name: 'Chef Aliyu Mohammed',
      title: 'Head Cafeteria Supervisor',
      department: 'Workplace & Logistics Services',
      avatar: '👨‍🍳',
      role: 'CAFETERIA_ADMIN',
      wallet: { subsidyBalance: 20000, personalBalance: 15000, monthlyLimit: 20000 }
    },
    DEPT_HEAD: {
      staffId: 'NNPC/DIR/2015/088',
      name: 'Dr. Folashade Adeleke',
      title: 'General Manager, HR & Workplace Services',
      department: 'Corporate HR Division',
      avatar: '👩‍💼',
      role: 'DEPT_HEAD',
      wallet: { subsidyBalance: 20000, personalBalance: 25000, monthlyLimit: 20000 }
    },
    SUPER_ADMIN: {
      staffId: 'NNPC/ADM/2010/001',
      name: 'Arc. Kabir Ibrahim',
      title: 'Chief Information Officer (CIO)',
      department: 'IT & Digital Transformation',
      avatar: '🛡️',
      role: 'SUPER_ADMIN',
      wallet: { subsidyBalance: 20000, personalBalance: 50000, monthlyLimit: 20000 }
    }
  },

  cafeterias: [
    {
      id: 'caf-1',
      name: 'NNPC Towers Main Cafeteria',
      location: 'Ground Floor, Block A, NNPC HQ Abuja',
      operatingHours: '07:30 AM - 05:30 PM',
      rating: 4.8,
      status: 'OPEN'
    },
    {
      id: 'caf-2',
      name: 'Executive Lounge & Dining',
      location: '11th Floor, Executive Wing, Abuja',
      operatingHours: '08:00 AM - 04:30 PM',
      rating: 4.9,
      status: 'OPEN'
    },
    {
      id: 'caf-3',
      name: 'Refinery Staff Pavilion',
      location: 'Port Harcourt Refining Complex',
      operatingHours: '07:00 AM - 06:00 PM',
      rating: 4.7,
      status: 'OPEN'
    },
    {
      id: 'caf-4',
      name: 'Green Energy Hub Bistro',
      location: 'Lagos Zone Operations, Ikoyi',
      operatingHours: '08:00 AM - 05:00 PM',
      rating: 4.6,
      status: 'OPEN'
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
      calories: 650
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
      calories: 820
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
      calories: 540
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
      calories: 410
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
      calories: 480
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
      calories: 420
    },
    {
      id: 'item-7',
      cafeteriaId: 'caf-2',
      name: 'Executive Grilled Ribeye Steak',
      description: '250g Prime ribeye steak with truffle butter, roasted baby potatoes, and grilled asparagus.',
      category: 'CONTINENTAL',
      price: 6500,
      subsidizedPrice: 4500,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['HIGH_PROTEIN'],
      stock: 10,
      prepTime: 25,
      calories: 780
    },
    {
      id: 'item-8',
      cafeteriaId: 'caf-1',
      name: 'Avocado Toast & Egg Whites Breakfast',
      description: 'Toasted sourdough bread topped with crushed avocado, poached egg whites, and cherry tomatoes.',
      category: 'BREAKFAST',
      price: 2200,
      subsidizedPrice: 1400,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
      dietaryTags: ['VEGETARIAN', 'HEALTHY', 'LOW_CARB'],
      stock: 30,
      prepTime: 10,
      calories: 360
    }
  ],

  initialOrders: [
    {
      id: 'ORD-9821',
      customerName: 'Engr. Babatunde Lawal',
      staffId: 'NNPC/ENG/2021/4892',
      cafeteriaName: 'NNPC Towers Main Cafeteria',
      items: [
        { name: 'NNPC Special Jollof Rice Combo', qty: 1, price: 1800 },
        { name: 'Classic NNPC Meat Pie & Cold Maltina', qty: 1, price: 700 }
      ],
      total: 2500,
      paymentMethod: 'COMPANY_SUBSIDY_WALLET',
      pickupTime: '12:30 PM',
      status: 'PREPARING',
      timestamp: '12:05 PM',
      qrCode: 'NNPC-ORD-9821-VALID'
    },
    {
      id: 'ORD-9822',
      customerName: 'Chidiebere Okafor',
      staffId: 'NNPC/INT/2026/014',
      cafeteriaName: 'NNPC Towers Main Cafeteria',
      items: [
        { name: 'Pounded Yam & Egusi Soup (Goat Meat)', qty: 1, price: 2200 }
      ],
      total: 2200,
      paymentMethod: 'COMPANY_SUBSIDY_WALLET',
      pickupTime: '01:00 PM',
      status: 'RECEIVED',
      timestamp: '12:12 PM',
      qrCode: 'NNPC-ORD-9822-VALID'
    },
    {
      id: 'ORD-9819',
      customerName: 'Dr. Folashade Adeleke',
      staffId: 'NNPC/DIR/2015/088',
      cafeteriaName: 'Executive Lounge & Dining',
      items: [
        { name: 'Executive Grilled Ribeye Steak', qty: 1, price: 4500 }
      ],
      total: 4500,
      paymentMethod: 'COMPANY_SUBSIDY_WALLET',
      pickupTime: '12:15 PM',
      status: 'READY_FOR_PICKUP',
      timestamp: '11:45 AM',
      qrCode: 'NNPC-ORD-9819-VALID'
    }
  ]
};

// Global App State
const state = {
  currentRole: 'EMPLOYEE',
  activeCafeteria: 'caf-1',
  activeCategory: 'ALL',
  searchQuery: '',
  cart: [],
  orders: [...MOCK_DATA.initialOrders],
  activeTab: 'menu',
  wallet: { ...MOCK_DATA.users.EMPLOYEE.wallet },
  aiChatHistory: [
    { text: 'Hello! I am Chef NNPC AI 🤖. How can I assist you with today\'s cafeteria menu or meal allowance?', sender: 'ai' }
  ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initRoleSwitcher();
  initNavigation();
  renderApp();
  renderChart();
});

// Role Switching System
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
  state.wallet = { ...MOCK_DATA.users[role].wallet };
  
  // Update User Header Info
  const userObj = MOCK_DATA.users[role];
  document.getElementById('header-user-name').innerText = userObj.name;
  document.getElementById('header-user-title').innerText = `${userObj.title} • ${userObj.department}`;
  document.getElementById('header-user-avatar').innerText = userObj.avatar;

  // Update Wallet Badge in Header
  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;

  // Update Sidebar Links according to Role
  renderSidebarForRole(role);

  // If role is Cafeteria Admin, default to KDS view!
  if (role === 'CAFETERIA_ADMIN') {
    switchTab('kds');
  } else if (role === 'SUPER_ADMIN' || role === 'DEPT_HEAD') {
    switchTab('analytics');
  } else {
    switchTab('menu');
  }

  showToast(`Switched perspective to: ${userObj.name} (${role.replace('_', ' ')})`);
}

function renderSidebarForRole(role) {
  const sidebarNav = document.getElementById('sidebar-nav');
  let navHTML = '';

  if (role === 'EMPLOYEE' || role === 'INTERN') {
    navHTML = `
      <div class="nav-section-label">Workplace Services</div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Cafeteria Menu
      </div>
      <div class="nav-item ${state.activeTab === 'orders' ? 'active' : ''}" onclick="switchTab('orders')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        My Orders & Tracker
      </div>
      <div class="nav-item ${state.activeTab === 'wallet' ? 'active' : ''}" onclick="switchTab('wallet')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        Meal Subsidy Wallet
      </div>
    `;
  } else if (role === 'CAFETERIA_ADMIN') {
    navHTML = `
      <div class="nav-section-label">Kitchen & Vendor Operations</div>
      <div class="nav-item ${state.activeTab === 'kds' ? 'active' : ''}" onclick="switchTab('kds')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Live Kitchen Display (KDS)
      </div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        Menu & Inventory Control
      </div>
      <div class="nav-item ${state.activeTab === 'analytics' ? 'active' : ''}" onclick="switchTab('analytics')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        Daily Sales & Reconciliations
      </div>
    `;
  } else {
    // Dept Head / Super Admin
    navHTML = `
      <div class="nav-section-label">Executive & Management</div>
      <div class="nav-item ${state.activeTab === 'analytics' ? 'active' : ''}" onclick="switchTab('analytics')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        Workplace Services Analytics
      </div>
      <div class="nav-item ${state.activeTab === 'menu' ? 'active' : ''}" onclick="switchTab('menu')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Cafeteria Outlets & Menus
      </div>
      <div class="nav-item ${state.activeTab === 'orders' ? 'active' : ''}" onclick="switchTab('orders')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        All Global Orders
      </div>
    `;
  }

  sidebarNav.innerHTML = navHTML;
}

// Navigation & Tab Switching
function initNavigation() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderMenu();
  });
}

function switchTab(tab) {
  state.activeTab = tab;
  renderSidebarForRole(state.currentRole);
  renderMainContent();
}

function renderApp() {
  renderSidebarForRole(state.currentRole);
  renderMainContent();
}

function renderMainContent() {
  const container = document.getElementById('main-container');

  if (state.activeTab === 'menu') {
    container.innerHTML = renderMenuView();
    attachMenuEvents();
  } else if (state.activeTab === 'orders') {
    container.innerHTML = renderOrdersView();
  } else if (state.activeTab === 'kds') {
    container.innerHTML = renderKDSView();
  } else if (state.activeTab === 'wallet') {
    container.innerHTML = renderWalletView();
  } else if (state.activeTab === 'analytics') {
    container.innerHTML = renderAnalyticsView();
    setTimeout(renderChart, 100);
  }
}

// View: Menu Page
function renderMenuView() {
  const cafeteria = MOCK_DATA.cafeterias.find(c => c.id === state.activeCafeteria);

  let outletsHTML = MOCK_DATA.cafeterias.map(c => `
    <div class="outlet-card ${c.id === state.activeCafeteria ? 'active' : ''}" onclick="selectCafeteria('${c.id}')">
      <div class="outlet-icon">🏢</div>
      <div>
        <h4 style="font-size:14px; font-weight:700; color:var(--slate-900);">${c.name}</h4>
        <p style="font-size:11px; color:var(--slate-500);">${c.location}</p>
        <span style="font-size:10px; font-weight:700; color:var(--nnpc-green);">🟢 ${c.status} • ${c.operatingHours}</span>
      </div>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">
        NNPC Food Hub & Workplace Cafeteria
      </h2>
      <p style="font-size:13px; color:var(--slate-600);">
        Select an NNPC internal cafeteria outlet to browse real-time menus, apply corporate meal subsidies, and pre-order your meals.
      </p>
    </div>

    <!-- Cafeterias Selector Bar -->
    <div class="cafeteria-outlets-bar">
      ${outletsHTML}
    </div>

    <!-- Category Filters -->
    <div class="category-filter-row">
      <div class="filter-pills">
        <button class="pill-btn ${state.activeCategory === 'ALL' ? 'active' : ''}" onclick="filterCategory('ALL')">
          🍽️ All Items
        </button>
        <button class="pill-btn ${state.activeCategory === 'LOCAL_NIGERIAN' ? 'active' : ''}" onclick="filterCategory('LOCAL_NIGERIAN')">
          🇳🇬 Nigerian Delicacies
        </button>
        <button class="pill-btn ${state.activeCategory === 'HEALTHY_SALADS' ? 'active' : ''}" onclick="filterCategory('HEALTHY_SALADS')">
          🥗 Healthy & Salads
        </button>
        <button class="pill-btn ${state.activeCategory === 'CONTINENTAL' ? 'active' : ''}" onclick="filterCategory('CONTINENTAL')">
          🥩 Continental
        </button>
        <button class="pill-btn ${state.activeCategory === 'BREAKFAST' ? 'active' : ''}" onclick="filterCategory('BREAKFAST')">
          ☕ Breakfast
        </button>
        <button class="pill-btn ${state.activeCategory === 'PASTRIES_SNACKS' ? 'active' : ''}" onclick="filterCategory('PASTRIES_SNACKS')">
          🥐 Pastries & Snacks
        </button>
      </div>

      ${state.currentRole === 'CAFETERIA_ADMIN' ? `
        <button class="add-btn" onclick="openAddMenuModal()" style="background:var(--nnpc-gold); color:var(--slate-900);">
          ➕ Add New Menu Item
        </button>
      ` : ''}
    </div>

    <!-- Menu Items Grid -->
    <div class="menu-grid" id="menu-items-grid">
      ${renderMenuItemsHTML()}
    </div>
  `;
}

function renderMenuItemsHTML() {
  const filtered = MOCK_DATA.menuItems.filter(item => {
    const matchesCafeteria = item.cafeteriaId === state.activeCafeteria;
    const matchesCategory = state.activeCategory === 'ALL' || item.category === state.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery) || item.description.toLowerCase().includes(state.searchQuery);
    return matchesCafeteria && matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    return `
      <div style="grid-column:1/-1; text-align:center; padding:48px; background:var(--glass-bg); border-radius:16px;">
        <p style="font-size:16px; font-weight:700; color:var(--slate-500);">No menu items found matching your filter criteria.</p>
      </div>
    `;
  }

  return filtered.map(item => `
    <div class="food-card">
      <div class="food-img-container">
        <img src="${item.image}" alt="${item.name}" class="food-img" />
        <div class="dietary-badges">
          <span class="badge badge-subsidized">⚡ NNPC Subsidized</span>
          ${item.dietaryTags.map(tag => `<span class="badge">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="food-card-body">
        <h3 class="food-title">${item.name}</h3>
        <p class="food-desc">${item.description}</p>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:11px; color:var(--slate-500);">
          <span>⏱️ Prep: ${item.prepTime} mins</span>
          <span>🔥 ${item.calories} kcal</span>
          <span>📦 Stock: ${item.stock} left</span>
        </div>

        <div class="food-card-footer">
          <div class="price-tag">
            <span class="original-price">₦${item.price.toLocaleString()}</span>
            <span class="final-price">₦${item.subsidizedPrice.toLocaleString()}</span>
          </div>

          <button class="add-btn" onclick="addToCart('${item.id}')">
            🛒 Add Order
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function attachMenuEvents() {}

function selectCafeteria(id) {
  state.activeCafeteria = id;
  renderMainContent();
}

function filterCategory(cat) {
  state.activeCategory = cat;
  renderMainContent();
}

// Cart System Logic
function addToCart(itemId) {
  const item = MOCK_DATA.menuItems.find(i => i.id === itemId);
  if (!item) return;

  const existing = state.cart.find(c => c.item.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ item, qty: 1, instructions: '' });
  }

  updateCartBadge();
  showToast(`Added "${item.name}" to cart!`);
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
        <p style="font-size:12px; color:var(--slate-500); margin-top:4px;">Browse the menu and add delicious NNPC meals!</p>
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
  document.getElementById('cart-wallet-balance-note').innerText = `NNPC Subsidy Wallet Balance: ₦${state.wallet.subsidyBalance.toLocaleString()}`;
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

  if (state.wallet.subsidyBalance < totalAmount) {
    alert('Insufficient NNPC Subsidy Wallet balance! Please top-up your personal wallet or choose payroll deduction.');
    return;
  }

  // Deduct Wallet Balance
  state.wallet.subsidyBalance -= totalAmount;
  document.getElementById('header-wallet-balance').innerText = `₦${state.wallet.subsidyBalance.toLocaleString()}`;

  const pickupTimeSlot = document.getElementById('pickup-time-slot').value;
  const newOrder = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: MOCK_DATA.users[state.currentRole].name,
    staffId: MOCK_DATA.users[state.currentRole].staffId,
    cafeteriaName: 'NNPC Towers Main Cafeteria',
    items: state.cart.map(c => ({ name: c.item.name, qty: c.qty, price: c.item.subsidizedPrice })),
    total: totalAmount,
    paymentMethod: 'COMPANY_SUBSIDY_WALLET',
    pickupTime: pickupTimeSlot,
    status: 'RECEIVED',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    qrCode: `NNPC-ORD-${Math.floor(100000 + Math.random() * 900000)}`
  };

  state.orders.unshift(newOrder);
  state.cart = [];
  updateCartBadge();
  toggleCartDrawer();

  switchTab('orders');
  showToast(`Order #${newOrder.id} placed successfully! Pre-ordered for ${pickupTimeSlot}.`);
}

// View: Orders & Tracker
function renderOrdersView() {
  let ordersHTML = state.orders.map(ord => `
    <div class="glass-card" style="margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0,0,0,0.06); padding-bottom:12px; margin-bottom:16px;">
        <div>
          <span style="font-weight:800; font-size:16px; color:var(--nnpc-green);">${ord.id}</span>
          <span style="font-size:12px; color:var(--slate-500); margin-left:10px;">Placed at ${ord.timestamp} • Pickup: ${ord.pickupTime}</span>
        </div>
        <span class="badge ${getStatusBadgeClass(ord.status)}" style="font-size:12px; padding:6px 12px;">
          ${ord.status.replace(/_/g, ' ')}
        </span>
      </div>

      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px;">
        <div>
          <h5 style="font-size:13px; font-weight:700; color:var(--slate-700); margin-bottom:8px;">Meal Ticket Details:</h5>
          ${ord.items.map(i => `
            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px;">
              <span>• ${i.name} x ${i.qty}</span>
              <span style="font-weight:700;">₦${(i.price * i.qty).toLocaleString()}</span>
            </div>
          `).join('')}
          <div style="margin-top:12px; padding-top:8px; border-top:1px dashed #cbd5e1; font-size:14px; font-weight:800; color:var(--slate-900);">
            Total Paid (NNPC Subsidy): ₦${ord.total.toLocaleString()}
          </div>
        </div>

        <!-- Dynamic QR Badge Container -->
        <div style="text-align:center;">
          <h5 style="font-size:12px; font-weight:700; color:var(--slate-600); margin-bottom:6px;">Pickup QR Collection Pass</h5>
          <div class="qr-container">
            <div style="width:90px; height:90px; background:#0f172a; color:#fff; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; border-radius:8px; padding:6px; word-break:break-all;">
              [QR] ${ord.qrCode}
            </div>
          </div>
          <p style="font-size:10px; color:var(--slate-500); margin-top:4px;">Scan at cafeteria collection counter</p>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">My Active Food Orders & Live Status Tracker</h2>
      <p style="font-size:13px; color:var(--slate-600);">Track kitchen preparation in real-time and display your digital collection QR pass at pickup.</p>
    </div>
    <div>${ordersHTML}</div>
  `;
}

function getStatusBadgeClass(status) {
  if (status === 'RECEIVED') return 'badge-subsidized';
  if (status === 'PREPARING') return 'btn-prepare';
  if (status === 'READY_FOR_PICKUP') return 'btn-ready';
  return 'btn-delivered';
}

// View: Kitchen Display System (KDS) for Cafeteria Admins
function renderKDSView() {
  const ticketsHTML = state.orders.map(ord => `
    <div class="kds-ticket ${ord.status.toLowerCase().replace('_', '-')}">
      <div class="kds-header">
        <span class="order-no">${ord.id}</span>
        <span class="order-time">⏰ Pickup: ${ord.pickupTime}</span>
      </div>

      <div style="font-size:12px; font-weight:700; color:var(--slate-700); margin-bottom:8px;">
        👤 ${ord.customerName} (${ord.staffId})
      </div>

      <div class="kds-items-list">
        ${ord.items.map(i => `
          <div class="kds-item">
            <span>${i.qty}x ${i.name}</span>
          </div>
        `).join('')}
      </div>

      <div class="kds-actions">
        ${ord.status === 'RECEIVED' ? `
          <button class="kds-btn btn-prepare" onclick="updateOrderStatus('${ord.id}', 'PREPARING')">👨‍🍳 Mark Preparing</button>
        ` : ''}
        ${ord.status === 'PREPARING' ? `
          <button class="kds-btn btn-ready" onclick="updateOrderStatus('${ord.id}', 'READY_FOR_PICKUP')">🔔 Mark Ready</button>
        ` : ''}
        ${ord.status === 'READY_FOR_PICKUP' ? `
          <button class="kds-btn btn-delivered" onclick="updateOrderStatus('${ord.id}', 'DELIVERED')">✅ Mark Collected</button>
        ` : ''}
        ${ord.status === 'DELIVERED' ? `
          <span style="font-size:12px; font-weight:800; color:var(--nnpc-green);">Completed & Collected</span>
        ` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Kitchen Display System (KDS) Live View</h2>
      <p style="font-size:13px; color:var(--slate-600);">Live incoming order queue for NNPC Cafeteria kitchen staff & order fulfillment.</p>
    </div>

    <div class="kds-grid">
      ${ticketsHTML}
    </div>
  `;
}

function updateOrderStatus(orderId, newStatus) {
  const ord = state.orders.find(o => o.id === orderId);
  if (ord) {
    ord.status = newStatus;
    renderMainContent();
    showToast(`Order ${orderId} updated to ${newStatus.replace(/_/g, ' ')}!`);
  }
}

// View: Meal Subsidy Wallet
function renderWalletView() {
  return `
    <div style="margin-bottom:24px;">
      <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Employee Meal Allowance & Subsidy Wallet</h2>
      <p style="font-size:13px; color:var(--slate-600);">NNPC Corporate Subsidized Food Account and Transaction Ledger.</p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:28px;">
      <div class="wallet-card-widget">
        <h4 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; opacity:0.9;">Monthly NNPC Subsidy Balance</h4>
        <h1 style="font-size:36px; font-weight:800; margin:12px 0; color:var(--nnpc-gold);">₦${state.wallet.subsidyBalance.toLocaleString()}</h1>
        <p style="font-size:12px; opacity:0.8;">Monthly Allocation: ₦${state.wallet.monthlyLimit.toLocaleString()} • Auto-renews 1st of month</p>
      </div>

      <div class="glass-card">
        <h4 style="font-size:14px; font-weight:700; color:var(--slate-900); margin-bottom:8px;">Personal Top-Up Wallet</h4>
        <h2 style="font-size:28px; font-weight:800; color:var(--nnpc-green);">₦${state.wallet.personalBalance.toLocaleString()}</h2>
        <p style="font-size:12px; color:var(--slate-500); margin-bottom:16px;">Used after subsidy limit exhaustion or non-subsidized guest meals.</p>
        <button class="add-btn" onclick="openTopUpModal()">⚡ Quick Top-Up Wallet</button>
      </div>
    </div>

    <div class="glass-card">
      <h3 style="font-size:16px; font-weight:700; color:var(--slate-900); margin-bottom:16px;">Recent Wallet Transactions</h3>
      <table style="width:100%; border-collapse:collapse; font-size:13px;">
        <thead>
          <tr style="border-bottom:2px solid var(--nnpc-green-light); text-align:left; color:var(--slate-600);">
            <th style="padding:10px;">Ref No</th>
            <th style="padding:10px;">Description</th>
            <th style="padding:10px;">Type</th>
            <th style="padding:10px; text-align:right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:10px; font-weight:700;">TXN-88219</td>
            <td style="padding:10px;">Monthly NNPC Food Subsidy Credit</td>
            <td style="padding:10px;"><span class="badge badge-subsidized">CREDIT</span></td>
            <td style="padding:10px; text-align:right; font-weight:800; color:var(--nnpc-green);">+₦15,000</td>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:10px; font-weight:700;">TXN-88102</td>
            <td style="padding:10px;">Meal Purchase (ORD-9821)</td>
            <td style="padding:10px;"><span class="badge" style="background:#ef4444; color:#fff;">DEBIT</span></td>
            <td style="padding:10px; text-align:right; font-weight:800; color:#ef4444;">-₦2,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function openTopUpModal() {
  const amount = prompt('Enter top-up amount in NGN (e.g. 5000):', '5000');
  if (amount && !isNaN(amount)) {
    state.wallet.personalBalance += parseFloat(amount);
    renderMainContent();
    showToast(`Added ₦${parseFloat(amount).toLocaleString()} to personal wallet!`);
  }
}

// View: Analytics & Reconciliations
function renderAnalyticsView() {
  return `
    <div style="margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h2 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-bottom:4px;">Workplace Services Cafeteria Analytics</h2>
        <p style="font-size:13px; color:var(--slate-600);">Executive reporting on daily sales, subsidy utilization, and food order heatmaps.</p>
      </div>

      <button class="add-btn" onclick="exportReportCSV()" style="background:var(--nnpc-gold); color:var(--slate-900);">
        📊 Export PDF / CSV Report
      </button>
    </div>

    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:16px; margin-bottom:24px;">
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:600;">Daily Orders Placed</span>
        <h3 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">1,482</h3>
        <span style="font-size:11px; color:#10b981; font-weight:700;">↑ 12% vs last week</span>
      </div>
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:600;">Total Meal Subsidies</span>
        <h3 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">₦3.82M</h3>
        <span style="font-size:11px; color:var(--nnpc-gold-dark); font-weight:700;">84% Budget Utilized</span>
      </div>
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:600;">Avg Prep Time</span>
        <h3 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">11.4 Mins</h3>
        <span style="font-size:11px; color:#10b981; font-weight:700;">⚡ 2.1 mins faster</span>
      </div>
      <div class="glass-card">
        <span style="font-size:12px; color:var(--slate-500); font-weight:600;">Employee Satisfaction</span>
        <h3 style="font-size:24px; font-weight:800; color:var(--nnpc-green); margin-top:4px;">4.9 / 5.0</h3>
        <span style="font-size:11px; color:#10b981; font-weight:700;">★ 98% Positive</span>
      </div>
    </div>

    <!-- Canvas Chart Container -->
    <div class="glass-card">
      <h4 style="font-size:15px; font-weight:700; color:var(--slate-900); margin-bottom:16px;">Daily Sales & Subsidy Distribution (NNPC Outlets)</h4>
      <div style="height:260px; position:relative;">
        <canvas id="analyticsChart" style="width:100%; height:100%;"></canvas>
      </div>
    </div>
  `;
}

function renderChart() {
  const canvas = document.getElementById('analyticsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = 260;

  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  // Draw Grid Lines
  ctx.strokeStyle = 'rgba(0, 102, 51, 0.1)';
  ctx.lineWidth = 1;
  for (let y = 40; y < height - 30; y += 40) {
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();
  }

  // Draw Bars for Sales Data
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const sales = [450, 680, 890, 720, 950, 310, 200];
  const barWidth = 36;
  const gap = (width - 80) / days.length;

  days.forEach((day, index) => {
    const x = 50 + index * gap;
    const barHeight = (sales[index] / 1000) * (height - 80);
    const y = height - 40 - barHeight;

    // Bar Gradient
    const grad = ctx.createLinearGradient(0, y, 0, height - 40);
    grad.addColorStop(0, '#006633');
    grad.addColorStop(1, '#ffc000');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, [6, 6, 0, 0]);
    ctx.fill();

    // Text Label
    ctx.fillStyle = '#475569';
    ctx.font = '600 12px Plus Jakarta Sans';
    ctx.fillText(day, x + 6, height - 15);
  });
}

function exportReportCSV() {
  const csvContent = "data:text/csv;charset=utf-8,Date,Outlet,OrderCount,SubsidyTotal\n2026-08-01,NNPC Towers Main,450,1125000\n2026-08-02,Executive Lounge,180,630000";
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "nnpc_cafeteria_analytics_report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Exported cafeteria analytics report to CSV!');
}

// AI Assistant Floating Modal
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

  // AI Response Simulation
  setTimeout(() => {
    let response = "I can help with NNPC Cafeteria menus, dietary recommendations, and subsidy wallet balance!";
    const lower = text.toLowerCase();

    if (lower.includes('healthy') || lower.includes('salad') || lower.includes('low-carb')) {
      response = "🥗 Recommended for today: **Quinoa & Grilled Salmon Healthy Bowl** (₦3,200 subsidized) or **Fisherman Pepper Soup** (₦1,900 subsidized). High protein and low-carb!";
    } else if (lower.includes('nigerian') || lower.includes('jollof') || lower.includes('local')) {
      response = "🇳🇬 Today's Top Nigerian Delicacy: **NNPC Special Jollof Rice Combo** with fried plantain & chicken (₦1,800 subsidized) or **Pounded Yam & Egusi Soup** with tender goat meat!";
    } else if (lower.includes('balance') || lower.includes('wallet') || lower.includes('subsidy')) {
      response = `💳 Your remaining NNPC Monthly Meal Allowance is **₦${state.wallet.subsidyBalance.toLocaleString()}**. Your balance will reset on the 1st of next month.`;
    }

    state.aiChatHistory.push({ text: response, sender: 'ai' });
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

// Toast Notifications
function showToast(message) {
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
    animation: fadeIn 0.3s ease;
  `;
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
