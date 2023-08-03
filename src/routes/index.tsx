import AuthRoutes from "./auth";
import DeAuthRoutes from "./deauth";

function AppRoutes() {
  const signed = true;
  return signed ? <AuthRoutes /> : <DeAuthRoutes />;
}

export default AppRoutes;
