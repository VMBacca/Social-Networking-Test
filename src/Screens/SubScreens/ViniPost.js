import Spacer from "../../Components/Spacer";
import RegularText from "../../Components/Styled/RegularText";
import Row from "../../Components/Styled/Row";
import images from "../../Assets/Index";
import CircleImage from "../../Components/CircleImage";

function ViniPost() {
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
        <CircleImage image={images.bat} />
        <div>
          <RegularText
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Vini
          </RegularText>
          <RegularText style={{ fontSize: 12 }}>18 minutes ago...</RegularText>
          <Spacer height={10} />
          <RegularText>
            This is the Vini Post {<br />} quia et suscipit suscipit recusandae
            consequuntur expedita et cum reprehenderit molestiae ut ut quas
            totam nostrum rerum est autem sunt rem eveniet architecto
          </RegularText>
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
      <Spacer height={10} />
      <img
        alt="batmanMetal"
        src={images.batmetal}
        style={{
          marginBottom: 20,
          height: 333,
          width: "100%",
        }}
      />
    </div>
  );
}
export default ViniPost;
