const Card = ({ info, bloque }) => {
  return (
    <td>
      <div
        style={
          {
            // height: "5rem",
            // borderRight: "1px solid grey",
            // borderLeft: "1px solid gray",
          }
        }
      >
        {/* <p style={{ fontSize: "15px", marginBottom: "1px" }}>{info?.id_ramo}</p> */}
        <p style={{ fontSize: "15px", marginBottom: "3px" }}>{info?.nombre}</p>
        <p style={{ fontSize: "13px", marginBottom: "3px" }}>
          {
            info?.horarios?.find(
              (h) => h[0] === bloque[0] && h[1] === bloque[1]
            )[2]
          }
        </p>
        <p style={{ fontSize: "12px", marginBottom: "0px", color: "gray" }}>
          {info?.profesor}
        </p>
        <span style={{ color: "gray", fontSize: "12px" }}>
          <small>{info?.seccion}</small>
        </span>
      </div>
    </td>
  );
};

export default Card;
