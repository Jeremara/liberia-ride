import { Navigate, useLocation } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();

  const adminUser = localStorage.getItem("adminUser");

  if (!adminUser) {
    localStorage.setItem("adminRedirectPath", location.pathname);
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}