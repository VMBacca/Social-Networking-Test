import Spacer from "../Spacer";
import RegularText from "../Styled/RegularText";
import "./StoryScroll.css";

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
    <div id="img-host">
      <img
        className="story"
        style={{
          height: height,
          right: right,
          left: left,
          width: width,
        }}
        src={img}
        alt="eventimage"
      />
      <div className="dark-track">
        <div className="img-back">
          <img className="img-pict" src={imgPict} alt="imgPict" />
          <Spacer width={5} />
          <div className="text-box">
            <RegularText className="title">{title}</RegularText>
            <RegularText className="text">{text}</RegularText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryScroll;
