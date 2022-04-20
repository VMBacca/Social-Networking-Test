import CircleImage from "./CircleImage";
import Row from "./Styled/Row";
import RegularText from "./Styled/RegularText";
import "./MessengerUser.css";

const MessengerUser = ({ img, active = false }) => {
  return (
    <Row id="host-messenger">
      <Row>
        <CircleImage image={img} active={active} />
        <RegularText style={{ fontWeight: "bold" }}>Random Name</RegularText>
      </Row>
      <div
        className="messenger"
        style={{
          backgroundColor: active ? "green" : "#ffffff2a",
        }}
      ></div>
    </Row>
  );
};

export default MessengerUser;
