//hooks
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useRamos from "../hooks/useRamos";

//components
import Selector from "../components/Selector";

const Home = () => {
  const [ramos, , ramosTotales] = useRamos();
  const [ramosTomados, setRamosTomados] = useState([""]);
  const history = useHistory();

  const handleSelectorChange = (e, index) =>
    setRamosTomados([
      ...ramosTomados.slice(0, index),
      e.target.value,
      ...ramosTomados.slice(index + 1),
    ]);
  const handleSelectorDelete = (e, index) => {
    setRamosTomados([
      ...ramosTomados.slice(0, index),
      ...ramosTomados.slice(index + 1),
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/horarios", {
      ramos: ramosTomados.map((r) => ramosTotales[r]),
    });
  };

  return (
    <div className="container">
      <h1>Elige tus ramos</h1>
      <hr />
      <div className="row justify-content-center">
        <form className="col-md-6 col-10" onSubmit={handleSubmit}>
          {ramosTomados.map((_, i) => (
            <Selector
              ramos={ramos}
              ramosTomados={ramosTomados}
              key={i}
              indice={i}
              handleSelectorChange={handleSelectorChange}
              handleSelectorDelete={handleSelectorDelete}
            />
          ))}
          <button
            className="btn btn-primary col-8"
            onClick={() => setRamosTomados([...ramosTomados, ""])}
            type="button"
          >
            {" "}
            + Otro Ramo
          </button>
          <hr />
          <button className="btn btn-outline-success me-3">
            Generar Horarios
          </button>
          <Link className="btn btn-outline-warning" to="/">
            Volver al inicio
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
