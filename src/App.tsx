import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/auth";
import { ProtectRoutes } from "./hooks/protectRoutes";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { LoginPage } from "./pages/login";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/" index element={<Navigate to="home" />} />
      <Route
        path="/login"
        element={
          isAuthenticated() ? <Navigate to="/dashboard" /> : <LoginPage />
        }
      />
      <Route path="/home" index element={<Home />} />
      <Route element={<ProtectRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
