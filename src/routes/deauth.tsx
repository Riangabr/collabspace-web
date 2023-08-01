import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

function DeAuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/*" element={<h1>Not found!</h1>} />
    </Routes>
  );
}
export default DeAuthRoutes;
