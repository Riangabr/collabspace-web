import { Route, Routes } from "react-router-dom";

import Feed from "../pages/Feed";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />} />

      <Route path="*" element={<h1>Not found!</h1>} />
    </Routes>
  );
}

export default AuthRoutes;
