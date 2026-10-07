# ⚡ Analytics Dashboard & Multi-Format Ingestion Engine

An end-to-end fullstack platform featuring an **Express ETL API** and a **React 19 / Vite Analytics Dashboard**. Built to ingest heterogeneous multi-format data (JSON, CSV, XML), perform relational dataset joins, derive key business metrics, convert currencies using live external APIs, and visualize real-time business intelligence.

---

## 🌟 Overview & Architecture

This solution tackles the challenge of processing e-commerce datasets originating from disparate data streams:
- **JSON**: Customer order details and line items (including handling malformed quotes like `""orders""`).
- **CSV**: Product catalog, categories, pricing, and inventory data (with BOM stripping & header normalization).
- **XML**: Logistics, shipment dates, delivery duration, and carrier status tags.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       React 19 Analytics Dashboard                      │
│                  (Vite + TailwindCSS + Recharts UI)                     │
│                        http://localhost:5173                            │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ REST API
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         Node.js / Express API                           │
│                        http://localhost:5000                            │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
      ┌──────────────────────────────┼──────────────────────────────┐
      ▼                              ▼                              ▼
┌───────────────┐           ┌─────────────────┐           ┌──────────────────┐
│ Ingest Engine │           │  Data Pipeline  │           │  External APIs   │
│ • JSON Orders │           │ • O(1) Relational│           │ • Frankfurter    │
│ • CSV Products│ ────────> │   Dataset Joins │ ────────> │   Currency API   │
│ • XML Shipment│           │ • Delay Flags   │           │ • REST Countries │
└───────────────┘           │ • Metrics Calc  │           │   Demographics   │
                            └────────┬────────┘           └──────────────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │    SQLite Database    │
                         │      analytics.db     │
                         └───────────────────────┘
```

---

## 🎯 Key Capabilities & Technical Highlights

| Capability | Technical Detail |
|---|---|
| **Multi-Format Ingestion** | Dynamic parsers for JSON, CSV, and XML with quote sanitization, BOM stripping, and XML tag normalization. |
| **Relational Data Processing** | $O(1)$ in-memory lookups joining orders, products, and shipments into a normalized SQLite relational database. |
| **Calculated Business Metrics** | Automatic calculation of **Total Order Value**, **Delivery Delay Flags** (`status = 'Delayed'` or `delivery_days > 5`), and category revenue. |
| **Live Currency Conversion** | Live exchange rate fetching from the **Frankfurter API** with fallback rate handling and 1-hour TTL caching. |
| **Interactive Dashboard** | Modern React 19 UI with Recharts visualizations, interactive drawers, search, filtering, and live database status indicators. |
| **Demo Data Seeding** | 1-click database seeder populated with realistic multi-category order history. |

---

## 📂 Project Structure

```
.
├── backend/                  # Express REST API & Ingestion Engine
│   ├── data/                 # SQLite database storage (analytics.db)
│   ├── src/
│   │   ├── controllers/      # Route controllers (Analytics & Ingestion)
│   │   ├── db/               # SQLite connection setup & table schemas
│   │   ├── middleware/       # File upload & global error handling
│   │   ├── routes/           # REST API endpoints
│   │   ├── services/         # Data parsers, transformation logic & currency services
│   │   └── app.js            # Express app bootstrap
│   ├── test-e2e.js           # Automated end-to-end API verification suite
│   ├── README.md             # Backend documentation
│   └── package.json
│
├── frontend/                 # React 19 + Vite Analytics Web App
│   ├── src/
│   │   ├── components/       # Dashboard, Charts, Orders, Products, Pipeline & Settings
│   │   ├── services/         # API client & live/mock data adapters
│   │   ├── App.jsx           # Application shell and view router
│   │   └── index.css         # Styling system
│   ├── README.md             # Frontend documentation
│   └── package.json
│
├── data/                     # Baseline sample datasets (JSON, CSV, XML)
│   ├── Orders.json           # Raw JSON order records
│   ├── Products.csv          # Raw CSV product catalog
│   └── Shipment.xml          # Raw XML delivery records
│
└── README.md                 # Project documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)

---

### Step 1: Launch Backend API

```bash
cd backend
npm install
npm run dev
```

- **API Base URL**: `http://localhost:5000/api`
- **Health Check**: `http://localhost:5000/api/health`

---

### Step 2: Launch Frontend Dashboard

Open a separate terminal window:

```bash
cd frontend
npm install
npm run dev
```

- **Dashboard App**: `http://localhost:5173`

---

### Step 3: Run Automated Verification Tests

To run the automated E2E test suite that validates all API endpoints, data ingestion, database joins, and currency integration:

```bash
cd backend
node test-e2e.js
```

---

## 📊 Dashboard Modules

1. **Overview Dashboard**: High-level KPI summary cards (Total Revenue, Orders, Delayed Shipments, Average Order Value) with interactive trend charts.
2. **Orders Center**: Searchable orders list with category and delivery status filtering, drawer drilldown, and order details.
3. **Products Catalog**: Detailed product grid with inventory metrics and category breakdowns.
4. **Analytics Hub**: Performance trends and category distribution charts powered by Recharts.
5. **Logistics & Delivery**: Shipment delivery tracking and delayed order analysis.
6. **Data Pipeline UI**: Interactive file uploader for custom JSON/CSV/XML files, live DB status counters, and 1-click dataset seeding.
7. **System Settings**: Backend connection status monitor, response latency check, and live/mock data mode switcher.

---

## 🛠️ Technology Stack

- **Backend**: Node.js, Express, `better-sqlite3`, `csv-parse`, `fast-xml-parser`, `multer`, `cors`
- **Frontend**: React 19, Vite, TailwindCSS, Recharts, Lucide React, `date-fns`
- **External APIs**: Frankfurter Currency API, REST Countries API

---

## 📄 Author & Repository

- **Author**: Kushagra Dwivedi
- **GitHub Repository**: [Analytic-dashboard](https://github.com/KushagraDwivedics/Analytic-dashboard.git)
