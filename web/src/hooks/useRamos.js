import { useState, useEffect } from "react";

import informatica from "../assets/informatica.json";
import cfg from "../assets/cfg.json";

const ramosTotales = { ...informatica, ...cfg };
const useRamos = () => {
  const [ramos, setRamos] = useState({});
  useEffect(() => {
    let opcionesRamos = Object.keys(ramosTotales);
    opcionesRamos = opcionesRamos.map((p) => [p, ramosTotales[p][0].nombre]);
    const ramosSegunTematica = {
      "Ciencias básicas": [],
      Ingenieria: [],
      Informática: [],
      Ingles: [],
      "Formación general": [],
      Desconocido: [],
    };
    opcionesRamos.forEach((r) => {
      let codigo = r[0].slice(0, 3);
      if (codigo.includes("CB")) {
        ramosSegunTematica["Ciencias básicas"].push(r);
      } else if (codigo === "CIT") {
        ramosSegunTematica["Informática"].push(r);
      } else if (codigo === "CFG") {
        ramosSegunTematica["Formación general"].push(r);
      } else if (codigo === "CII") {
        ramosSegunTematica["Ingenieria"].push(r);
      } else if (codigo === "CIG") {
        ramosSegunTematica["Ingles"].push(r);
      } else {
        ramosSegunTematica["Desconocido"].push(r);
      }
    });
    setRamos(ramosSegunTematica);
  }, []);
  return [ramos, setRamos, ramosTotales];
};
export default useRamos;
