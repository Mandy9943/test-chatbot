import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";

const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <ChatWidget />
  </React.StrictMode>
);
