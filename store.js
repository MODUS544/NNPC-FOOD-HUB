/**
 * City Star Super-App Platform & AI Orchestration Engine
 * Central Reactive Store & Live Dispatch System
 */

class CityStarStore {
  constructor() {
    this.currentBranch = 'maiduguri'; // 'maiduguri' | 'gombe'
    this.activeRole = 'user'; // 'user' | 'merchant' | 'courier' | 'admin'
    this.activeUserTab = 'hub'; // Screen A: 'hub' | Screen B: 'eat' | Screen C: 'stay' | Screen D: 'pass'
    this.eatFulfillmentMode = 'delivery'; // 'delivery' | 'pickup' | 'in-room'
    
    this.userWallet = 48500; // ₦ Wallet balance
    this.userPoints = 500; // CS Loyalty Points
    this.activeRoomFolio = 'Room 304 (Deluxe Suite)';
    
    // Brand Metadata
    this.brand = {
      name: "City Star Restaurant & Accommodation",
      logoUrl: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100030783744713"
    };

    // Out-of-Stock 3-Way Modal State
    this.activeOOSOrder = null;

    // Branches Metadata with Official Hero Images
    this.branches = {
      maiduguri: { 
        id: 'maiduguri',
        name: 'City Star Maiduguri', 
        heroImage: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=704494793919972',
        address: 'Sir Kashim Ibrahim Way, Maiduguri' 
      },
      gombe: { 
        id: 'gombe',
        name: 'City Star Gombe', 
        heroImage: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=704494793919972',
        address: 'Commercial Area, Gombe' 
      }
    };

    // Initial Orders with Formal Lifecycle States
    this.orders = [
      {
        id: 'ORD-849201',
        mode: 'MODE_A', // Service Type 1: External / Internal Logistics Delivery
        serviceType: 1,
        branch: 'maiduguri',
        recipientName: 'Mr. Musa Ibrahim',
        customerName: 'Mr. Musa Ibrahim',
        phone: '+234 803 123 4567',
        tower: 'Tower B',
        floor: 'Floor 4',
        blockWing: 'Block C',
        deskRoom: 'Room 5',
        locationHeader: 'TOWER B ➔ FLOOR 4 ➔ BLOCK C ➔ ROOM 5',
        items: [{ id: 'f1', name: 'Suya Spiced Grilled Chicken', qty: 2, price: 6500 }],
        total: 13000,
        address: 'Tower B ➔ Floor 4 ➔ Block C ➔ Room 5',
        state: 'KITCHEN_CONFIRMED',
        status: 'COOKING',
        paymentMethod: 'Wallet',
        verificationCode: '8492',
        driverAssigned: 'Jarvis Courier (Musa Danjuma - 1.2km away)',
        acceptedAt: Date.now() - 3 * 60 * 1000,
        targetPrepMinutes: 12,
        acceptanceCountdown: 45,
        slaEscalated: false
      },
      {
        id: 'ORD-519284',
        mode: 'MODE_B', // Service Type 2: In-House Dining
        serviceType: 2,
        branch: 'maiduguri',
        recipientName: 'Dr. Zainab Bello',
        customerName: 'Dr. Zainab Bello',
        tower: 'Tower A',
        floor: 'Floor 3',
        blockWing: 'East Wing',
        deskRoom: 'Suite 304',
        locationHeader: 'TOWER A ➔ FLOOR 3 ➔ EAST WING ➔ SUITE 304',
        roomNo: 'Suite 304',
        items: [{ id: 'f3', name: 'Royal Fried Rice & Jumbo Prawns', qty: 1, price: 8900 }],
        total: 8900,
        state: 'KITCHEN_EXPRESS_PREP',
        status: 'ACCEPTED',
        paymentMethod: 'Room Folio',
        houseStaffAssigned: 'Internal Room Runner (Ibrahim)',
        acceptedAt: Date.now() - 1 * 60 * 1000,
        targetPrepMinutes: 18,
        acceptanceCountdown: 78,
        slaEscalated: false
      }
    ];

    // Active User Passes (Service Type 4)
    this.userPasses = [
      {
        passId: 'PASS-8801',
        title: 'Gym Single Access Pass',
        type: 'Gym',
        branch: 'maiduguri',
        guestName: 'Alhaji Umar Hassan',
        purchasedAt: Date.now(),
        expiresAt: Date.now() + 24 * 60 * 60 * 1000,
        usageCount: 0,
        maxUsage: 1,
        state: 'PASS_ISSUED'
      }
    ];

    // Inventory & Catalog (Branch Isolated)
    this.inventory = {
      maiduguri: {
        food: [
          { id: 'f1', name: 'Suya Spiced Grilled Chicken', category: 'Grill & BBQ', price: 6500, prepTime: 12, available: true, image: '🍗' },
          { id: 'f2', name: 'Kanem Masa & Mutton Stew', category: 'Local Delicacies', price: 4200, prepTime: 15, available: true, image: '🍲' },
          { id: 'f3', name: 'Royal Fried Rice & Jumbo Prawns', category: 'Executive Dining', price: 8900, prepTime: 18, available: true, image: '🍤' },
          { id: 'f4', name: 'Signature City Star Mocktail', category: 'Beverages', price: 2500, prepTime: 5, available: true, image: '🍹' }
        ],
        rooms: [
          { id: 'r101', type: 'Executive Gold Suite', roomNo: '101', price: 75000, lockedUntil: null, status: 'available', features: ['King Bed', 'Pool View', 'Free Spa'] },
          { id: 'r204', type: 'Presidential Chalet', roomNo: '204', price: 150000, lockedUntil: null, status: 'available', features: ['Private Pool', 'Butler Service', 'Jacuzzi'] },
          { id: 'r304', type: 'Deluxe Suite', roomNo: '304', price: 45000, lockedUntil: null, status: 'occupied', features: ['Balcony View', 'Fast WiFi', 'Mini Bar'] }
        ],
        passes: [
          { id: 'p1', title: 'Gym Single Access Pass', type: 'Gym', price: 3500, duration: '1 Day', description: 'Full access to high-performance fitness center' },
          { id: 'p2', title: 'Poolside Day Resort Pass', type: 'Pool', price: 5000, duration: '1 Day', description: 'All-day access to olympic swimming pool & lounger' },
          { id: 'p3', title: 'VIP Monthly All-Access', type: 'VIP', price: 45000, duration: '30 Days', description: 'Unlimited Gym, Sauna & Pool access for 30 days' }
        ]
      },
      gombe: {
        food: [
          { id: 'fg1', name: 'Gombe Roast Pepper Lamb', category: 'Grill & BBQ', price: 7800, prepTime: 15, available: true, image: '🍖' },
          { id: 'fg2', name: 'Fisherman Seafood Pasta', category: 'Executive Dining', price: 9200, prepTime: 20, available: true, image: '🍝' },
          { id: 'fg3', name: 'Fresh Tropical Juice Pitcher', category: 'Beverages', price: 3000, prepTime: 5, available: true, image: '🥤' }
        ],
        rooms: [
          { id: 'rg501', type: 'Resort Horizon Villa', roomNo: '501', price: 120000, lockedUntil: null, status: 'available', features: ['Ocean View', 'Private Gym'] },
          { id: 'rg502', type: 'Executive Suite Gombe', roomNo: '502', price: 65000, lockedUntil: null, status: 'available', features: ['King Bed', 'City View'] }
        ],
        passes: [
          { id: 'pg1', title: 'Resort Pool Day Pass', type: 'Pool', price: 6000, duration: '1 Day', description: 'Infinity pool access with complimentary drink' },
          { id: 'pg2', title: 'Fitness Gym Day Pass', type: 'Gym', price: 4000, duration: '1 Day', description: 'Access to cardio & heavy weight rooms' }
        ]
      }
    };

    // Listeners for UI reactive rendering
    this.listeners = [];

    // Start background Orchestration Timers (1s loop for counts, QR refreshing, SLA checks)
    this.initOrchestrationTimer();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn());
  }

  setBranch(branch) {
    this.currentBranch = branch;
    this.notify();
  }

  setRole(role) {
    this.activeRole = role;
    this.notify();
  }

  setUserTab(tab) {
    this.activeUserTab = tab;
    this.notify();
  }

  // --- Dynamic 60-Second Refreshing QR Code Engine ---
  getDynamicQRData(passId) {
    const timestamp = Math.floor(Date.now() / 1000);
    const windowSec = Math.floor(timestamp / 60);
    const secondsRemaining = 60 - (timestamp % 60);
    
    // Hash string payload containing passId + branch + windowSec
    const encryptedPayload = `CITYSTAR:${this.currentBranch.toUpperCase()}:${passId}:W${windowSec}:${(windowSec * 997) % 10000}`;
    
    return {
      payload: encryptedPayload,
      secondsRemaining,
      passId
    };
  }

  // --- Staff Scan & Validate Dynamic QR (<300ms Evaluation Loop) ---
  validateStaffQR(payloadString) {
    const startTime = performance.now();
    try {
      const parts = payloadString.split(':');
      if (parts.length < 5 || parts[0] !== 'CITYSTAR') {
        return { 
          status: 'MISMATCH', 
          reason: 'INVALID TOKEN - Unrecognized QR signature format', 
          color: 'red',
          evalTimeMs: Math.round(performance.now() - startTime) 
        };
      }
      
      const passBranch = parts[1].toLowerCase();
      const passId = parts[2];
      const passWindow = parseInt(parts[3].replace('W', ''), 10);
      
      // 1. VERIFY BRANCH MATCH: Ensure pass.branch_id matches terminal.branch_id
      if (passBranch !== this.currentBranch) {
        return { 
          status: 'MISMATCH', 
          reason: `INVALID BRANCH - Pass booked for ${passBranch.toUpperCase()} Branch`, 
          color: 'red',
          passBranch: passBranch.toUpperCase(),
          terminalBranch: this.currentBranch.toUpperCase(),
          evalTimeMs: Math.round(performance.now() - startTime) 
        };
      }

      // 2. CHECK 60-SECOND WINDOW VALIDITY
      const currentWindow = Math.floor(Date.now() / 1000 / 60);
      if (Math.abs(currentWindow - passWindow) > 1) {
        return { 
          status: 'EXPIRED', 
          reason: 'PASS EXPIRED - Renewal Required', 
          color: 'yellow',
          canRenew: true,
          passId,
          evalTimeMs: Math.round(performance.now() - startTime) 
        };
      }

      // 3. SUCCESS / GREEN ACCESS VALIDATED
      const activePass = this.userPasses.find(p => p.passId === passId) || { guestName: 'Alhaji Umar Hassan', usageCount: 0 };
      activePass.usageCount = (activePass.usageCount || 0) + 1;
      activePass.state = 'ACCESS_VALIDATED';

      return {
        status: 'SUCCESS',
        reason: `PASS VALID - Welcome ${activePass.guestName}`,
        color: 'green',
        passId,
        guestName: activePass.guestName,
        branch: passBranch.toUpperCase(),
        playAudioChime: true,
        evalTimeMs: Math.round(performance.now() - startTime)
      };
    } catch (err) {
      return { 
        status: 'MISMATCH', 
        reason: 'Corrupted token payload', 
        color: 'red',
        evalTimeMs: Math.round(performance.now() - startTime) 
      };
    }
  }

  // --- 1-Tap Pass Renewal Handler ---
  renewPass(passId) {
    const pass = this.userPasses.find(p => p.passId === passId);
    if (pass) {
      pass.expiresAt = Date.now() + 24 * 60 * 60 * 1000;
      pass.usageCount = 0;
      pass.state = 'PASS_ISSUED';
      this.userWallet -= 3500; // Standard renewal rate
      this.notify();
      return true;
    }
    return false;
  }

  // --- SERVICE TYPE 1 & 2: Deterministic State Machine Transitions ---
  placeFoodOrder(items, mode, details) {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 899999);
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const verCode = Math.floor(1000 + Math.random() * 9000).toString();

    if (details.paymentMethod === 'Wallet') {
      if (this.userWallet < total) {
        alert('Insufficient wallet balance! Please top up your wallet.');
        return null;
      }
      this.userWallet -= total;
    }

    const serviceType = mode === 'MODE_B' ? 2 : 1;
    const initialState = serviceType === 2 ? 'ROOM_ORDER_INITIATED' : 'ORDER_CREATED';

    const newOrder = {
      id: orderId,
      mode,
      serviceType,
      branch: this.currentBranch,
      recipientName: details.recipientName || details.customerName || 'Mr. Musa Ibrahim',
      customerName: details.recipientName || details.customerName || 'Mr. Musa Ibrahim',
      phone: details.phone || '+234 803 123 4567',
      tower: details.tower || 'Tower B',
      floor: details.floor || 'Floor 4',
      blockWing: details.blockWing || 'Block C',
      deskRoom: details.deskRoom || 'Room 5',
      locationHeader: details.locationHeader || `${(details.tower||'Tower B').toUpperCase()} ➔ ${(details.floor||'Floor 4').toUpperCase()} ➔ ${(details.blockWing||'Block C').toUpperCase()} ➔ ${(details.deskRoom||'Room 5').toUpperCase()}`,
      roomNo: details.deskRoom || details.roomNo || null,
      address: details.locationHeader || details.address || null,
      items,
      total,
      status: initialState === 'ORDER_CREATED' ? 'ACCEPTED' : 'ACCEPTED',
      state: initialState,
      paymentMethod: details.paymentMethod,
      verificationCode: verCode,
      driverAssigned: serviceType === 1 ? 'Jarvis Courier (Musa Danjuma - 1.2km away)' : null,
      houseStaffAssigned: serviceType === 2 ? 'Internal Room Runner (Ibrahim)' : null,
      acceptedAt: Date.now(),
      targetPrepMinutes: Math.max(...items.map(i => i.prepTime || 12)),
      acceptanceCountdown: 90,
      slaEscalated: false
    };

    this.orders.unshift(newOrder);

    // Auto transition SERVICE TYPE 1: ORDER_CREATED -> KITCHEN_CONFIRMED -> DISPATCHED_TO_COURIER
    if (serviceType === 1) {
      setTimeout(() => {
        newOrder.state = 'KITCHEN_CONFIRMED';
        this.notify();
      }, 2000);

      setTimeout(() => {
        newOrder.state = 'DISPATCHED_TO_COURIER';
        this.notify();
      }, 6000);
    } else if (serviceType === 2) {
      // SERVICE TYPE 2: ROOM_ORDER_INITIATED -> KITCHEN_EXPRESS_PREP
      setTimeout(() => {
        newOrder.state = 'KITCHEN_EXPRESS_PREP';
        this.notify();
      }, 2000);
    }

    this.notify();
    return newOrder;
  }

  // State Transition Engine
  transitionOrderState(orderId, nextState) {
    const ord = this.orders.find(o => o.id === orderId);
    if (ord) {
      ord.state = nextState;
      if (nextState === 'COMPLETED' || nextState === 'ROOM_DELIVERED') {
        ord.status = 'DELIVERED';
      }
      this.notify();
    }
  }

  // Update order status
  updateOrderStatus(orderId, newStatus) {
    const ord = this.orders.find(o => o.id === orderId);
    if (ord) {
      ord.status = newStatus;
      this.notify();
    }
  }

  // --- Out of Stock 3-Way Resolution Trigger ---
  flagItemOutOfStock(orderId, itemId) {
    const ord = this.orders.find(o => o.id === orderId);
    if (!ord) return;
    
    const item = ord.items.find(i => i.id === itemId);
    if (!item) return;

    this.activeOOSOrder = {
      orderId: ord.id,
      itemId: item.id,
      itemName: item.name,
      itemPrice: item.price
    };

    this.notify();
  }

  resolveOOS(option) {
    if (!this.activeOOSOrder) return;
    const { orderId, itemName, itemPrice } = this.activeOOSOrder;
    const ord = this.orders.find(o => o.id === orderId);

    if (option === 1) {
      // Auto substitution
      if (ord) {
        const item = ord.items.find(i => i.name === itemName);
        if (item) item.name = `${itemName} [Substituted by Chef: Deluxe Special]`;
      }
    } else if (option === 2) {
      // Refund to Wallet
      this.userWallet += itemPrice;
      if (ord) {
        ord.items = ord.items.filter(i => i.name !== itemName);
        ord.total -= itemPrice;
      }
    } else if (option === 3) {
      // Cancel order
      if (ord) {
        ord.status = 'CANCELLED';
        this.userWallet += ord.total;
      }
    }

    this.activeOOSOrder = null;
    this.notify();
  }

  // --- MODE C: Hotel Room Booking Lock & Reservation ---
  lockRoomForBooking(roomId) {
    const branchRooms = this.inventory[this.currentBranch].rooms;
    const rm = branchRooms.find(r => r.id === roomId);
    if (rm && rm.status === 'available') {
      rm.status = 'locked';
      rm.lockedUntil = Date.now() + 10 * 60 * 1000; // 10 minute lock
      this.notify();
      return true;
    }
    return false;
  }

  confirmRoomBooking(roomId, guestName) {
    const branchRooms = this.inventory[this.currentBranch].rooms;
    const rm = branchRooms.find(r => r.id === roomId);
    if (rm) {
      rm.status = 'reserved';
      rm.lockedUntil = null;
      rm.bookedBy = guestName;
      rm.bookingCode = 'CS-STAY-' + Math.floor(10000 + Math.random() * 89999);
      this.notify();
      return rm;
    }
    return null;
  }

  // --- MODE D: Purchase Recreation Facility Pass ---
  purchasePass(passId) {
    const branchPasses = this.inventory[this.currentBranch].passes;
    const pass = branchPasses.find(p => p.id === passId);
    if (!pass) return null;

    if (this.userWallet < pass.price) {
      alert('Insufficient wallet balance for this pass!');
      return null;
    }

    this.userWallet -= pass.price;
    const newPass = {
      passId: 'PASS-' + Math.floor(1000 + Math.random() * 8999),
      title: pass.title,
      branch: this.currentBranch,
      purchasedAt: Date.now(),
      expiresAt: Date.now() + (pass.duration.includes('30') ? 30 : 1) * 24 * 60 * 60 * 1000,
      status: 'ACTIVE'
    };

    this.userPasses.unshift(newPass);
    this.notify();
    return newPass;
  }

  // --- Background SLA & Timer Engine ---
  initOrchestrationTimer() {
    setInterval(() => {
      let changed = false;

      // 1. Decrement 90s acceptance timers
      this.orders.forEach(ord => {
        if (ord.status === 'ACCEPTED' && ord.acceptanceCountdown > 0) {
          ord.acceptanceCountdown--;
          changed = true;
        }

        // 2. Check SLA Delay (> target prep time + 5 mins in KITCHEN_CONFIRMED / KITCHEN_EXPRESS_PREP)
        if (!ord.slaEscalated && (ord.state === 'KITCHEN_CONFIRMED' || ord.state === 'KITCHEN_EXPRESS_PREP')) {
          const elapsedMins = (Date.now() - ord.acceptedAt) / (1000 * 60);
          if (elapsedMins > (ord.targetPrepMinutes + 5)) {
            ord.slaEscalated = true;
            this.userPoints += 500; // Award 500 apology loyalty points to customer
            changed = true;
          }
        }
      });

      // 3. Check room booking lock expiry (10 min lock)
      Object.keys(this.inventory).forEach(b => {
        this.inventory[b].rooms.forEach(rm => {
          if (rm.status === 'locked' && rm.lockedUntil && Date.now() > rm.lockedUntil) {
            rm.status = 'available';
            rm.lockedUntil = null;
            changed = true;
          }
        });
      });

      if (changed) this.notify();
    }, 1000);
  }

  // Helper getters
  getBranchOrders() {
    return this.orders.filter(o => o.branch === this.currentBranch);
  }

  getBranchRooms() {
    return this.inventory[this.currentBranch].rooms;
  }

  getBranchFood() {
    return this.inventory[this.currentBranch].food;
  }

  getBranchPasses() {
    return this.inventory[this.currentBranch].passes;
  }

  // Check for SLA breach (> 5 mins past target prep time)
  getSLABreaches() {
    return this.orders.filter(ord => {
      if (ord.status === 'COOKING' || ord.status === 'ACCEPTED') {
        const elapsedMins = (Date.now() - ord.acceptedAt) / (1000 * 60);
        return elapsedMins > (ord.targetPrepMinutes + 5);
      }
      return false;
    });
  }
}

// Global Singleton Instance
window.cityStarStore = new CityStarStore();
