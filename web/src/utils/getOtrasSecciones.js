const getOtrasSecciones = (combinaciones, seccion, seccionesActuales) => {
  // console.log(combinaciones, seccion, secciones);

  const indice = seccionesActuales.indexOf(seccion);
  // console.log(indice);
  const combinacionConIndice = combinaciones.map((c, i) => ({
    combinacion: c,
    indiceCombinacion: i,
  }));
  const combinacionesPosibles = combinacionConIndice.filter(
    ({ combinacion: { secciones } }) =>
      secciones.every((s, idx) =>
        idx !== indice ? s === seccionesActuales[idx] : true
      )
  );
  return combinacionesPosibles;
  // const seccionesPosibles = combinacionesPosibles.map(
  //   (c) => c.secciones[indice]
  // );
  // return seccionesPosibles;
};
export default getOtrasSecciones;
