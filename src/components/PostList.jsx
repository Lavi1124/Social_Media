import Card from "./Card";
import { useContext, useState } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }

  return (
    <>
      {PostList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Card key={post.id} Card={post} />
      ))}
    </>
  );
};

export default PostList;
