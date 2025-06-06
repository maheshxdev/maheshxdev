import React, { useContext, useRef, useState } from "react";
import { PostList } from "../store/posts-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate=useNavigate()

  const title = useRef("");
  const content = useRef("");
  const tags = useRef("");

  const [postUpload, setPostUpload] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let t = title.current.value;
    let c = content.current.value;
    let ta = tags.current.value.split(",");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: t,
        body: c,
        reactions: {likes:10, dislikes:20},
        tags: ta,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost({post})
        navigate("/")
      });
       
       title.current.value = "";
       content.current.value = "";
       tags.current.value = "";
       
       // addPost(t, c, ta);
       
       setPostUpload(true);
  };

  const handleClose = () => {
    setPostUpload(false);
  };

  return (
    <>
      <form
        className="create-post"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={title}
            value={title.current.value}
            placeholder="Enter title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            ref={content}
            value={content.current.value}
            placeholder="Enter content of your post here"
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Hashtags
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            ref={tags}
            value={tags.current.value}
            placeholder="Enter hashtags using coma"
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
      {postUpload === false ? (
        ""
      ) : (
        <div
          class="alert alert-success alert-dismissible fade show w-50 float-end d-block"
          role="alert"
        >
          <strong>POST UPLOADED SUCCESSFULL!</strong>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
};

export default CreatePost;
