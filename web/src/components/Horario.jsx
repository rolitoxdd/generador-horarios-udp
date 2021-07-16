import Card from "./Card";

const Horario = ({ horario }) => {
  const bloques = {
    "08:30 - 09:50": "A",
    "10:00 - 11:20": "B",
    "11:30 - 12:50": "C",
    "13:00 - 14:20": "D",
    "14:30 - 15:50": "E",
    "16:00 - 17:20": "F",
    "17:25 - 18:45": "G",
    // "18:50 - 20:10": "H",
    // "20:15 - 21:35": "I",
  };
  return (
    <div className="container-xl">
      <table className="table table-hover">
        <thead>
          <tr className="table-active">
            <th scope="col"></th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bloques).map((b) => (
            <tr className="table-secondary" key={bloques[b]}>
              <th>{b}</th>
              <Card
                info={horario["LU"][bloques[b]]}
                bloque={["LU", bloques[b]]}
              />
              <Card
                info={horario["MA"][bloques[b]]}
                bloque={["MA", bloques[b]]}
              />
              <Card
                info={horario["MI"][bloques[b]]}
                bloque={["MI", bloques[b]]}
              />
              <Card
                info={horario["JU"][bloques[b]]}
                bloque={["JU", bloques[b]]}
              />

              <Card
                info={horario["VI"][bloques[b]]}
                bloque={["VI", bloques[b]]}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Horario;
