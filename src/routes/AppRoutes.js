import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Welcome from "../pages/Welcome";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;