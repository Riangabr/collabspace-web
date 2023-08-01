import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import "./styles/main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
