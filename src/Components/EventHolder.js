import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import images from "../Assets/Index";
import Spacer from "../Components/Spacer";
import RecentlyEvents from "./RecentlyEvents";
import "./EventHolder.css";

const EventHolder = () => {
  return (
    <div id="host">
      <Row className="first-row">
        <RegularText className="events-title">Events</RegularText>
        <img alt="menuImage" className="menu-img" src={images.menu} />
      </Row>
      <div className="img-host">
        <img className="img-event" src={images.event} alt="eventimage" />
        <RegularText className="event-img-title">
          Video game toasting
        </RegularText>

        <RegularText className="event-img-text">
          This is a cool event that people go to
        </RegularText>
      </div>
      <Row style={{ justifyContent: "space-between" }}>
        <RegularText>Recently Events</RegularText>
        <RegularText style={{ color: "#1878f0" }}>All</RegularText>
      </Row>
      <Spacer />
      <div>
        <RecentlyEvents
          simg={images.oktoberfest}
          title="Sober Oktoberfest"
          date="10 des 2022"
        />
        <RecentlyEvents
          simg={images.polentaço}
          title="Polentaço"
          date="05 des 2022"
        />
        <RecentlyEvents
          simg={images.amish}
          title="Amish Rock Festival"
          date="02 des 2022"
        />
        <RecentlyEvents
          simg={images.golimar}
          title="Golimar Day"
          date="01 des 2022"
        />
      </div>
    </div>
  );
};

export default EventHolder;
