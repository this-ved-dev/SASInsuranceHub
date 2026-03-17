/**
 * Sidebar navigation links.
 * Routes are defined in routes/index.js
 */
const routes = [
  {
    path: '/app/dashboard',
    icon: 'ChartsIcon',
    name: 'Dashboard',
    routes: [
      { path: '/app/ClaimsAnalysisDashboard', name: 'Claims Analysis' },
      { path: '/app/FraudAnalysisDashboard', name: 'Fraud Analysis' },
      { path: '/app/InsuranceRiskDashboard', name: 'Insurance Risk KPI' },
      { path: '/app/InsuranceRiskDDC', name: 'Data Driven Risk Categorization' },
      { path: '/app/MachineLearningModels', name: 'Machine Learning Models' },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Predictors',
    routes: [
      { path: '/app/RenewRatePredict', name: 'Renewal Rate Prediction' },
      { path: '/app/mas-predict', name: 'MAS Predictions' },
    ],
  },
]

export default routes
