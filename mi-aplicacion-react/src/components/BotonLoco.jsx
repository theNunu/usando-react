import { useState } from "react";
import BotonesRutas from "./BotonesRutas";

function BotonLoco() {
  const [size, setSize] = useState(24);

  return (
    <div>
      <BotonesRutas/>
      <button
        style={{ fontSize: size, backgroundColor: "aqua" }}
        onClick={() => setSize(size + 12)}
      >
        ¡Hazme crecer! 🌱
      </button>



    </div>

  );
}

export default BotonLoco