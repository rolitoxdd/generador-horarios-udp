const probarHorario = (secciones) => {
  const horario = {
    LU: {},
    MA: {},
    MI: {},
    JU: {},
    VI: {},
  };
  for (let seccion of secciones) {
    let chequeado = [];
    for (let h of seccion.horarios) {
      const [dia, hora] = h;
      if (horario[dia][hora]) {
        return false;
      } else {
        chequeado.push(h);
      }
    }
    if (chequeado.length === seccion.horarios.length) {
      for (let h of chequeado) {
        horario[h[0]][h[1]] = seccion;
      }
    }
  }
  return horario;
};
export default probarHorario;
