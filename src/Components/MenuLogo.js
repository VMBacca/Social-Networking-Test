import { Link } from "react-router-dom";

function MenuLogo({ link = "/", image }) {
  return (
    <Link to={link}>
      <img
        style={{
          margin: "0px 0px",
          marginRight: 0,
          cursor: "pointer",
          height: 40,
          width: 40,
          transform: "scaleX(-1)",
        }}
        src={image}
        alt="menuImg"
      />
    </Link>
  );
}

export default MenuLogo;
