import SquareImage from "./SquareImage";
import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import "./RecentlyEvents.css";
import Spacer from "./Spacer";

function RecentlyEvents({ title, date, simg }) {
  return (
    <Row id="recently-event-host">
      <SquareImage squareimg={simg} />
      <Spacer width={15} />
      <div className="square-img">
        <p className="date">{date}</p>
        <RegularText className="event-title">{title}</RegularText>
      </div>
    </Row>
  );
}

export default RecentlyEvents;
