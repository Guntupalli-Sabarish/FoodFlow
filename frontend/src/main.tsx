import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/toaster";

const rootElement = document.getElementById("root")!;

// Inject skip-to-main-content link for keyboard/screen reader users (WCAG 2.4.1)
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.className = "skip-link";
skipLink.textContent = "Skip to main content";
document.body.insertBefore(skipLink, rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

