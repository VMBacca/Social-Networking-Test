import { useState } from "react";
import Spacer from "../Spacer";
import StoryScroll from "../Scroll/StoryScroll";
import Row from "../Styled/Row";
import post from "./PostData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
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
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          width: "100%",
          top: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            backgroundColor: "rgba(0, 0, 0, .7)",
            borderRadius: "25%",
            border: "none",
            margin: "0 -18px",
          }}
          onClick={prevPost}
        >
          <FaChevronLeft
            style={{
              cursor: "pointer",
              fontSize: "30px",
              padding: 10,
              color: "white",
            }}
          />
        </button>
        <button
          style={{
            backgroundColor: "rgba(0, 0, 0, .7)",
            borderRadius: "25%",
            border: "none",
            margin: "0 -18px",
          }}
          onClick={nextPost}
        >
          <FaChevronRight
            style={{
              cursor: "pointer",
              fontSize: "30px",
              padding: 10,
              color: "white",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default PostScroll;
