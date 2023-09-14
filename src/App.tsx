import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";

import { AuthenticationProvider } from "./contexts/Authentication";

import "./styles/main.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <AppRoutes />

        <ToastContainer
          theme="dark"
          autoClose={3000}
          toastStyle={{ background: "#262626" }}
        />
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
