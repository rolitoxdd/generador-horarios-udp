import { Link } from "react-router-dom";
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
        {/* <h1>xd</h1> */}
        <div>
          <Link to="/selector" className="btn btn-outline-primary mt-2 mb-3">
            Generador de horarios
          </Link>
        </div>

        <div>
          <Link to="/simulador" className="btn btn-outline-secondary">
            Simulador de horarios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
