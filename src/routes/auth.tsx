import { Route, Routes, Navigate } from "react-router-dom";

import Feed from "../pages/Feed";
import Profile from "../pages/Profile";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/me/:id" element={<Profile />} />

      <Route path="*" element={<Navigate to="/feed" />} />
    </Routes>
  );
}

export default AuthRoutes;
