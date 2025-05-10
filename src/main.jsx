import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//product provider
import ProductProvider from "./contexts/ProductContext.jsx";

// sidebar provider
import SidebarProvider from "./contexts/SidebarContext.jsx";
// cart provider
import CartProvider from "./contexts/CartContext.jsx";
createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
