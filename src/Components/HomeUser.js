import images from "../Assets/Index";
import CircleImageUser from "./CircleImageUser";
import StyledGreyCard from "./Styled/StyledGreyCard";
import "./HomeUser.css";

function HomeUser() {
  return (
    <StyledGreyCard id="profile-host">
      <CircleImageUser image={images.stiloso} />
      <p className="username">Username</p>
    </StyledGreyCard>
  );
}

export default HomeUser;
