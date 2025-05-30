import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";

// Crear un contenedor y adjuntar un shadow root
const host = document.createElement("div");
document.body.appendChild(host);
const shadowRoot = host.attachShadow({ mode: "open" });

// Inyectar estilos base para evitar herencia y permitir personalización
const style = document.createElement("style");
style.textContent = `
  :host, * {
    all: initial;
    box-sizing: border-box;
  }
  /* Estilos base del widget, puedes modificarlos a placer */
  body, div, span, input, button, textarea {
    font-family: Arial, sans-serif;
    color: #222;
    background: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
  /* Personaliza aquí los estilos del widget */
`;
shadowRoot.appendChild(style);

// Crear un div dentro del shadow root para React
const shadowContainer = document.createElement("div");
shadowRoot.appendChild(shadowContainer);

ReactDOM.createRoot(shadowContainer).render(
  <React.StrictMode>
    <ChatWidget />
  </React.StrictMode>
);
