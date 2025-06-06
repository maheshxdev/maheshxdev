import React, { useState } from "react";

const CreatePost = () => {

  const [img,setImg]=useState("")
  console.log(img);
  

  const image=(event)=>{
   var fkPath=event.target.value
   var nameI="../assets/"+fkPath.split("\\")[2]
    setImg(nameI)
  }

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title here"
        />
       
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Post Image
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          accept="jpg,jpeg,png"
          onChange={event=>image(event)}
        />
      </div>
      <img src="./assets/mumbai.jpg" alt="" />
      {/* {img === "" ? <></> : <img src="" alt="" height="300px" width="300px"/>} */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          className="form-control"
          id="body"
          placeholder="Enter content of your post here"
        />
       
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={(event)=>{
        event.preventDefault()
      }}>
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
