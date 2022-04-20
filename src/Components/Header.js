import HeaderSearch from "./HeaderSearch";
import MenuItem from "./MenuItem";
import images from "../Assets/Index.js";
import MenuLogo from "./MenuLogo";
import "./Header.css";

function Header({ image }) {
  return (
    <header id="main-header">
      <div className="logo">
        <MenuLogo link="/" image={images.facebook} />
        <h1 className="logo-title">FakeBook</h1>
      </div>
      <div className="menu-items">
        <div>
          <MenuItem link="/" image={images.home} />
          <MenuItem link="/video" image={images.play} />
          <MenuItem link="/game" image={images.controller} />
          <MenuItem link="/group-chat" image={images.group} />
          <MenuItem link="/faq" image={images.question} />
        </div>
        <HeaderSearch />
      </div>
    </header>
  );
}

export default Header;
