import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Selector from "../components/Selector";
import informatica from "../assets/informatica.json";
import cfg from "../assets/cfg.json";

const ramosTotales = { ...informatica, ...cfg };

const Home = () => {
  const [ramos, setRamos] = useState([]);
  const [ramosTomados, setRamosTomados] = useState([""]);
  const history = useHistory();

  useEffect(() => {
    let opcionesRamos = Object.keys(ramosTotales);
    opcionesRamos = opcionesRamos.map((p) => [p, ramosTotales[p][0].nombre]);
    setRamos(opcionesRamos);
  }, []);

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
          <button className="btn btn-outline-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
