import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      {open ? (
        <div
          style={{
            width: "300px",
            height: "400px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <button onClick={() => setOpen(false)}>Cerrar</button>
          </div>
          <div>
            <p>Hola, ¿en qué podemos ayudarte?</p>
            {/* aquí iría la lógica del chat */}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#007bff",
            color: "white",
            fontSize: "24px",
            border: "none",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      )}
    </div>
  );
}
