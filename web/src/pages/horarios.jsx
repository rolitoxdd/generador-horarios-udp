import { useState, useEffect } from "react";
import Link from "next/link";

import Horario from "../components/Horario";
import InfoSeccion from "../components/InfoSeccion";
import Error from "../components/Error";
import generarHorarios from "../utils/generarHorarios";
import ordenarHorariosSegunVentanas from "../utils/ordenarHorariosSegunVentana";

const Horarios = () => {
  let [ramos, setRamos] = useState([])
  const [combinacionActual, setCombinacionActual] = useState(0);
  const [combinaciones, setCombinaciones] = useState([]);
  useEffect(() => {

    ramos = setRamos(JSON.parse(window.localStorage.getItem("ramos")));
  },[])
  useEffect(() => {
    console.log('ramos',ramos)

      setCombinaciones(
        ordenarHorariosSegunVentanas(
          generarHorarios(ramos?.filter((x) => x))
        )
      );
  }, [ramos]);
  console.log('ramos',ramos)
  if (ramos && combinaciones.length === 0) {
    console.log(combinaciones)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (!ramos || ramos.every((x) => !x) || combinaciones.length === 0) {
    return <Error mensaje="Debes seleccionar al menos 1 ramo" />;
  }
  const secciones = combinaciones[combinacionActual]?.secciones;
  const combinationChange = (combinationId) => {
    setCombinacionActual(Number.parseInt(combinationId));
  };
  // console.log(combinaciones.map((c) => c.horario));
  return (
    <>
      <div
        className="row"
        style={{
          height: "100vh",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-8" style={{ paddingRight: 0 }}>
          <Horario
            secciones={secciones}
            horario={combinaciones[combinacionActual]?.horario}
          />
          <p className="">También puedes probar otras combinaciones:</p>

          <div style={{ width: "fit-content", margin: "auto" }}>
            <ul className="pagination">
              <li
                className={`page-item ${combinacionActual === 0 && "disabled"}`}
              >
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
              <li
                className={`page-item ${
                  combinacionActual + 1 === combinaciones.length && "disabled"
                }`}
              >
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
          <p className="text-muted" style={{ fontSize: "12px" }}>
            (Los horarios están ordenados según el numero de ventanas)
          </p>
        </div>
        <div className="col-4 pe-4" style={{ paddingLeft: 0 }}>
          <div className="list-group">
            {secciones?.map((s) => (
              <InfoSeccion
                seccion={s}
                key={s.paquete}
                combinaciones={combinaciones}
                secciones={secciones}
                handleCombinationChange={combinationChange}
                combinacionActual={combinacionActual}
              />
            ))}
          </div>
          <Link href="/" >
            <a className="btn btn-outline-warning mt-3 me-3">

            Volver al inicio
            </a>
          </Link>
          <Link href="/selector" >
            <a className="btn btn-outline-dark mt-3">
            Volver al selector
            <br />
            de ramos
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Horarios;
