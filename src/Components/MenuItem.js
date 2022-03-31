import { Link } from "react-router-dom";

function MenuItem({ link = "/", image }) {
  return (
    <Link to={link}>
      <img
        style={{
          margin: "0 30px",
          cursor: "pointer",
          height: 30,
          width: 30,
        }}
        src={image}
        alt="menuImg"
      />
    </Link>
  );
}

export default MenuItem;
