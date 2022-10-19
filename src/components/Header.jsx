import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setValidPresupuesto,
  validPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {validPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setValidPresupuesto={setValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValidPresupuesto={setValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
