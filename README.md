# InsuranceVA

A React-based web application that demonstrates the capabilities of **SAS Viya** in a third-party application. InsuranceVA provides insurance analytics dashboards, predictive models, and data-driven content (DDC) by embedding SAS Visual Analytics reports and integrating with SAS Microanalytic Service (MAS) and CAS (Cloud Analytic Services).

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Application Flow](#application-flow)
- [Key Pages & Components](#key-pages--components)
- [SAS Integration](#sas-integration)
- [Scripts](#scripts)
- [License](#license)

---

## Overview

InsuranceVA applies text analytics and machine learning techniques to insurance datasets (e.g., Prudential Life Insurance, automobile insurance, CFPB data) using SAS® Viya. It showcases:

- **Visual Analytics** – Embedded dashboards and reports
- **Visual Statistics** – Statistical analysis and model exploration
- **Build Models** – Predictive model deployment
- **Visual Text Analysis** – Sentiment and pattern analysis

The application follows an agile methodology with scientific validation for insights and models, and provides a modern UI for analysts to explore trends, patterns, and predictive outcomes.

---

## Features

| Feature | Description |
|---------|-------------|
| **Claims Analysis** | Dashboard for insurance claims with embedded SAS VA reports |
| **Fraud Analysis** | Fraud detection and analysis visualizations |
| **Insurance Risk KPI** | Key performance indicators and risk metrics |
| **Data Driven Risk Categorization** | DDC objects for dynamic risk classification |
| **Machine Learning Models** | Insurance risk, renewal prediction, and fraud prediction models |
| **Renewal Rate Prediction** | CAS table viewer for renewal prediction data |
| **MAS Predictions** | Microanalytic Service scoring for customer renewal probability |
| **Authentication** | SAS OAuth-based login |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 16.13 |
| Build | Create React App |
| Routing | react-router-dom 5.x |
| UI | @windmill/react-ui, react-bootstrap |
| Charts | Chart.js, react-chartjs-2 |
| HTTP | Axios |
| SAS Integration | @sassoftware/va-report-components |
| Styling | Tailwind CSS, PostCSS |

---

## Project Structure

```
InsuranceVA/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── apis/
│   │   └── apiClient.js          # Axios client for SAS API calls
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── CTA.js               # Call-to-action link to SAS Viya
│   │   ├── Header.js
│   │   ├── MASForm.js           # MAS scoring form
│   │   ├── MASResults.js        # MAS scoring results
│   │   ├── TableViewer/        # CAS table display
│   │   ├── Chart/               # Chart components
│   │   ├── Sidebar/
│   │   └── Typography/
│   ├── config.js                # App configuration (SAS URL, etc.)
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── SidebarContext.js
│   │   └── ThemeContext.js
│   ├── pages/
│   │   ├── Dashboard.js         # Main dashboard with KPIs and charts
│   │   ├── ClaimsAnalysisDashboard.js
│   │   ├── FraudAnalysisDashboard.js
│   │   ├── InsuranceRiskDashboard.js
│   │   ├── InsuranceRiskDDC.js
│   │   ├── MachineLearningModels.js
│   │   ├── RenewRatePredict.js  # CAS table viewer
│   │   ├── MASPredictions.js    # MAS predictions
│   │   ├── Login.js
│   │   ├── CreateAccount.js
│   │   ├── ForgotPassword.js
│   │   └── NotFound.js          # 404 page
│   ├── routes/
│   │   ├── index.js            # Route definitions
│   │   └── sidebar.js          # Sidebar navigation
│   ├── utils/
│   │   └── demo/
│   │       ├── chartsData.js   # Sample chart data for Dashboard
│   │       └── tableData.js    # Sample table data for Dashboard
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- Access to a SAS Viya environment

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd InsuranceVA

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

Output is generated in the `build/` directory.

---

## Configuration

### Environment Variables

Create a `.env` file in the project root to override defaults:

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_SAS_BASE_URL` | SAS Viya server base URL | `https://pdcesx04069.exnet.sas.com` |

Example:

```env
REACT_APP_SAS_BASE_URL=https://your-sas-viya-server.com
```

### SAS Viya Requirements

- A running SAS Viya 4.x or 3.5 environment
- OAuth client configured for authentication (e.g., `viya_app1`)
- Published Visual Analytics reports and DDC objects
- CAS session access for table fetching (Renewal Rate Prediction)
- MAS module deployed (e.g., `logistic_regression_renewal_clas`) for MAS Predictions

---

## Application Flow

1. **Login** – User authenticates via SAS OAuth (`/SASLogon/oauth/token`). Token is stored and attached to subsequent API requests.
2. **Dashboard** – After login, user is redirected to `/app/dashboard` with KPI cards, complaint charts, and sample data.
3. **Analytics** – User navigates to embedded SAS VA reports (Claims, Fraud, Risk, ML Models) via sidebar.
4. **Predictions** – MAS Predictions page allows scoring with the renewal model; Renewal Rate Prediction displays CAS table data.

---

## Key Pages & Components

| Page | Path | Purpose |
|------|------|---------|
| Login | `/login` | SAS OAuth authentication |
| Dashboard | `/app/dashboard` | Overview with KPIs and charts |
| Claims Analysis | `/app/ClaimsAnalysisDashboard` | Embedded claims reports |
| Fraud Analysis | `/app/FraudAnalysisDashboard` | Fraud analysis report |
| Insurance Risk KPI | `/app/InsuranceRiskDashboard` | Risk KPIs and visualizations |
| Data Driven Risk | `/app/InsuranceRiskDDC` | DDC risk categorization |
| ML Models | `/app/MachineLearningModels` | Risk, renewal, fraud models |
| Renewal Prediction | `/app/RenewRatePredict` | CAS table viewer |
| MAS Predictions | `/app/mas-predict` | MAS scoring form and results |

---

## SAS Integration

### Visual Analytics Reports

Reports are embedded using `<sas-report-page>` and `<sas-report-object>` web components from `@sassoftware/va-report-components`, loaded in `public/index.html`.

### API Endpoints Used

- `POST /SASLogon/oauth/token` – OAuth token
- `POST /cas-shared-default-http/cas/sessions` – CAS session creation
- `POST /cas-shared-default-http/cas/sessions/{id}/actions/table.fetch` – CAS table fetch
- `POST /microanalyticScore/modules/{module}/steps/score` – MAS scoring

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run tailwind:dev` | Build Tailwind CSS for development |
| `npm run tailwind:build` | Build Tailwind CSS for production |

