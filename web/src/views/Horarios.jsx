import { useHistory } from "react-router-dom";
import { useState } from "react";

import generarHorarios from "../utils/generarHorarios";
import Horario from "../components/Horario";

const Horarios = () => {
  const history = useHistory();
  const ramos = history.location.state;
  const [combinacionActual, setCombinacionActual] = useState(0);

  if (!ramos) {
    return <h1>ERRROR</h1>;
  }
  const combinaciones = generarHorarios(ramos.ramos.filter((x) => x));
  console.log(combinaciones);

  return (
    <>
      <Horario ramos={combinaciones[combinacionActual]} />
      <div style={{ width: "fit-content", margin: "auto" }}>
        <ul className="pagination">
          <li className={`page-item ${combinacionActual === 0 && "disabled"}`}>
            <button
              disabled={combinacionActual === 0}
              className="page-link disabled"
              onClick={() => {
                setCombinacionActual(combinacionActual - 1);
              }}
            >
              &laquo;
            </button>
          </li>
          <li className="page-item active">
            <span className="page-link">{combinacionActual + 1}</span>
          </li>
          <li className="page-item">
            <button
              disabled={combinacionActual + 1 === combinaciones.length}
              className="page-link disabled"
              onClick={() => {
                setCombinacionActual(combinacionActual + 1);
              }}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Horarios;
