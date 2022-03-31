import RegularText from "./Styled/RegularText";
import Row from "./Styled/Row";
import images from "../Assets/Index";
import Spacer from "../Components/Spacer";
import RecentlyEvents from "./RecentlyEvents";

const EventHolder = () => {
  return (
    <div
      style={{
        borderRadius: 10,
        backgroundColor: "#1a1c20",
        padding: "10px 20px",
      }}
    >
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RegularText
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Events
        </RegularText>
        <img
          alt="menuImage"
          style={{
            height: 30,
            width: 30,
          }}
          src={images.menu}
        />
      </Row>
      <div
        style={{
          padding: 10,
          overflow: "hidden",
          height: 200,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            opacity: 0.5,
            zIndex: 1,
            height: 200,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          src={images.event}
          alt="eventimage"
        />
        <RegularText
          style={{
            zIndex: 5,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Video game toasting
        </RegularText>

        <RegularText
          style={{
            zIndex: 5,
          }}
        >
          This is a cool event that people go to
        </RegularText>
      </div>
      <Row style={{ justifyContent: "space-between" }}>
        <RegularText>Recently Events</RegularText>
        <RegularText style={{ color: "#1878f0" }}>All</RegularText>
      </Row>
      <Spacer />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
