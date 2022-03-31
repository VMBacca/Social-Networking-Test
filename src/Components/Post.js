import images from "../Assets/Index";
import CircleImage from "./CircleImage";
import Spacer from "./Spacer";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";

function Post({ body, userId, id }) {
  return (
    <div
      style={{
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#1a1c20",
      }}
    >
      <Row
        style={{
          padding: "10px 20px",
          justifyContent: "space-between",
        }}
      >
        <CircleImage image={images.fakepicture} />
        <div>
          <RegularText
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            {userId}
          </RegularText>
          <RegularText style={{ fontSize: 12 }}>18 minutes ago...</RegularText>
          <Spacer height={10} />
          <RegularText>{body}</RegularText>
        </div>
        <img
          alt="userMenu"
          src={images.menu}
          style={{
            height: 30,
            width: 30,
            cursor: "pointer",
          }}
        />
      </Row>
    </div>
  );
}
export default Post;
