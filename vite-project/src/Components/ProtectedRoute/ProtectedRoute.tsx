import type { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute(): JSX.Element {
  const isAuth = Boolean(localStorage.getItem("token"));

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}