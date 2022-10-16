import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  setValidPresupuesto,
  validPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {validPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} />
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
