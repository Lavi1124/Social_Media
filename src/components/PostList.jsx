import Card from "./Card";
import { useContext } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Card key={post.id} Card={post} />
      ))}
    </>
  );
};

export default PostList;
