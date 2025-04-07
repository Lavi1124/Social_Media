import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && PostList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Card key={post.id} Card={post} />)}
    </>
  );
};

export default PostList;
