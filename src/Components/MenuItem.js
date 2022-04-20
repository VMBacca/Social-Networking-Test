import { Link } from "react-router-dom";
import "./MenuItem.css";

function MenuItem({ link = "/", image }) {
  return (
    <Link to={link}>
      <img className="menu-item" src={image} alt="menuImg" />
    </Link>
  );
}

export default MenuItem;
