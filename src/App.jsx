import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const handleNuevoGasto = () => {
    setModal(true);
  };

  const [presupuesto, setPresupuesto] = useState(0);
  const [validPresupuesto, setValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validPresupuesto={validPresupuesto}
        setValidPresupuesto={setValidPresupuesto}
      />
      {validPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && <p>va mostrar el modal</p>}
    </div>
  );
}

export default App;
