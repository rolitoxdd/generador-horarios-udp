import { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
const Error = () => {
  const [segundos, setSegundos] = useState(5);
  // console.log(segundos);
  useEffect(() => {
    const timeoutID = setTimeout(() => setSegundos(segundos - 1), 1000);
    return () => clearTimeout(timeoutID);
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {segundos === 0 ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h3>Debes seleccionar al menos 1 ramo</h3>
          <p>
            Serás redirigido a la{" "}
            <Link to="/" className="link-info">
              página principal
            </Link>
            {" en "}
            <span
              style={{
                color: segundos <= 3 ? "red" : "black",
              }}
            >
              {segundos}
            </span>{" "}
            segundos
          </p>
        </div>
      )}
    </div>
  );
};

export default Error;
