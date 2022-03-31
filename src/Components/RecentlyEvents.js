import SquareImage from "./SquareImage";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";

function RecentlyEvents({ title, date, simg }) {
  return (
    <Row>
      <SquareImage squareimg={simg} />
      <div
        style={{
          marginLeft: 10,
          padding: 10,
        }}
      >
        <RegularText style={{ fontSize: 16, fontWeight: "bold" }}>
          {title}
        </RegularText>
        <p
          style={{
            color: "#adadb3",
            fontSize: 14,
          }}
        >
          {date}
        </p>
      </div>
    </Row>
  );
}

export default RecentlyEvents;
