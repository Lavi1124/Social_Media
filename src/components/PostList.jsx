import Card from "./Card";
import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListData);
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
