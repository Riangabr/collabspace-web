import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import { AuthenticationProvider } from "./contexts/Authentication";

import "./styles/main.css";

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
