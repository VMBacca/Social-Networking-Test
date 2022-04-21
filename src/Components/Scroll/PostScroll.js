import { useState } from "react";
import Spacer from "../Spacer";
import StoryScroll from "../Scroll/StoryScroll";
import Row from "../Styled/Row";
import post from "./PostData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PostScroll.css";

function PostScroll() {
  const [index, setIndex] = useState(0);
  const { title, text, imgPict, img, width, height } = post[index];

  const checkNumber = (number) => {
    if (number > post.length - 1) {
      return 0;
    }
    if (number < 0) {
      return post.length - 1;
    }
    return number;
  };

  const nextPost = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPost = () => {
    setIndex((index) => {
      let prevIndex = index - 1;
      return checkNumber(prevIndex);
    });
  };

  return (
    <div className="story">
      <Row>
        <StoryScroll
          title={title}
          text={text}
          imgPict={imgPict}
          img={img}
          width={width}
          height={height}
        />

        <Spacer height={10} />
      </Row>
      <div className="buttons-position">
        <button className="button" onClick={prevPost}>
          <FaChevronLeft className="icon" />
        </button>
        <button className="button" onClick={nextPost}>
          <FaChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
}

export default PostScroll;
