import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Welcome from "../pages/Welcome";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Login from "../pages/clients/Login";
import Register from "../pages/clients/Register";
import RecipientsDashboard from "../pages/recipients/Dashboard"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/recipients">
            <Route path="dashboard" element={<RecipientsDashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
