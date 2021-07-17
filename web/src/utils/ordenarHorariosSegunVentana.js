const getVentanasDia = (horarioDia) => {
  const BLOQUES = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  let sumatoria = 0;
  let contador = 0;
  let inicioVentana = false;
  for (let bloque of BLOQUES) {
    if (horarioDia[bloque] && inicioVentana) {
      sumatoria += contador;
      contador = 0;
    } else if (horarioDia[bloque] && !inicioVentana) {
      inicioVentana = true;
    } else if (inicioVentana && !horarioDia[bloque]) {
      contador++;
    }
  }
  return sumatoria;
};
const getVentanasSemana = (horario) => {
  const SEMANA = ["LU", "MA", "MI", "JU", "VI"];
  let ventanasSemana = 0;
  for (let dia of SEMANA) {
    ventanasSemana += getVentanasDia(horario[dia]);
  }
  return ventanasSemana;
};

const ordenarHorariosSegunVentanas = (horarios) => {
  return horarios.sort(
    (p, n) => getVentanasSemana(p.horario) - getVentanasSemana(n.horario)
  );
};
export default ordenarHorariosSegunVentanas;
