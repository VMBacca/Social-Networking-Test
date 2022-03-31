import { useEffect, useState } from "react";
import images from "../../Assets/Index";
import Post from "../../Components/Post";
import Spacer from "../../Components/Spacer";
import Story from "../../Components/Story";
import Row from "../../Components/Styled/Row";
import ViniPost from "./ViniPost";

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Row>
        <Story
          title={"Bad luck ninja"}
          text={"Unluky"}
          imgPict={images.stiloso}
          img={images.smokeninja}
          width={"100%"}
          height={"100%"}
        />
        <Spacer width={15} />
        <Story
          title={"The killing joke"}
          text={"34º anniversary"}
          imgPict={images.michelangelo}
          img={images.joker}
          width={"100%"}
          height={"100%"}
        />
        <Spacer width={15} />
        <Story
          title={"Good, Bad and the Fluffy"}
          text={"oh-eh-oh-eh-ooooh"}
          imgPict={images.batman}
          img={images.gbu}
          width={"100%"}
          height={"100%"}
        />
      </Row>
      <Spacer height={10} />
      <ViniPost />
      {posts.map((post) => (
        <Post key={post.id} body={post.body} userId={post.userId} />
      ))}
    </div>
  );
};

export default PostsScreen;
