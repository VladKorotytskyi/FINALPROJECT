import type { JSX } from "react";
import { ReportPage } from "./pages/ReportPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { AuthPage } from "./pages/AuthPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
