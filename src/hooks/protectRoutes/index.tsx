import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth";

export const ProtectRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};
