import Spacer from "../../Components/Spacer";
import RegularText from "../../Components/Styled/RegularText";
import Row from "../../Components/Styled/Row";
import images from "../../Assets/Index";
import CircleImage from "../../Components/CircleImage";
import "./ViniPost.css";

function ViniPost() {
  return (
    <div id="main">
      <Row className="row">
        <CircleImage image={images.bat} />
        <div>
          <RegularText className="user-name">Vini</RegularText>
          <RegularText style={{ fontSize: 12 }}>18 minutes ago...</RegularText>
          <Spacer height={10} />
          <RegularText className="post">
            This is the Vini Post {<br />} quia et suscipit suscipit recusandae
            consequuntur expedita et cum reprehenderit molestiae ut ut quas
            totam nostrum rerum est autem sunt rem eveniet architecto
          </RegularText>
        </div>
        <img className="user-menu" alt="userMenu" src={images.menu} />
      </Row>
      <Spacer height={10} />
      <img className="user-picture" alt="batmanMetal" src={images.batmetal} />
    </div>
  );
}
export default ViniPost;
