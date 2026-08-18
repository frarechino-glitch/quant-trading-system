import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento raíz de la aplicación.");
}

createRoot(rootElement).render(
  <StrictMode>
    <main>
      <h1>Quant Trading System</h1>
      <p>Laboratorio cuantitativo — Fase 0</p>
    </main>
  </StrictMode>
);
