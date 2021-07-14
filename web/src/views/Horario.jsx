import { useHistory } from "react-router-dom";

const Horario = () => {
  const history = useHistory();
  const ramos = history.location.state;

  if (ramos) {
    return <div> Hola</div>;
  } else {
    return <div>ERROR</div>;
  }
};

export default Horario;
