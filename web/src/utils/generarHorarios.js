import probarHorario from "./probarHorario";

const generarHorarios = (ramos) => {
  if (!ramos) {
    return [];
  }
  const cantidadSecciones = ramos.map((r) => r.length);
  const N = cantidadSecciones.reduce((acum, n) => acum * n, 1);
  const combinaciones = [];
  for (let i = 0; i < N; i++) {
    //fuerza bruta prueba todos los horarios
    let num = i;
    const combinacion = [];
    for (let base of cantidadSecciones) {
      combinacion.push(num % base);
      num = Math.floor(num / base);
    }
    let horariox = probarHorario(ramos.map((r, idx) => r[combinacion[idx]]));
    if (horariox) {
      combinaciones.push({
        horario: horariox,
        secciones: ramos.map((r, idx) => r[combinacion[idx]]),
      });
    }
  }
  return combinaciones;
};
export default generarHorarios;

// [['A','B','C'],['D','E'],['F']]
// 3 2 1 => 3*2*1 => 6
// 000: ADF - 0
// 010: AEF - 1
// 100: BDF - 2
// 110: BEF - 3
// 200: CDF - 4
// 210: CEF - 5
// generarHorarios([["A", "B", "C"], ["D", "E"], ["F"]]);

// [['A','B','C'],['D'],['E','F']]
// 3 1 2 => 3*1*2 => 6
// 000: ADE - 0
// 001: ADF - 1
// 100: BDE - 2
// 101: BDF - 3
// 200: CDE - 4
// 201: CDF - 5
// generarHorarios([["A", "B", "C"], ["D"], ["E", "F"]]);

// [['A','B','C','D'],['E'],['F','G']]
// 4 1 2 => 4*1*2 => 8
// 000: AEF - 0
// 001: AEG - 1
// 100: BEF - 2
// 101: BEG - 3
// 200: CEF - 4
// 201: CEG - 5
// 300: DEF - 6
// 301: DEG - 7
// generarHorarios([["A", "B", "C", "D"], ["E"], ["F", "G"]]);
