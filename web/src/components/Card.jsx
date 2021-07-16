const Card = ({ info }) => {
  return (
    <div
      style={{
        height: "3.8rem",
        // borderRight: "1px solid grey",
        // borderLeft: "1px solid gray",
      }}
    >
      <p style={{ fontSize: "15px", marginBottom: "3px" }}>{info?.nombre}</p>
      <p style={{ fontSize: "15px", marginBottom: "1px" }}>{info?.id_ramo}</p>
      <span style={{ color: "gray", fontSize: "14px" }}>{info?.seccion}</span>
    </div>
  );
};

export default Card;
