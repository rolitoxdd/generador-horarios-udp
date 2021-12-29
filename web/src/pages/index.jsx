import Link from "next/link";
const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "3rem",
          paddingTop: "2rem",
          borderRadius: "15px",
          background: "#efefef",
        }}
      >
        <div>
          <Link href="/selector" >
            <a className="btn btn-outline-primary mt-2 mb-3">
              Generador de horarios
            </a>
          </Link>
        </div>

        <div>
          <Link href="/simulador" >
            <a className="btn btn-outline-secondary">

              Simulador de horarios
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
