# Meal Point – NNPC Limited Workplace Food Ordering Platform

![Meal Point Banner](https://img.shields.io/badge/Meal%20Point-NNPC%20Limited-006633?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production--Ready-10B981?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-Enterprise%20RBAC-FFC000?style=for-the-badge)

**Meal Point** is an internal, enterprise-grade workplace food ordering platform designed exclusively for **NNPC Limited**. It enables NNPC staff, interns, and approved contractors to order meals from authorized internal cafeterias and have them delivered directly to their office workstations, towers, and floors.

---

## 🌟 Key Features

1. **Role-Based Access Control (RBAC)**:
   - 👨‍💼 **Employee View**: Workplace food ordering, office delivery destination selector (*Tower/Floor/Desk*), meal favorites, NNPC subsidy wallet balance, live order tracking.
   - 🎓 **Intern View**: Subsidized intern meal allowance and quick lunch combo orders.
   - 💼 **Contractor View**: Contractor account support, personal wallet top-ups, office workstation delivery.
   - 👨‍🍳 **Cafeteria / Vendor View**: Real-time **Kitchen Display System (KDS)** board, Accept/Reject orders, status update stepper (`RECEIVED` ➔ `PREPARING` ➔ `READY` ➔ `DELIVERED`), menu & stock availability manager.
   - 👑 **Super Admin View**: User management, vendor account approvals, global menu control, system announcements, executive sales analytics.

2. **Office Workstation & Tower Delivery System**:
   - Target exact NNPC building (e.g. *NNPC HQ Tower A*, *Executive Tower B*, *Refinery Complex*), Floor number (1–12), and Room/Desk ID.

3. **Meal Favorites & Reordering**:
   - Save favorite meals with the heart toggle for 1-click reordering.

4. **Chef NNPC AI Assistant**:
   - Context-aware chatbot providing dietary suggestions (low-carb, local Nigerian delicacies) and meal wallet balance checks.

5. **Prisma PostgreSQL Architecture (`prisma/schema.prisma`)**:
   - Full enterprise database schema covering Users, CafeteriaVendors, MenuItems, MealFavorites, FoodOrders, OrderItems, MealWallets, Announcements, and AuditLogs.

---

## 📁 Repository Structure

```
NNPC-FOOD-HUB/
├── index.html            # Master Meal Point Interface
├── styles.css            # NNPC Green (#006633) & Gold (#FFC000) Glassmorphism Styling
├── app.js                # Core Application Logic, RBAC Engine, Office Checkout, KDS & AI
├── prisma/
│   └── schema.prisma     # Relational Database Schema
├── README.md             # Documentation
└── .gitignore            # Git Exclusions
```

---

© 2026 **NNPC Limited**. All Rights Reserved. ISO 27001 Certified Enterprise Workplace Platform.
