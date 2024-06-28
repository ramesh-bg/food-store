import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/food-store/">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
