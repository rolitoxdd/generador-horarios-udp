//hooks
import { useState } from "react";
import useRamos from "../hooks/useRamos";

// components
import Link from "next/link";
import Horario from "../components/Horario";
import Selector from "../components/Selector";

//utilities
import probarHorario from "../utils/probarHorario";

const Simulador = () => {
  // const [combinacionActual, setCombinacionActual] = useState(0);
  const [ramos, , ramosTotales] = useRamos();
  const [seccionesTomadas, setSeccionesTomadas] = useState([""]);
  const [ramosTomados, setRamosTomados] = useState([""]);
  const [horario, setHorario] = useState({
    LU: {},
    MA: {},
    MI: {},
    JU: {},
    VI: {},
  });
  // console.log(ramosTotales);
  const handleSelectorChange = (e, index) => {
    const nuevosRamosTomados = [
      ...ramosTomados.slice(0, index),
      e.target.value,
      ...ramosTomados.slice(index + 1),
    ];
    setRamosTomados(nuevosRamosTomados);
  };
  const handleSelectorDelete = (e, index) => {
    const nuevosRamosTomados = [
      ...ramosTomados.slice(0, index),
      ...ramosTomados.slice(index + 1),
    ];
    const nuevasSeccionesTomadas = [
      ...seccionesTomadas.slice(0, index),
      ...seccionesTomadas.slice(index + 1),
    ];
    setRamosTomados(nuevosRamosTomados);
    setSeccionesTomadas(nuevasSeccionesTomadas);
    const nuevoHorario = probarHorario(nuevasSeccionesTomadas);
    setHorario(nuevoHorario);
  };
  const handleSeccionSelectorChange = (e, indexRamo) => {
    const indexSeccion = e.target.value;
    const ramo = ramosTomados[indexRamo];
    const seccion = ramosTotales[ramo][indexSeccion];
    const nuevasSeccionesTomadas = [
      ...seccionesTomadas.slice(0, indexRamo),
      seccion,
      ...seccionesTomadas.slice(indexRamo + 1),
    ];
    setSeccionesTomadas(nuevasSeccionesTomadas);
    const nuevoHorario = probarHorario(nuevasSeccionesTomadas);
    setHorario(nuevoHorario);
  };
  const checkProblema = (seccion, indexRamo) => {
    const seccionesTentativas = [
      ...seccionesTomadas.slice(0, indexRamo),
      seccion,
      ...seccionesTomadas.slice(indexRamo + 1),
    ];
    return !probarHorario(seccionesTentativas);
  };
  const handleOtroRamo = () => {
    setRamosTomados([...ramosTomados, ""]);
  };
  return (
    <>
      <div
        className="row"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="col-8" style={{ paddingRight: 0 }}>
          <Horario horario={horario} />
        </div>
        {
          <div className="col-4 pe-4" style={{ paddingLeft: 0 }}>
            <div className="list-group pt-2 ">
              {ramosTomados.map((_, i) => (
                <div key={i} className="ms-2">
                  <Selector
                    ramos={ramos}
                    ramosTomados={ramosTomados}
                    key={i}
                    indice={i}
                    handleSelectorChange={handleSelectorChange}
                    handleSelectorDelete={handleSelectorDelete}
                  />
                  {ramosTomados[i] ? (
                    <select
                      className="mb-3"
                      value={
                        ramosTotales[ramosTomados[i]].indexOf(
                          seccionesTomadas[i]
                        ) !== -1
                          ? ramosTotales[ramosTomados[i]].indexOf(
                            seccionesTomadas[i]
                          )
                          : ""
                      }
                      key={ramosTomados[i]}
                      onChange={(e) => handleSeccionSelectorChange(e, i)}
                    >
                      <option value="" disabled>
                        -----
                      </option>
                      {ramosTotales[ramosTomados[i]].map((seccion, j) => {
                        return (
                          <option
                            value={j}
                            key={seccion.paquete}
                            disabled={checkProblema(seccion, i)}
                          >
                            {seccion.seccion} -{" "}
                            {seccion.profesor || "Desconocido"}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    ""
                  )}
                </div>
              ))}

              <button
                className="btn btn-outline-success col-10 mb-2 mt-2"
                style={{ margin: "auto" }}
                onClick={handleOtroRamo}
                type="button"
                disabled={!seccionesTomadas[ramosTomados.length - 1]}
              >
                + Otro Ramo
              </button>
            </div>
            <Link href="/" >
              <a className="btn btn-outline-warning mt-3">
                Volver al inicio
              </a>
            </Link>
          </div>
        }
      </div>
    </>
  );
};

export default Simulador;
