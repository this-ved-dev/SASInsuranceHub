import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const NotFound = lazy(() => import('../pages/NotFound'))
const ClaimsAnalysisDashboard = lazy(() => import('../pages/ClaimsAnalysisDashboard'))
const FraudAnalysisDashboard = lazy(() => import('../pages/FraudAnalysisDashboard'))
const InsuranceRiskDashboard = lazy(() => import('../pages/InsuranceRiskDashboard'))
const InsuranceRiskDDC = lazy(() => import('../pages/InsuranceRiskDDC'))
const MachineLearningModels = lazy(() => import('../pages/MachineLearningModels'))
const RenewRatePredict = lazy(() => import('../pages/RenewRatePredict'))
const MASPredictions = lazy(() => import('../pages/MASPredictions'))

/**
 * Internal routes rendered inside the app layout.
 * Sidebar navigation links are defined in routes/sidebar.js
 */
const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/ClaimsAnalysisDashboard', component: ClaimsAnalysisDashboard },
  { path: '/FraudAnalysisDashboard', component: FraudAnalysisDashboard },
  { path: '/InsuranceRiskDashboard', component: InsuranceRiskDashboard },
  { path: '/InsuranceRiskDDC', component: InsuranceRiskDDC },
  { path: '/MachineLearningModels', component: MachineLearningModels },
  { path: '/mas-predict', component: MASPredictions },
  { path: '/RenewRatePredict', component: RenewRatePredict },
  { path: '/404', component: NotFound },
]

export default routes
