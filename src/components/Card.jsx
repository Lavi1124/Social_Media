import { RiDeleteBin5Fill } from "react-icons/ri";

const Card = ({ Card }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {Card.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <RiDeleteBin5Fill />
          </span>
        </h5>
        <p className="card-text">{Card.body}</p>
        {Card.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
