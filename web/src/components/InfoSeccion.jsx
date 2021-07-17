import getOtrasSecciones from "../utils/getOtrasSecciones";
const InfoSeccion = ({
  seccion,
  combinaciones,
  secciones,
  handleCombinationChange,
  combinacionActual,
}) => {
  const combinacionesPosibles = getOtrasSecciones(
    combinaciones,
    seccion,
    secciones
  );
  const idx = secciones.indexOf(seccion);
  // const seccionesPosibles = combinacionesPosibles.map(
  //   (c) => c.secciones[indice]
  // );
  return (
    <span
      className="list-group-item list-group-item-action flex-column align-items-start"
      key={seccion.paquete}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{seccion.nombre}</h5>
        <span>
          {/* <small className="me-2">{seccion.seccion}</small> */}
          <select
            className="form-select mb-2"
            defaultValue={combinacionActual}
            onChange={(e) => {
              handleCombinationChange(e.target.value);
            }}
          >
            {combinacionesPosibles.map(({ combinacion, indiceCombinacion }) => {
              const s = combinacion.secciones[idx];
              return (
                <option value={indiceCombinacion} key={s?.paquete}>
                  {s?.seccion} {s?.profesor ? `-${s?.profesor}` : ""}
                </option>
              );
            })}
          </select>
        </span>
      </div>
      {/* <p className="mb-1 text-muted">{seccion.profesor || "Desconocido"}</p> */}
      <small className="">{seccion.id_ramo}</small>
    </span>
  );
};

export default InfoSeccion;
