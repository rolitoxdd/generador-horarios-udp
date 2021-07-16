import getOtrasSecciones from "../utils/getOtrasSecciones";
const InfoSeccion = ({ seccion, secciones }) => {
  const seccionesPosibles = getOtrasSecciones(secciones, seccion);
  console.log(seccionesPosibles);
  return (
    <span
      className="list-group-item list-group-item-action flex-column align-items-start"
      key={seccion.paquete}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{seccion.nombre}</h5>
        <span>
          {/* <small className="me-2">{seccion.seccion}</small> */}
          <select className="text-muted" defaultValue={seccion.paquete}>
            <option value={seccion.paquete}>{seccion.seccion}</option>
          </select>
        </span>
      </div>
      <p className="mb-1 text-muted">{seccion.profesor || "Desconocido"}</p>
      <small className="">{seccion.id_ramo}</small>
    </span>
  );
};

export default InfoSeccion;
