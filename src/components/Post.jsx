import React, { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/posts-list-store";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const nav = useNavigate();
  // console.log("in post comp"+post);
  console.log("all post show");
  console.log("delete post");

  const [reactions, setReactions] = useState(post.reactions.likes);

  const { deletePost } = useContext(PostList);

  const reactionHandle = () => {
    setReactions(reactions + 1);
  };
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={()=>deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags?.map((tag) => (
          <span key={post.id} className="badge text-bg-primary mx-1">
            {tag}
          </span>
        ))}
        <br />
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={reactionHandle}
        >
          Likes <span className="badge text-bg-secondary">{reactions}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
