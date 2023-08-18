import AuthRoutes from "./auth";
import DeauthRoutes from "./deauth";

function AppRoutes() {
  const signed = true;

  return signed ? <AuthRoutes /> : <DeauthRoutes />;
}

export default AppRoutes;
