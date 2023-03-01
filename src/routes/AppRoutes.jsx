import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Welcome from "../pages/Welcome";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
