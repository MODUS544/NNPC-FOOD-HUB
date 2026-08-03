# NNPC Limited Workplace Services: Food Hub & Cafeteria Platform

![NNPC Brand](https://img.shields.io/badge/NNPC%20Limited-Corporate%20Green%20%26%20Gold-006633?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production--Ready-10B981?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web--Services-FFC000?style=for-the-badge)

An enterprise-grade **Human Resources Employee Onboarding, Internship Management & Workplace Services (Food Ordering) Platform** for **NNPC Limited** built under NNPC's corporate deep emerald green (`#006633`) and gold (`#FFC000`) branding.

---

## 🌟 Key Features

1. **Role-Based Access Control (RBAC) Switcher**:
   - 👨‍💼 **Employee View**: Self-service meal ordering, category filtering, NNPC subsidy wallet balance, live order tracker with dynamic QR pickup pass.
   - 🎓 **Intern View**: Subsidized intern meal allowance, quick meal combo ordering.
   - 👨‍🍳 **Cafeteria / Vendor Admin View**: Real-time **Kitchen Display System (KDS)** live ticket view, menu stock management, daily sales reconciliation.
   - 👩‍💼 **Department Head / Supervisor View**: Group meal order approvals, department food budget allocation.
   - 🛡️ **Super Administrator View**: Global cafeteria outlets manager, vendor audit logs, system-wide analytics.

2. **Workplace Services & Cafeteria Hub**:
   - **Multi-Cafeteria Outlets**: *NNPC Towers Main Cafeteria (Abuja)*, *Executive Lounge & Dining*, *Refinery Staff Pavilion (Port Harcourt)*, *Green Energy Hub Bistro (Lagos)*.
   - **Dietary Tagging**: ⚡ Subsidized, 🌶️ Spicy, 🥦 Vegetarian, 🌙 Halal, 🌾 Gluten-Free, 🥩 High Protein, 🥗 Low-Carb.
   - **Pre-Order Time Slots**: Pick meal collection times (12:30 PM, 01:00 PM, 01:30 PM).

3. **Meal Wallet & Subsidy Engine**:
   - **Monthly Subsidy Allowance**: Auto-credited corporate allowance (₦15,000 / month).
   - **Personal Top-Up Wallet**: Quick top-up for extra guest meals.
   - **Transaction Ledger**: Full audit trail of credits and debits.

4. **Live Order Tracker & Kitchen Display System (KDS)**:
   - Live order ticket progression (`RECEIVED` ➔ `PREPARING` ➔ `READY_FOR_PICKUP` ➔ `DELIVERED`).
   - Dynamic **QR Code Pickup Collection Badge** for counter scanning.

5. **Chef NNPC AI Assistant**:
   - Context-aware chatbot for healthy low-carb food recommendations, local Nigerian dishes, and meal allowance balance queries.

6. **Executive Cafeteria Analytics**:
   - Interactive HTML5 Canvas revenue charts, peak hour order heatmaps, and one-click CSV report export.

---

## 📁 Repository Structure

```
NNPC-FOOD-HUB/
├── index.html            # Master Web Interface & Layout
├── styles.css            # NNPC Deep Emerald Green (#006633) & Gold (#FFC000) Design System
├── app.js                # Core Application Logic, RBAC Engine, Cart, KDS & AI Assistant
├── prisma/
│   └── schema.prisma     # PostgreSQL Prisma Relational Database Schema
├── README.md             # Project Documentation
└── .gitignore            # Git Ignore File
```

---

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in any web browser (Chrome, Edge, Safari, Firefox).
3. Use the floating top banner to switch between **Employee**, **Intern**, **Cafeteria Admin**, **Department Head**, and **Super Admin** perspectives!

---

## 🗄️ Database Integration

The database schema is defined in `prisma/schema.prisma`. To set up PostgreSQL with Prisma:
```bash
npx prisma generate
npx prisma db push
```

---

© 2026 **NNPC Limited**. All Rights Reserved. ISO 27001 Certified Enterprise Workplace Platform.
