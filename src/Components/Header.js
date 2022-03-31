import HeaderSearch from "./HeaderSearch";
import MenuItem from "./MenuItem";
import images from "../Assets/Index.js";
import MenuLogo from "./MenuLogo";

function Header({ image }) {
  return (
    <header
      style={{
        magin: "0px 50px",
        padding: "20px 20px",
        backgroundColor: "black",
        borderBottom: "1px solid #ffffff2a",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <MenuLogo link="/" image={images.facebook} />
        <h1
          style={{
            margin: 0,
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          FakeBook
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
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
