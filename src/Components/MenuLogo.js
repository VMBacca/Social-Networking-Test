import { Link } from "react-router-dom";
import "./MenuLogo.css";

function MenuLogo({ link = "/", image }) {
  return (
    <Link to={link}>
      <img className="logo-img" src={image} alt="menuImg" />
    </Link>
  );
}

export default MenuLogo;
