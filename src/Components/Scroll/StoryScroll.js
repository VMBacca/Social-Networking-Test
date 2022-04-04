import Spacer from "../Spacer";
import RegularText from "../Styled/RegularText";

const StoryScroll = ({
  imgPict,
  img,
  right,
  left,
  height,
  width,
  title,
  text,
}) => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        borderRadius: 15,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <img
        style={{
          zIndex: 1,
          height: height,
          position: "absolute",
          right: right,
          left: left,
          width: width,
        }}
        src={img}
        alt="eventimage"
      />
      <div
        style={{
          zIndex: 3,
          backgroundColor: "rgba(0, 0, 0, .7)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            zIndex: 6,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={imgPict}
            alt="imgPict"
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              border: "2px solid green",
              margin: "0px 0px 0px 5px",
            }}
          />
          <Spacer width={5} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <RegularText
              style={{ margin: 5, fontSize: 18, fontWeight: "bold" }}
            >
              {title}
            </RegularText>
            <RegularText style={{ margin: 5, fontSize: 16 }}>
              {text}
            </RegularText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryScroll;
