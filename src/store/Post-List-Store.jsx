import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (Card) => Card.id !== action.payload.CardID
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};

  const deletePost = (CardID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        CardID,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Mumbai Trip 2025",
    body: "Had the most fun trip in Mumbai. Can't wait to share with y'all !",
    reactions: 2,
    userID: "user-9",
    tags: ["#vacation", "#Mumbai", "#SummerVibes"],
  },
  {
    id: 2,
    title: "Day in the Life of a CS Student",
    body: "Come along as I take you through my day as a CS student trying to survive this semester.",
    reactions: 10,
    userID: "user-10",
    tags: ["#Uni-Life", "#Vlog", "#TechContent"],
  },
];

export default PostListProvider;
