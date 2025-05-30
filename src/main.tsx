import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";

// Crear un contenedor y adjuntar un shadow root
const host = document.createElement("div");
document.body.appendChild(host);
const shadowRoot = host.attachShadow({ mode: "open" });

// Crear un div dentro del shadow root para React
const shadowContainer = document.createElement("div");
shadowRoot.appendChild(shadowContainer);

ReactDOM.createRoot(shadowContainer).render(
  <React.StrictMode>
    <ChatWidget />
  </React.StrictMode>
);
