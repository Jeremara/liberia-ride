import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./components/NotFound";


// Admin Dashboard Imports
import AdminLogin from "./components/admin/auth/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import LiveRides from "./components/admin/rides/LiveRides";
import DriverManagement from "./components/admin/drivers/DriverManagement";
import PassengerManagement from "./components/admin/passengers/PassengerManagement";
import Finance from "./components/admin/finance/Finance";
import Transactions from "./components/admin/transactions/Transactions";
import Reports from "./components/admin/reports/Reports";
import FraudMonitor from "./components/admin/fraud/FraudMonitor";
import ProtectedRoute from "./components/admin/auth/ProtectedRoute";
import SessionManager from "./components/admin/auth/SessionManager";

export const router = createBrowserRouter([
  {
    path: "/admin/login",
    Component: AdminLogin
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <SessionManager>
          <AdminLayout />
        </SessionManager>
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", Component: AdminDashboard },
      { path: "live-rides", Component: LiveRides },
      { path: "drivers", Component: DriverManagement },
      { path: "passengers", Component: PassengerManagement },
      { path: "finance", Component: Finance },
      { path: "transactions", Component: Transactions },
      { path: "reports", Component: Reports },
      { path: "fraud", Component: FraudMonitor },
      { path: "*", Component: NotFound },
    ],
  }
]);