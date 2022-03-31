import CircleImage from "./CircleImage";
import Row from "./Styled/Row";
import RegularText from "./Styled/RegularText";

const MessengerUser = ({ img, active = false }) => {
  return (
    <Row
      style={{
        margin: "10px 0",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Row>
        <CircleImage image={img} active={active} />
        <RegularText style={{ fontWeight: "bold" }}>Random Name</RegularText>
      </Row>
      <div
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: active ? "green" : "#ffffff2a",
        }}
      ></div>
    </Row>
  );
};

export default MessengerUser;
