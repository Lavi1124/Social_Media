import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostList } from "../store/Post-List-Store";

const Card = ({ Card }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {Card.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(Card.id)}
          >
            <RiDeleteBin5Fill />
          </span>
        </h5>
        <div>
          <p className="card-text">{Card.body}</p>
        </div>
        {Card.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted on by {Card.reactions} people!
        </div>
      </div>
    </div>
  );
};

export default Card;
