import Gasto from "./Gasto";

Gasto;
const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltro,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltro.length ? "Gastos" : "No hay Gastos en esta categoria"}
          </h2>
          {gastosFiltro.map((gasto) => (
            <Gasto
              key={gasto.id}
              eliminarGasto={eliminarGasto}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay Gastos aun"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              eliminarGasto={eliminarGasto}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
