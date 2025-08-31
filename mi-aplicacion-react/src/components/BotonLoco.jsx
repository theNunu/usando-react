import { useState } from "react";

function BotonLoco() {
  const [size, setSize] = useState(24);

  return (
    <button
      style={{ fontSize: size, backgroundColor: "aqua" }}
      onClick={() => setSize(size + 12)}
    >
      ¡Hazme crecer! 🌱
    </button>
  );
}

export default BotonLoco