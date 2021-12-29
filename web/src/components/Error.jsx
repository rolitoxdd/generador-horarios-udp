import { useState, useEffect } from "react";
import Link from 'next/link'
import Router from "next/router";
const Error = ({ mensaje, estilo = {} }) => {
  const [segundos, setSegundos] = useState(5);
  // console.log(segundos);
  useEffect(() => {
    const timeoutID = setTimeout(() => setSegundos(segundos - 1), 1000);
    if (segundos==0) Router.push("/")
    return () => {
      clearTimeout(timeoutID)
    };
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
        <div>
          <h1 style={estilo}>{mensaje}</h1>
          <p>
            Serás redirigido a la{" "}
            <Link href="/" className="link-info">
              <a >
                página principal
              </a>
            </Link>
            {" en "}
            <span
              style={{
                color: segundos <= 3 ? "red" : "black",
              }}
            >
              {segundos}
            </span>{" "}
            segundo{segundos === 1 ? "" : "s"}
          </p>
        </div>
    </div>
  );
};

export default Error;
