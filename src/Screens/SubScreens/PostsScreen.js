import { useEffect, useState } from "react";
import Post from "../../Components/Post";
import PostScroll from "../../Components/Scroll/PostScroll";
import Spacer from "../../Components/Spacer";
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
      <div>
        <Spacer height={10} />
        <PostScroll />
        <Spacer height={10} />
      </div>
      <ViniPost />
      {posts.map((post) => (
        <Post key={post.id} body={post.body} userId={post.userId} />
      ))}
    </div>
  );
};

export default PostsScreen;
