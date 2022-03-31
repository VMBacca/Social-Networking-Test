import images from "../Assets/Index";
import MessengerUser from "./MessengerUser";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import StyledGreyCard from "./Styled/StyledGreyCard";

function MessengerHolder() {
  return (
    <StyledGreyCard>
      <Row style={{ justifyContent: "space-between" }}>
        <RegularText>Messenger</RegularText>
        <RegularText style={{ color: "#1878f0" }}>All</RegularText>
      </Row>
      <MessengerUser img={images.michelangelo} active />
      <MessengerUser img={images.gollum} />
      <MessengerUser img={images.batman} active />
      <MessengerUser img={images.commandos} />
    </StyledGreyCard>
  );
}

export default MessengerHolder;
