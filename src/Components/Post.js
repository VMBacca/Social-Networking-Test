import images from "../Assets/Index";
import CircleImage from "./CircleImage";
import Spacer from "./Spacer";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import "./Post.css";

function Post({ body, userId }) {
  return (
    <div id="post">
      <Row
        style={{
          padding: "10px 20px",
          justifyContent: "space-between",
        }}
      >
        <CircleImage image={images.fakepicture} />
        <div>
          <RegularText className="name">Random Name</RegularText>
          <RegularText style={{ fontSize: 12 }}>some time ago...</RegularText>
          <Spacer height={10} />
          <RegularText>{body}</RegularText>
        </div>
        <img className="menu" alt="userMenu" src={images.menu} />
      </Row>
    </div>
  );
}
export default Post;
