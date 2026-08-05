/**
 * NNPC Meal Point Super-App Platform & AI Orchestration Engine
 * UI Controller & Dynamic Render Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const store = window.cityStarStore;

  // Cache DOM Elements
  const branchSelector = document.getElementById('branchSelector');
  const userWalletDisplay = document.getElementById('userWalletDisplay');
  const userPointsDisplay = document.getElementById('userPointsDisplay');
  const roleButtons = document.querySelectorAll('.role-btn');
  const portalViews = document.querySelectorAll('.portal-view');

  // Web Audio API Synthesized Chime Sound Generator
  function playAudioChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      console.log('Audio chime simulated');
    }
  }

  const appTabButtons = document.querySelectorAll('.app-tab-btn');
  const userMainContent = document.getElementById('userMainContent');
  const sidePanelContent = document.getElementById('sidePanelContent');
  const activeOrderCount = document.getElementById('activeOrderCount');

  const merchantMainContent = document.getElementById('merchantMainContent');
  const kdsTabKitchen = document.getElementById('kdsTabKitchen');
  const kdsTabLedger = document.getElementById('kdsTabLedger');
  const kdsTabScanner = document.getElementById('kdsTabScanner');

  const courierOrdersGrid = document.getElementById('courierOrdersGrid');
  const verificationOrderSelect = document.getElementById('verificationOrderSelect');
  const verificationCodeInput = document.getElementById('verificationCodeInput');
  const btnVerifyCode = document.getElementById('btnVerifyCode');
  const verificationResultMsg = document.getElementById('verificationResultMsg');

  const adminOrdersTableBody = document.getElementById('adminOrdersTableBody');
  const adminInventoryList = document.getElementById('adminInventoryList');
  const statTotalRevenue = document.getElementById('statTotalRevenue');
  const statActiveDeliveries = document.getElementById('statActiveDeliveries');
  const statRoomOccupancy = document.getElementById('statRoomOccupancy');
  const statSLABreaches = document.getElementById('statSLABreaches');
  const slaAlertBannerContainer = document.getElementById('slaAlertBannerContainer');

  const oosModal = document.getElementById('oosModal');
  const oosItemName = document.getElementById('oosItemName');
  const btnOOSOption1 = document.getElementById('btnOOSOption1');
  const btnOOSOption2 = document.getElementById('btnOOSOption2');
  const btnOOSOption3 = document.getElementById('btnOOSOption3');

  let merchantSubTab = 'kitchen'; // 'kitchen' | 'ledger' | 'scanner'

  // Cart Local State
  let userCart = [];

  // ==================== INITIALIZATION & EVENT LISTENERS ====================

  // Subscribe to store updates
  store.subscribe(renderAll);

  // Branch Selector Switch
  branchSelector.addEventListener('change', (e) => {
    store.setBranch(e.target.value);
  });

  // Role Switcher Navigation
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      portalViews.forEach(v => v.classList.remove('active'));
      const targetPortal = document.getElementById(`portal-${role}`);
      if (targetPortal) targetPortal.classList.add('active');

      store.setRole(role);
    });
  });

  // User Operational Mode Tabs
  appTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      appTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      store.setUserTab(btn.dataset.usertab);
    });
  });

  // Merchant Sub-Tab Handlers
  if (kdsTabKitchen) kdsTabKitchen.addEventListener('click', () => { merchantSubTab = 'kitchen'; renderMerchantPortal(); });
  if (kdsTabLedger) kdsTabLedger.addEventListener('click', () => { merchantSubTab = 'ledger'; renderMerchantPortal(); });
  if (kdsTabScanner) kdsTabScanner.addEventListener('click', () => { merchantSubTab = 'scanner'; renderMerchantPortal(); });

  // Verification Code Form Handler
  if (btnVerifyCode) {
    btnVerifyCode.addEventListener('click', () => {
      const orderId = verificationOrderSelect.value;
      const codeEntered = verificationCodeInput.value.trim();

      if (!orderId) {
        verificationResultMsg.style.color = '#F59E0B';
        verificationResultMsg.textContent = 'Please select an order first.';
        return;
      }

      const ord = store.orders.find(o => o.id === orderId);
      if (ord) {
        if (ord.verificationCode === codeEntered) {
          store.updateOrderStatus(orderId, 'DELIVERED');
          verificationResultMsg.style.color = '#10B981';
          verificationResultMsg.textContent = `✓ Verification Successful! Order ${orderId} marked DELIVERED.`;
          verificationCodeInput.value = '';
        } else {
          verificationResultMsg.style.color = '#EF4444';
          verificationResultMsg.textContent = `✕ Incorrect Security Code (${codeEntered}). Please match 4-digit code.`;
        }
      }
    });
  }

  // Courier Runner Touchscreen Keypad Handlers
  const runnerKeypad = document.getElementById('runnerKeypad');
  if (runnerKeypad) {
    runnerKeypad.querySelectorAll('.keypad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (key === 'CLR') {
          verificationCodeInput.value = '';
        } else if (key === 'DEL') {
          verificationCodeInput.value = verificationCodeInput.value.slice(0, -1);
        } else if (verificationCodeInput.value.length < 4) {
          verificationCodeInput.value += key;
        }
      });
    });
  }

  // 3-Way Out-of-Stock Modal Buttons
  if (btnOOSOption1) btnOOSOption1.addEventListener('click', () => store.resolveOOS(1));
  if (btnOOSOption2) btnOOSOption2.addEventListener('click', () => store.resolveOOS(2));
  if (btnOOSOption3) btnOOSOption3.addEventListener('click', () => store.resolveOOS(3));


  // ==================== MASTER RENDER FUNCTION ====================
  function renderAll() {
    // 1. Render Wallet, Points & Branch state
    branchSelector.value = store.currentBranch;
    if (userWalletDisplay) userWalletDisplay.textContent = `₦${store.userWallet.toLocaleString()}`;
    if (userPointsDisplay) userPointsDisplay.textContent = `${store.userPoints.toLocaleString()} PTS`;

    const activeCount = store.getBranchOrders().filter(o => o.status !== 'DELIVERED' && o.status !== 'CANCELLED').length;
    if (activeOrderCount) activeOrderCount.textContent = activeCount;

    // 2. Synchronize Role Buttons & Portal Views State
    roleButtons.forEach(btn => {
      if (btn.dataset.role === store.activeRole) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    portalViews.forEach(v => {
      if (v.id === `portal-${store.activeRole}`) v.classList.add('active');
      else v.classList.remove('active');
    });

    // 3. Synchronize User Tab Buttons State
    appTabButtons.forEach(b => {
      if (b.dataset.usertab === store.activeUserTab) b.classList.add('active');
      else b.classList.remove('active');
    });

    // 4. Render Active Role Views
    renderUserPortal();
    renderMerchantPortal();
    renderCourierPortal();
    renderAdminPortal();

    // 5. Check for Out of Stock Modal
    if (store.activeOOSOrder) {
      if (oosItemName) oosItemName.textContent = store.activeOOSOrder.itemName;
      if (oosModal) oosModal.style.display = 'flex';
    } else {
      if (oosModal) oosModal.style.display = 'none';
    }
  }

  // ==================== USER PORTAL 4-SCREEN RENDERER ====================
  let carouselSlideIndex = 0;
  let carouselTimer = null;

  function renderUserPortal() {
    const tab = store.activeUserTab;

    if (tab === 'hub') {
      renderHubScreenA();
    } else if (tab === 'eat') {
      renderEatScreenB();
    } else if (tab === 'stay') {
      renderStayScreenC();
    } else if (tab === 'pass') {
      renderPassScreenD();
    }

    renderUserSidePanel();
  }

  // SCREEN A: The City Star Hub (Home Entry Point)
  function renderHubScreenA() {
    const activeBranch = store.branches[store.currentBranch];
    const activeOrders = store.getBranchOrders().filter(o => o.status !== 'DELIVERED' && o.status !== 'CANCELLED');
    const activePasses = store.userPasses.filter(p => p.branch === store.currentBranch);

    let html = `
      <!-- Top Hero Carousel -->
      <div class="hero-carousel-container">
        <div class="carousel-slides" id="carouselSlides" style="transform: translateX(-${carouselSlideIndex * 33.333}%);">
          <div class="carousel-slide">
            <img src="${activeBranch.heroImage}" alt="${activeBranch.name}" class="carousel-img" onerror="this.src='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'">
            <div class="carousel-caption">
              <span class="card-badge badge-green" style="position:static; margin-bottom: 4px; display:inline-block;">NNPC CORPORATE CATERING</span>
              <h2 style="font-family: var(--font-heading); font-size: 24px; color: #FFF; font-weight:800;">Welcome to ${activeBranch.name}</h2>
              <p style="font-size: 12px; color: var(--nnpc-green-light);">${activeBranch.address}</p>
            </div>
          </div>
          <div class="carousel-slide">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" alt="Executive Complex" class="carousel-img">
            <div class="carousel-caption">
              <span class="card-badge badge-gold" style="position:static; margin-bottom: 4px; display:inline-block;">4-TIER TOWER DESK DROP</span>
              <h2 style="font-family: var(--font-heading); font-size: 24px; color: #FFF; font-weight:800;">Precision Office Delivery Engine</h2>
              <p style="font-size: 12px; color: var(--text-muted);">Direct to Tower A-D, Floor 1-11, Block & Desk ID</p>
            </div>
          </div>
          <div class="carousel-slide">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" alt="NNPC Gourmet Staff Menu" class="carousel-img">
            <div class="carousel-caption">
              <span class="card-badge badge-blue" style="position:static; margin-bottom: 4px; display:inline-block;">EXECUTIVE CATERING</span>
              <h2 style="font-family: var(--font-heading); font-size: 24px; color: #FFF; font-weight:800;">Boardroom & Staff Gourmet Buffet</h2>
              <p style="font-size: 12px; color: var(--text-muted);">Subsidized NNPC Staff Allowance & Instant Runner Dispatch</p>
            </div>
          </div>
        </div>

        <div class="carousel-indicators">
          <div class="carousel-dot ${carouselSlideIndex === 0 ? 'active' : ''}" data-slide="0"></div>
          <div class="carousel-dot ${carouselSlideIndex === 1 ? 'active' : ''}" data-slide="1"></div>
          <div class="carousel-dot ${carouselSlideIndex === 2 ? 'active' : ''}" data-slide="2"></div>
        </div>
      </div>

      <!-- The Three NNPC Corporate Pillars -->
      <h3 style="font-family: var(--font-heading); font-size: 18px; color: var(--nnpc-green-light); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 1px;">
        NNPC Staff Catering & Meal Point Logistics
      </h3>

      <div class="pillars-grid">
        <div class="pillar-card pillar-eat" id="btnPillarEat">
          <span class="pillar-icon">🍱</span>
          <div class="pillar-title" style="color: var(--nnpc-green-light);">MEAL POINT</div>
          <div class="pillar-desc">Tower Desk Drop & Staff Dining</div>
        </div>

        <div class="pillar-card pillar-stay" id="btnPillarStay">
          <span class="pillar-icon">💳</span>
          <div class="pillar-title" style="color: #34D399;">ALLOWANCE</div>
          <div class="pillar-desc">Staff Subsidy & Monthly Credits</div>
        </div>

        <div class="pillar-card pillar-play" id="btnPillarPlay">
          <span class="pillar-icon">🎟️</span>
          <div class="pillar-title" style="color: #C084FC;">STAFF PASS</div>
          <div class="pillar-desc">Digital Turnstile & Meal Verification QR</div>
        </div>
      </div>

      <!-- Quick Actions / Active Hub Widget -->
      <div class="quick-hub-widget">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h4 style="font-family: var(--font-heading); font-size: 16px; color: var(--gold-light);">
            ⚡ Quick Actions & Active Status
          </h4>
          <span class="badge-gold">LIVE ORCHESTRATION</span>
        </div>

        ${activeOrders.length > 0 ? `
          <div class="pin-tracker-banner">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <span class="pin-badge-header">⚡ CUSTOMER ORDER TRACKER — #${activeOrders[0].id}</span>
              <span class="card-badge badge-gold" style="position:static;">${activeOrders[0].status}</span>
            </div>
            <div style="font-size: 13px; color: var(--gold-light); font-weight:700; margin-bottom: 8px;">
              📍 ${activeOrders[0].locationHeader || activeOrders[0].address}
            </div>
            <div class="pin-code-box">
              <span style="font-size: 20px;">🔑</span>
              <span class="pin-number">${activeOrders[0].verificationCode}</span>
            </div>
            <div class="pin-microcopy">
              Show or share this PIN with your floor runner upon desk arrival to receive your meal.
            </div>
          </div>
        ` : activePasses.length > 0 ? `
          <div style="background: rgba(0,0,0,0.4); padding: 14px; border-radius: var(--radius-md); border-left: 4px solid #C084FC; margin-bottom: 10px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="color:#C084FC;">Active Pass: ${activePasses[0].title}</strong>
                <div style="font-size: 12px; color: var(--text-muted);">${activePasses[0].passId} • Ready for staff scan</div>
              </div>
              <button class="btn-primary btn-view-pass" style="width:auto; padding: 6px 12px; font-size: 12px;">View Master QR</button>
            </div>
          </div>
        ` : `
          <p style="font-size: 13px; color: var(--text-muted);">No active reservations or orders. Select <strong>STAY</strong>, <strong>EAT</strong>, or <strong>PLAY</strong> above to get started.</p>
        `}
      </div>
    `;

    userMainContent.innerHTML = html;

    // Attach Pillar Buttons Click Listeners
    const btnPillarStay = document.getElementById('btnPillarStay');
    const btnPillarEat = document.getElementById('btnPillarEat');
    const btnPillarPlay = document.getElementById('btnPillarPlay');

    if (btnPillarStay) btnPillarStay.addEventListener('click', () => switchUserTab('stay'));
    if (btnPillarEat) btnPillarEat.addEventListener('click', () => switchUserTab('eat'));
    if (btnPillarPlay) btnPillarPlay.addEventListener('click', () => switchUserTab('pass'));

    document.querySelectorAll('.btn-view-pass').forEach(btn => {
      btn.addEventListener('click', () => switchUserTab('pass'));
    });

    // Attach Carousel Indicator Click Handlers
    document.querySelectorAll('.carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        carouselSlideIndex = parseInt(dot.dataset.slide, 10);
        const slidesContainer = document.getElementById('carouselSlides');
        if (slidesContainer) slidesContainer.style.transform = `translateX(-${carouselSlideIndex * 33.333}%)`;
        document.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });

    // Start auto advance carousel
    if (!carouselTimer) {
      carouselTimer = setInterval(() => {
        carouselSlideIndex = (carouselSlideIndex + 1) % 3;
        const slidesContainer = document.getElementById('carouselSlides');
        if (slidesContainer) slidesContainer.style.transform = `translateX(-${carouselSlideIndex * 33.333}%)`;
        document.querySelectorAll('.carousel-dot').forEach((d, i) => {
          if (i === carouselSlideIndex) d.classList.add('active');
          else d.classList.remove('active');
        });
      }, 5000);
    }
  }

  // SCREEN B: The "Eat" Portal (Food / Room Service)
  function renderEatScreenB() {
    const foods = store.getBranchFood();
    const mode = store.eatFulfillmentMode; // 'delivery' | 'pickup' | 'in-room'

    let html = `
      <h2 style="font-family: var(--font-heading); font-size: 22px; color: var(--gold-light); margin-bottom: 12px;">
        🍔 The "Eat" Portal (Food & Dining)
      </h2>

      <!-- Fulfillment Context Selector -->
      <div class="fulfillment-selector">
        <button class="fulfillment-btn ${mode === 'delivery' ? 'active' : ''}" data-mode="delivery">
          🛵 Delivery (To Address)
        </button>
        <button class="fulfillment-btn ${mode === 'pickup' ? 'active' : ''}" data-mode="pickup">
          🛍️ Pick-Up (At Counter)
        </button>
        <button class="fulfillment-btn ${mode === 'in-room' ? 'active' : ''}" data-mode="in-room">
          🛎️ In-Room / Poolside
        </button>
      </div>

      <div style="margin-bottom: 16px; background: rgba(212, 175, 55, 0.06); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 13px;">
        ${mode === 'delivery' 
          ? '📦 Delivery Mode: Payload routed directly to Kitchen KDS with 90s acceptance window & Jarvis courier auto-dispatch.' 
          : mode === 'pickup' 
          ? '🛍️ Pick-Up Mode: Order prepared for counter collection. 4-digit pickup code issued.' 
          : '🛎️ In-Room / Poolside Mode: Unlocks priority internal house runner dispatch & Room Folio billing.'}
      </div>

      <div class="grid-container">
    `;

    foods.forEach(f => {
      html += `
        <div class="card">
          <span class="card-badge ${f.available ? (mode === 'in-room' ? 'badge-blue' : 'badge-gold') : 'badge-red'}">
            ${f.available ? (mode === 'in-room' ? 'IN-HOUSE PRIORITY' : 'KDS LINKED') : 'OUT OF STOCK'}
          </span>
          <div style="font-size: 38px; margin-bottom: 8px; text-align: center;">${f.image}</div>
          <div class="card-title">${f.name}</div>
          <div style="font-size: 12px; color: var(--text-muted);">${f.category} • ~${f.prepTime} mins prep</div>
          <div class="card-price">₦${f.price.toLocaleString()}</div>
          
          <button class="btn-primary btn-add-cart-b" data-id="${f.id}" ${!f.available ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
            ${!f.available ? 'Unavailable' : '➕ Add to Order'}
          </button>
        </div>
      `;
    });

    html += `</div>`;
    userMainContent.innerHTML = html;

    // Attach Fulfillment Context Buttons
    document.querySelectorAll('.fulfillment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        store.eatFulfillmentMode = btn.dataset.mode;
        renderEatScreenB();
        renderUserSidePanel();
      });
    });

    // Attach Add to Cart
    document.querySelectorAll('.btn-add-cart-b').forEach(btn => {
      btn.addEventListener('click', () => {
        const foodId = btn.dataset.id;
        const item = foods.find(f => f.id === foodId);
        if (item) {
          const existing = userCart.find(c => c.id === foodId);
          if (existing) {
            existing.qty++;
          } else {
            userCart.push({ ...item, qty: 1, mode: mode === 'in-room' ? 'MODE_B' : 'MODE_A' });
          }
          store.notify();
        }
      });
    });
  }

  // SCREEN C: The "Stay" Booking Engine
  function renderStayScreenC() {
    const rooms = store.getBranchRooms();
    const activeBranch = store.branches[store.currentBranch];

    let html = `
      <div style="margin-bottom: 20px; background: rgba(16, 185, 129, 0.08); padding: 16px; border-radius: var(--radius-md); border: 1px solid rgba(16, 185, 129, 0.3);">
        <h2 style="font-family: var(--font-heading); font-size: 22px; color: #34D399;">
          🏨 Screen C: "Stay" Booking Engine
        </h2>
        <p style="font-size: 13px; color: var(--text-muted);">
          Real-time inventory matrix for ${activeBranch.name}. Locks room for 10 minutes during payment checkout.
        </p>
      </div>

      <!-- Date & Branch Selection Input Bar -->
      <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
        <div>
          <label class="form-label">Branch Location</label>
          <div style="font-weight:700; color:var(--gold-light); font-size: 14px;">${activeBranch.name}</div>
        </div>
        <div>
          <label class="form-label">Check-In Date</label>
          <input type="date" class="form-input" value="2026-08-05">
        </div>
        <div>
          <label class="form-label">Check-Out Date</label>
          <input type="date" class="form-input" value="2026-08-07">
        </div>
        <div>
          <label class="form-label">Guests</label>
          <select class="form-input">
            <option>1 Guest</option>
            <option selected>2 Guests</option>
            <option>Family (4+)</option>
          </select>
        </div>
      </div>

      <div class="grid-container">
    `;

    rooms.forEach(rm => {
      const isAvailable = rm.status === 'available';
      const isLocked = rm.status === 'locked';

      html += `
        <div class="card">
          <span class="card-badge ${isAvailable ? 'badge-green' : isLocked ? 'badge-gold' : 'badge-red'}">
            ${isAvailable ? 'AVAILABLE' : isLocked ? '10-MIN LOCK' : 'RESERVED'}
          </span>
          <div style="font-size: 32px; margin-bottom: 6px;">🛌</div>
          <div class="card-title">${rm.type} (${rm.roomNo})</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
            ${rm.features.join(' • ')}
          </div>
          <div class="card-price">₦${rm.price.toLocaleString()} <span style="font-size: 12px; font-weight:400; color:var(--text-muted);">/ night</span></div>
          
          ${isAvailable ? `
            <button class="btn-primary btn-lock-room-c" data-id="${rm.id}">
              🔒 Book Now (10-Min Hold Lock)
            </button>
          ` : isLocked ? `
            <div style="text-align: center;">
              <div style="font-size: 12px; color: var(--gold-light); margin-bottom: 6px; font-weight:700;">Inventory Locked (10m countdown)</div>
              <button class="btn-primary btn-confirm-room-c" data-id="${rm.id}">
                💳 Confirm & Issue Digital Booking Code
              </button>
            </div>
          ` : `
            <button class="btn-secondary" disabled style="opacity:0.5; cursor:not-allowed;">Booked by ${rm.bookedBy || 'Guest'}</button>
          `}
        </div>
      `;
    });

    html += `</div>`;
    userMainContent.innerHTML = html;

    // Attach Handlers
    document.querySelectorAll('.btn-lock-room-c').forEach(btn => {
      btn.addEventListener('click', () => {
        if (store.lockRoomForBooking(btn.dataset.id)) {
          alert('Room inventory locked for 10 minutes! Complete payment to issue digital booking code.');
        }
      });
    });

    document.querySelectorAll('.btn-confirm-room-c').forEach(btn => {
      btn.addEventListener('click', () => {
        const guestName = prompt('Enter Guest Full Name:', 'Alhaji Umar Hassan');
        if (guestName) {
          const booking = store.confirmRoomBooking(btn.dataset.id, guestName);
          if (booking) {
            alert(`🎉 Booking Confirmed! Digital check-in QR issued. Ref: ${booking.bookingCode}`);
          }
        }
      });
    });
  }

  // SCREEN D: "Your NNPC Meal Point Pass" (Facility / Recreation / Account Hub)
  function renderPassScreenD() {
    const passes = store.userPasses.filter(p => p.branch === store.currentBranch);
    const orders = store.getBranchOrders();
    const catalogPasses = store.getBranchPasses();

    let html = `
      <h2 style="font-family: var(--font-heading); font-size: 22px; color: #C084FC; margin-bottom: 14px;">
        🎟️ Screen D: "Your NNPC Meal Point Pass" & Digital Access Hub
      </h2>

      <!-- Master Dynamic QR Pass Card -->
      <div class="card" style="margin-bottom: 24px; text-align: center;">
        <span class="card-badge badge-purple" style="position:static; display:inline-block; margin-bottom: 8px;">MASTER DIGITAL ACCESS PASS</span>
        <h3 style="font-family: var(--font-heading); font-size: 20px; color: var(--gold-light);">
          Encrypted Dynamic Access Token
        </h3>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
          Present this 60-second refreshing QR code at Front Desk, Gym, or Swimming Pool entrance.
        </p>

        <div class="qr-container" style="max-width: 320px; margin: 0 auto;">
          <div class="qr-box">
            <svg viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="#FFFFFF"/>
              <rect x="10" y="10" width="30" height="30" fill="#000"/>
              <rect x="15" y="15" width="20" height="20" fill="#FFF"/>
              <rect x="20" y="20" width="10" height="10" fill="#000"/>
              <rect x="60" y="10" width="30" height="30" fill="#000"/>
              <rect x="65" y="15" width="20" height="20" fill="#FFF"/>
              <rect x="70" y="20" width="10" height="10" fill="#000"/>
              <rect x="10" y="60" width="30" height="30" fill="#000"/>
              <rect x="15" y="65" width="20" height="20" fill="#FFF"/>
              <rect x="20" y="70" width="10" height="10" fill="#000"/>
              <rect x="45" y="10" width="10" height="20" fill="#000"/>
              <rect x="45" y="40" width="20" height="10" fill="#000"/>
              <rect x="70" y="50" width="20" height="20" fill="#000"/>
              <rect x="50" y="70" width="30" height="20" fill="#000"/>
            </svg>
          </div>
          
          ${passes.length > 0 ? `
            <div class="timer-ring">
              ⏳ Dynamic Refresh in: ${store.getDynamicQRData(passes[0].passId).secondsRemaining}s
            </div>
            <div class="progress-bar-container" style="width: 190px;">
              <div class="progress-bar-fill" style="width: ${(store.getDynamicQRData(passes[0].passId).secondsRemaining / 60) * 100}%;"></div>
            </div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 8px; font-family: monospace;">
              ${store.getDynamicQRData(passes[0].passId).payload}
            </div>
          ` : `
            <div style="font-size: 12px; color: var(--color-warning); margin-top: 10px;">No Active Facility Pass. Purchase below.</div>
          `}
        </div>
      </div>

      <!-- Available Facility Passes Catalog -->
      <h3 style="font-family: var(--font-heading); font-size: 16px; color: var(--gold-light); margin-bottom: 12px;">
        🏊 Purchase Facility Pass ("PLAY")
      </h3>
      <div class="grid-container" style="margin-bottom: 28px;">
    `;

    catalogPasses.forEach(p => {
      html += `
        <div class="card">
          <span class="card-badge badge-purple">${p.type} ACCESS</span>
          <div class="card-title">${p.title}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">${p.description}</div>
          <div class="card-price">₦${p.price.toLocaleString()}</div>
          <button class="btn-primary btn-buy-pass-d" data-id="${p.id}">Purchase Access Pass</button>
        </div>
      `;
    });

    html += `
      </div>

      <!-- Unified Activity & Bookings History Ledger -->
      <h3 style="font-family: var(--font-heading); font-size: 16px; color: var(--gold-light); margin-bottom: 12px;">
        📋 Unified Activity & Orders History
      </h3>
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow-x: auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Ref ID</th>
              <th>Type / Mode</th>
              <th>Details</th>
              <th>Total</th>
              <th>Status</th>
              <th>Verification Code</th>
            </tr>
          </thead>
          <tbody>
    `;

    orders.forEach(o => {
      html += `
        <tr>
          <td style="font-weight:700; color:var(--gold-light);">${o.id}</td>
          <td>${o.mode}</td>
          <td>${o.items.map(i=>i.name).join(', ')}</td>
          <td>₦${o.total.toLocaleString()}</td>
          <td><span class="card-badge badge-gold" style="position:static;">${o.status}</span></td>
          <td><div class="code-box" style="font-size: 14px; padding: 2px 6px;">${o.verificationCode}</div></td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    userMainContent.innerHTML = html;

    // Attach Buy Pass Handler
    document.querySelectorAll('.btn-buy-pass-d').forEach(btn => {
      btn.addEventListener('click', () => {
        const pass = store.purchasePass(btn.dataset.id);
        if (pass) {
          alert(`🎉 Pass Purchased! Dynamic QR code generated.`);
          renderPassScreenD();
        }
      });
    });
  }

  // Switch User Tab Helper
  function switchUserTab(tabName) {
    store.setUserTab(tabName);
    appTabButtons.forEach(b => {
      if (b.dataset.usertab === tabName) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  // Render User Side Panel (Cart & Checkout)
  function renderUserSidePanel() {
    if (userCart.length === 0) {
      const activeOrders = store.getBranchOrders().filter(o => o.status !== 'DELIVERED' && o.status !== 'CANCELLED');
      if (activeOrders.length > 0) {
        const ord = activeOrders[0];
        sidePanelContent.innerHTML = `
          <div class="pin-tracker-banner">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <span class="pin-badge-header">⚡ ORDER #${ord.id} TRACKER</span>
              <span class="card-badge badge-gold" style="position:static;">${ord.status}</span>
            </div>
            <div style="font-size: 12px; color: var(--gold-light); font-weight:700; margin-bottom: 10px;">
              📍 ${ord.locationHeader || ord.address}
            </div>
            <div class="pin-code-box">
              <span style="font-size: 20px;">🔑</span>
              <span class="pin-number">${ord.verificationCode}</span>
            </div>
            <div class="pin-microcopy">
              Show or share this PIN with your floor runner upon desk arrival to receive your meal.
            </div>
          </div>

          <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Recipient: <strong style="color:var(--text-main);">${ord.recipientName || ord.customerName}</strong></div>
            <div style="font-size: 12px; color: var(--text-muted);">Assigned Runner: <strong style="color:var(--gold-light);">${ord.driverAssigned || ord.houseStaffAssigned || 'Jarvis Runner'}</strong></div>
          </div>
        `;
        return;
      }

      sidePanelContent.innerHTML = `
        <div style="text-align: center; padding: 30px 10px; color: var(--text-muted);">
          <div style="font-size: 32px; margin-bottom: 8px;">🛒</div>
          <p style="font-size: 14px;">Your Cart is Empty</p>
          <p style="font-size: 12px; margin-top: 4px;">Select <strong>EAT</strong> to add items to your cart.</p>
        </div>
      `;
      return;
    }

    const total = userCart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const fulfillmentMode = store.eatFulfillmentMode; // 'delivery' | 'pickup' | 'in-room'

    let html = `
      <div style="margin-bottom: 12px;">
        <span class="card-badge ${fulfillmentMode === 'in-room' ? 'badge-blue' : 'badge-gold'}" style="position:static;">
          ${fulfillmentMode === 'in-room' ? 'IN-ROOM / POOLSIDE' : fulfillmentMode === 'pickup' ? 'COUNTER PICK-UP' : 'DESK / TOWER DELIVERY'}
        </span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px;">
    `;

    userCart.forEach((ci, idx) => {
      html += `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: var(--radius-sm);">
          <div>
            <div style="font-size: 13px; font-weight:600;">${ci.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">₦${ci.price.toLocaleString()} x ${ci.qty}</div>
          </div>
          <button class="btn-remove-cart" data-idx="${idx}" style="background:none; border:none; color: var(--color-danger); cursor:pointer; font-size: 14px;">✕</button>
        </div>
      `;
    });

    html += `
      </div>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight:800; color: var(--gold-light);">
          <span>Total Payable:</span>
          <span>₦${total.toLocaleString()}</span>
        </div>
      </div>
    `;

    if (fulfillmentMode === 'pickup') {
      html += `
        <div class="form-group">
          <label class="form-label">Pickup Branch Counter</label>
          <div style="font-weight:700; color:var(--gold-light); font-size: 13px;">${store.branches[store.currentBranch].name} Counter</div>
        </div>
        <div class="form-group">
          <label class="form-label">Recipient Name</label>
          <input type="text" id="inputRecipientName" class="form-input" placeholder="e.g., Mr. Musa Ibrahim" value="Mr. Musa Ibrahim">
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input type="text" id="inputPhone" class="form-input" value="+234 803 123 4567">
        </div>
        <div class="form-group">
          <label class="form-label">Payment Method</label>
          <select id="inputPaymentMethod" class="form-input">
            <option value="Wallet">NNPC Meal Point Wallet (₦${store.userWallet.toLocaleString()})</option>
          </select>
        </div>
      `;
    } else {
      html += `
        <div class="form-group">
          <label class="form-label">Tower Dropdown</label>
          <select id="inputTower" class="form-input">
            <option value="Tower A">Tower A</option>
            <option value="Tower B" selected>Tower B</option>
            <option value="Tower C">Tower C</option>
            <option value="Tower D">Tower D</option>
            <option value="Core Block">Core Block</option>
            <option value="Annex">Annex</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Floor Level Dropdown</label>
          <select id="inputFloor" class="form-input">
            <option value="Ground Floor">Ground Floor</option>
            <option value="Floor 1">Floor 1</option>
            <option value="Floor 2">Floor 2</option>
            <option value="Floor 3">Floor 3</option>
            <option value="Floor 4" selected>Floor 4</option>
            <option value="Floor 5">Floor 5</option>
            <option value="Floor 6">Floor 6</option>
            <option value="Floor 7">Floor 7</option>
            <option value="Floor 8">Floor 8</option>
            <option value="Floor 9">Floor 9</option>
            <option value="Floor 10">Floor 10</option>
            <option value="Floor 11">Floor 11</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Block / Wing Selector</label>
          <select id="inputBlockWing" class="form-input">
            <option value="Block A">Block A</option>
            <option value="Block B">Block B</option>
            <option value="Block C" selected>Block C</option>
            <option value="Block D">Block D</option>
            <option value="East Wing">East Wing</option>
            <option value="West Wing">West Wing</option>
            <option value="Central Corridor">Central Corridor</option>
            <option value="Open Hub">Open Hub</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Desk ID / Room Number</label>
          <input type="text" id="inputDeskRoom" class="form-input" placeholder="e.g., Desk A-304 or Office 412" value="Desk A-304">
        </div>
        <div class="form-group">
          <label class="form-label">Recipient Name</label>
          <input type="text" id="inputRecipientName" class="form-input" placeholder="e.g., Mr. Musa Ibrahim" value="Mr. Musa Ibrahim">
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input type="text" id="inputPhone" class="form-input" value="+234 803 123 4567">
        </div>
        <div class="form-group">
          <label class="form-label">Payment Method</label>
          <select id="inputPaymentMethod" class="form-input">
            <option value="Wallet">NNPC Meal Point Wallet (₦${store.userWallet.toLocaleString()})</option>
            <option value="Room Folio">Charge to Guest Room Folio</option>
          </select>
        </div>
      `;
    }

    html += `
      <button id="btnPlaceOrder" class="btn-primary" style="margin-top: 8px;">
        ⚡ Confirm & Dispatch Order
      </button>
    `;

    sidePanelContent.innerHTML = html;

    // Attach Cart Remove Buttons
    document.querySelectorAll('.btn-remove-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        userCart.splice(idx, 1);
        store.notify();
      });
    });

    // Attach Place Order Handler
    const btnPlaceOrder = document.getElementById('btnPlaceOrder');
    if (btnPlaceOrder) {
      btnPlaceOrder.addEventListener('click', () => {
        const tower = document.getElementById('inputTower') ? document.getElementById('inputTower').value : 'Tower B';
        const floor = document.getElementById('inputFloor') ? document.getElementById('inputFloor').value : 'Floor 4';
        const blockWing = document.getElementById('inputBlockWing') ? document.getElementById('inputBlockWing').value : 'Block C';
        const deskRoom = document.getElementById('inputDeskRoom') ? document.getElementById('inputDeskRoom').value : 'Desk A-304';
        const recipientName = document.getElementById('inputRecipientName') ? document.getElementById('inputRecipientName').value : 'Mr. Musa Ibrahim';
        const phone = document.getElementById('inputPhone') ? document.getElementById('inputPhone').value : '+234 803 123 4567';
        const paymentMethod = document.getElementById('inputPaymentMethod').value;
        const mode = fulfillmentMode === 'in-room' ? 'MODE_B' : 'MODE_A';
        const locationHeader = `${tower.toUpperCase()} ➔ ${floor.toUpperCase()} ➔ ${blockWing.toUpperCase()} ➔ ${deskRoom.toUpperCase()}`;

        const newOrder = store.placeFoodOrder(userCart, mode, {
          tower,
          floor,
          blockWing,
          deskRoom,
          recipientName,
          customerName: recipientName,
          locationHeader,
          phone,
          paymentMethod
        });

        if (newOrder) {
          userCart = [];
          alert(`🚀 Order ${newOrder.id} Dispatched!\nLocation: ${newOrder.locationHeader}\nVerification Code: ${newOrder.verificationCode}`);
          switchUserTab('pass');
        }
      });
    }
  }

  // ==================== MERCHANT PORTAL RENDERER ====================
  function renderMerchantPortal() {
    if (!merchantMainContent) return;

    if (merchantSubTab === 'kitchen') {
      renderKitchenKDSView();
    } else if (merchantSubTab === 'ledger') {
      renderFrontDeskLedgerView();
    } else if (merchantSubTab === 'scanner') {
      renderGymPoolScannerView();
    }
  }

  // Merchant Sub-View 1: Kitchen KDS
  function renderKitchenKDSView() {
    const orders = store.getBranchOrders();

    let html = `
      <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-family: var(--font-heading); font-size: 18px; color: var(--gold-light);">
          🍳 Kitchen Display System (KDS) - ${store.branches[store.currentBranch].name}
        </h3>
        <span style="font-size: 13px; color: var(--text-muted);">90s Acceptance Window Timer Active</span>
      </div>

      <div class="kds-grid">
    `;

    if (orders.length === 0) {
      html += `<div style="padding: 20px; color: var(--text-muted);">No active kitchen orders for this branch.</div>`;
    } else {
      orders.forEach(ord => {
        const isInHouse = ord.mode === 'MODE_B';
        const elapsedMins = (Date.now() - ord.acceptedAt) / (1000 * 60);
        const isBreached = elapsedMins > (ord.targetPrepMinutes + 5);

        html += `
          <div class="kds-card ${isInHouse ? 'in-house' : ''} ${isBreached ? 'sla-breach' : ''}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <span class="card-badge ${isInHouse ? 'badge-blue' : 'badge-gold'}" style="position:static;">
                  ${isInHouse ? 'PRIORITY IN-HOUSE' : 'EXTERNAL DELIVERY'}
                </span>
                <h4 style="font-family: var(--font-heading); font-size: 18px; margin-top: 6px;">#${ord.id}</h4>
              </div>

              <div class="timer-badge ${isBreached ? 'breached' : ''}">
                ⏳ ${ord.status === 'ACCEPTED' ? `${ord.acceptanceCountdown}s Accept` : `${Math.floor(elapsedMins)}m / ${ord.targetPrepMinutes}m`}
              </div>
            </div>

            <div style="font-size: 13px; font-weight:700; margin-bottom: 6px;">
              Target: ${ord.customerName} ${ord.roomNo ? `(${ord.roomNo})` : ''}
            </div>

            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 12px; font-size: 13px;">
              ${ord.items.map(i => `
                <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
                  <span>${i.qty}x ${i.name}</span>
                  <button class="btn-flag-oos" data-ord="${ord.id}" data-item="${i.id}" style="background:none; border:1px solid rgba(239,68,68,0.4); color:#FCA5A5; font-size:10px; padding: 2px 6px; border-radius:4px; cursor:pointer;">
                    Flag Out of Stock
                  </button>
                </div>
              `).join('')}
            </div>

            <div style="display: flex; gap: 8px;">
              ${ord.status === 'ACCEPTED' ? `
                <button class="btn-primary btn-kds-cook" data-id="${ord.id}">
                  🔥 Accept & Start Cooking
                </button>
              ` : ord.status === 'COOKING' ? `
                <button class="btn-primary btn-kds-ready" data-id="${ord.id}" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%);">
                  ✓ Mark Ready for Pickup
                </button>
              ` : `
                <button class="btn-secondary" disabled style="opacity:0.7;">Status: ${ord.status}</button>
              `}
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    merchantMainContent.innerHTML = html;

    // Attach KDS Action Handlers
    document.querySelectorAll('.btn-kds-cook').forEach(btn => {
      btn.addEventListener('click', () => store.updateOrderStatus(btn.dataset.id, 'COOKING'));
    });

    document.querySelectorAll('.btn-kds-ready').forEach(btn => {
      btn.addEventListener('click', () => store.updateOrderStatus(btn.dataset.id, 'READY_PICKUP'));
    });

    document.querySelectorAll('.btn-flag-oos').forEach(btn => {
      btn.addEventListener('click', () => store.flagItemOutOfStock(btn.dataset.ord, btn.dataset.item));
    });
  }

  // Merchant Sub-View 2: Front Desk Ledger
  function renderFrontDeskLedgerView() {
    const rooms = store.getBranchRooms();

    let html = `
      <h3 style="font-family: var(--font-heading); font-size: 18px; color: var(--gold-light); margin-bottom: 16px;">
        🏨 Hotel Front Desk Ledger - ${store.branches[store.currentBranch].name}
      </h3>

      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow-x: auto;">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Room No</th>
              <th>Suite Type</th>
              <th>Nightly Rate</th>
              <th>Current Status</th>
              <th>Guest Name</th>
              <th>Lock Timer / Ref</th>
            </tr>
          </thead>
          <tbody>
    `;

    rooms.forEach(rm => {
      html += `
        <tr>
          <td style="font-weight: 700; color: var(--gold-light);">${rm.roomNo}</td>
          <td>${rm.type}</td>
          <td>₦${rm.price.toLocaleString()}</td>
          <td>
            <span class="card-badge ${rm.status === 'available' ? 'badge-green' : rm.status === 'locked' ? 'badge-gold' : 'badge-red'}" style="position:static;">
              ${rm.status.toUpperCase()}
            </span>
          </td>
          <td>${rm.bookedBy || 'Unoccupied'}</td>
          <td style="font-family: monospace; font-size: 12px;">
            ${rm.bookingCode || (rm.lockedUntil ? '10m Hold Lock' : '—')}
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
    merchantMainContent.innerHTML = html;
  }

  // Merchant Sub-View 3: Gym & Pool Scanner Interface
  function renderGymPoolScannerView() {
    let html = `
      <div style="max-width: 650px; margin: 0 auto;">
        <h3 style="font-family: var(--font-heading); font-size: 18px; color: #C084FC; text-align: center; margin-bottom: 16px;">
          🏊 Recreation Facility Access Scanner Counter (Terminal: ${store.branches[store.currentBranch].name})
        </h3>

        <div class="scanner-box">
          <div class="scan-viewfinder">
            <div class="scan-laser"></div>
            <span style="font-size: 54px; opacity:0.8;">📱</span>
          </div>

          <div style="font-size: 13px; color: var(--text-muted);">
            Point optical scanner at customer dynamic 60s refreshing QR code. Evaluation loop executes in &lt;300ms.
          </div>

          <div style="width: 100%;">
            <input type="text" id="scanPayloadInput" class="form-input" placeholder="Paste or Type QR Payload Signature..." style="font-family: monospace; font-size: 12px; margin-bottom: 10px;">
            <button id="btnSimulateScan" class="btn-primary">
              🔍 Scan & Validate QR Access Code (&lt;300ms Evaluation)
            </button>
          </div>
        </div>

        <div id="scanResultContainer"></div>
      </div>
    `;

    merchantMainContent.innerHTML = html;

    const btnSimulateScan = document.getElementById('btnSimulateScan');
    const scanPayloadInput = document.getElementById('scanPayloadInput');
    const scanResultContainer = document.getElementById('scanResultContainer');

    if (store.userPasses.length > 0) {
      const activePass = store.userPasses[0];
      const qrData = store.getDynamicQRData(activePass.passId);
      scanPayloadInput.value = qrData.payload;
    }

    if (btnSimulateScan) {
      btnSimulateScan.addEventListener('click', () => {
        const payload = scanPayloadInput.value.trim();
        const res = store.validateStaffQR(payload);

        let cardClass = res.status === 'SUCCESS' ? 'valid' : res.status === 'EXPIRED' ? 'expired' : 'invalid';
        let icon = res.status === 'SUCCESS' ? '🟢' : res.status === 'EXPIRED' ? '🟡' : '🔴';

        if (res.playAudioChime) playAudioChime();

        let resultHtml = `
          <div class="scan-result-card ${cardClass}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <div style="font-size: 24px; font-weight:800;">${icon} ${res.status}: ${res.reason}</div>
              <span style="font-size:11px; background:rgba(0,0,0,0.4); padding: 4px 8px; border-radius:4px; font-family:monospace;">⚡ ${res.evalTimeMs}ms Response</span>
            </div>
        `;

        if (res.status === 'EXPIRED' && res.canRenew) {
          resultHtml += `
            <div style="margin-top: 12px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: var(--radius-sm);">
              <div style="font-size: 13px; font-weight:700; margin-bottom: 6px;">Staff Action Required:</div>
              <button class="btn-primary btn-staff-renew" data-pass="${res.passId}" style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); width:100%;">
                💳 Offer 1-Tap Pass Renewal (₦3,500)
              </button>
            </div>
          `;
        }

        resultHtml += `</div>`;
        scanResultContainer.innerHTML = resultHtml;

        document.querySelectorAll('.btn-staff-renew').forEach(btn => {
          btn.addEventListener('click', () => {
            if (store.renewPass(btn.dataset.pass)) {
              alert('🎉 Pass Renewed Successfully! Access granted.');
              renderGymPoolScannerView();
            }
          });
        });
      });
    }
  }

  // ==================== COURIER PORTAL RENDERER ====================
  function renderCourierPortal() {
    if (!courierOrdersGrid) return;

    const orders = store.getBranchOrders();

    // Render Orders List
    let html = '';
    let selectOptionsHtml = '<option value="">-- Choose Order --</option>';

    orders.forEach(ord => {
      if (ord.status !== 'DELIVERED' && ord.status !== 'CANCELLED') {
        selectOptionsHtml += `<option value="${ord.id}">Order #${ord.id} - ${ord.recipientName || ord.customerName} (Code: ${ord.verificationCode})</option>`;
      }

      const isHouse = ord.mode === 'MODE_B';
      const locationText = ord.locationHeader || (ord.tower ? `${ord.tower.toUpperCase()} ➔ ${ord.floor.toUpperCase()} ➔ ${ord.blockWing.toUpperCase()} ➔ ${ord.deskRoom.toUpperCase()}` : ord.address);

      html += `
        <div class="kds-card ${isHouse ? 'in-house' : ''}">
          <!-- Location Header Bar at Top of Runner Screen -->
          <div class="courier-location-header">
            📍 ${locationText}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span class="card-badge ${isHouse ? 'badge-blue' : 'badge-gold'}" style="position:static;">
              ${isHouse ? 'FLOOR SERVICE RUNNER' : 'TOWER DISPATCH DRIVER'}
            </span>
            <div class="code-box" style="font-size: 16px; padding: 2px 8px;">${ord.verificationCode}</div>
          </div>

          <div class="card-title" style="font-size: 16px;">Order #${ord.id}</div>
          <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 6px;">
            Recipient: <strong style="color: var(--text-main);">${ord.recipientName || ord.customerName}</strong>
          </div>

          <div style="font-size: 12px; background: rgba(0,0,0,0.3); padding: 8px; border-radius: var(--radius-sm); margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center;">
            <span>Status: <strong style="color: var(--gold-light);">${ord.status}</strong></span>
            <button class="btn-primary btn-select-courier-order" data-id="${ord.id}" style="width:auto; padding: 4px 10px; font-size:11px;">
              ⚡ Select & Verify PIN
            </button>
          </div>
        </div>
      `;
    });

    if (orders.length === 0) {
      html = `<div style="padding: 20px; color: var(--text-muted);">No active delivery tasks.</div>`;
    }

    courierOrdersGrid.innerHTML = html;
    if (verificationOrderSelect) verificationOrderSelect.innerHTML = selectOptionsHtml;

    document.querySelectorAll('.btn-select-courier-order').forEach(btn => {
      btn.addEventListener('click', () => {
        if (verificationOrderSelect) {
          verificationOrderSelect.value = btn.dataset.id;
          if (verificationCodeInput) verificationCodeInput.focus();
        }
      });
    });
  }

  // ==================== SUPER ADMIN PORTAL RENDERER ====================
  function renderAdminPortal() {
    if (!adminOrdersTableBody) return;

    const allOrders = store.orders;
    const breaches = store.getSLABreaches();

    // Update Stats
    const totalRev = allOrders.reduce((sum, o) => sum + (o.status !== 'CANCELLED' ? o.total : 0), 0) + 75000 + 45000;
    if (statTotalRevenue) statTotalRevenue.textContent = `₦${totalRev.toLocaleString()}`;
    if (statActiveDeliveries) statActiveDeliveries.textContent = `${allOrders.filter(o => o.status !== 'DELIVERED').length} Live`;
    if (statRoomOccupancy) statRoomOccupancy.textContent = `75%`;
    if (statSLABreaches) statSLABreaches.textContent = `${breaches.length} Breaches`;

    // Render SLA Alert Banner
    if (breaches.length > 0) {
      slaAlertBannerContainer.innerHTML = `
        <div style="background: rgba(239,68,68,0.15); border: 2px solid var(--color-danger); border-radius: var(--radius-md); padding: 14px 20px; color: #FCA5A5; display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 24px;">🚨</span>
          <div>
            <strong>CRITICAL SLA BREACH ALERT (${breaches.length} Order/s Delayed):</strong>
            <div style="font-size: 12px; margin-top: 2px;">
              ${breaches.map(b => `Order #${b.id} (${b.branch.toUpperCase()}) kitchen prep exceeded target by &gt;5 mins.`).join(' | ')}
            </div>
          </div>
        </div>
      `;
    } else {
      slaAlertBannerContainer.innerHTML = '';
    }

    // Render Admin Audit Table
    let tableHtml = '';
    allOrders.forEach(ord => {
      tableHtml += `
        <tr>
          <td style="font-weight: 700; color: var(--gold-light);">${ord.id}</td>
          <td><span class="card-badge badge-gold" style="position:static;">${ord.branch.toUpperCase()}</span></td>
          <td>${ord.mode}</td>
          <td>${ord.customerName} ${ord.roomNo ? `(${ord.roomNo})` : ''}</td>
          <td>₦${ord.total.toLocaleString()}</td>
          <td>
            <span class="card-badge ${ord.status === 'DELIVERED' ? 'badge-green' : 'badge-gold'}" style="position:static;">
              ${ord.status}
            </span>
          </td>
        </tr>
      `;
    });

    adminOrdersTableBody.innerHTML = tableHtml;

    // Render Admin Out-of-Stock Controls
    const foods = store.getBranchFood();
    let invHtml = '';
    foods.forEach(f => {
      invHtml += `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: var(--radius-sm);">
          <div>
            <div style="font-size: 13px; font-weight:700;">${f.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">₦${f.price.toLocaleString()}</div>
          </div>
          <button class="btn-toggle-avail" data-id="${f.id}" style="background: ${f.available ? 'var(--color-success)' : 'var(--color-danger)'}; color: #000; border:none; padding: 4px 10px; border-radius: 9999px; font-weight: 700; font-size: 11px; cursor: pointer;">
            ${f.available ? 'AVAILABLE' : 'OUT OF STOCK'}
          </button>
        </div>
      `;
    });

    adminInventoryList.innerHTML = invHtml;

    document.querySelectorAll('.btn-toggle-avail').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = foods.find(f => f.id === btn.dataset.id);
        if (item) {
          item.available = !item.available;
          store.notify();
        }
      });
    });
  }

  // Initial Render Call
  renderAll();
});
