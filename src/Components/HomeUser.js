import images from "../Assets/Index";
import CircleImageUser from "./CircleImageUser";
import StyledGreyCard from "./Styled/StyledGreyCard";

function HomeUser() {
  return (
    <StyledGreyCard
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <CircleImageUser image={images.stiloso} />
      <p
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Username
      </p>
    </StyledGreyCard>
  );
}

export default HomeUser;
