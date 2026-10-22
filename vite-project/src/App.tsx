import type { JSX } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthPage } from "./pages/AuthPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { ReportPage } from "./pages/ReportPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function MainLayout(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/main" element={<AuthPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route
            path="/report"
            element={<Navigate to="/report/expenses" replace />}
          />
          <Route path="/report/:type" element={<ReportPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;