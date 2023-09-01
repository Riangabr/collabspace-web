import { Route, Routes, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

function DeauthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default DeauthRoutes;
