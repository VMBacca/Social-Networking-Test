import SquareImage from "./SquareImage";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import "./RecentlyEvents.css";

function RecentlyEvents({ title, date, simg }) {
  return (
    <Row id="recently-event-host">
      <p className="date">{date}</p>
      <SquareImage squareimg={simg} />
      <div className="square-img">
        <RegularText className="event-title">{title}</RegularText>
      </div>
    </Row>
  );
}

export default RecentlyEvents;
