import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import swal from "sweetalert";

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setValidPresupuesto,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const handleResetApp = () => {
    swal({
      title: "Reset App",
      text: "¿Estás seguro que deseas resetear la app?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuestaAlerta) => {
      if (respuestaAlerta === true) {
        setPresupuesto(0);
        setGastos([]);
        setValidPresupuesto(false);
      }
    });
  };

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 550);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
          })}
          value={porcentaje}
          text={`${porcentaje} Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Restear App
        </button>
        <p>
          <span> Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span> Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span> Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
