import { createContext, useEffect, useReducer, useState } from "react";
import i1 from "../assets/mumbai.jpg";
import i2 from "../assets/graduate.jpg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const PostList = createContext({
  postList: [],
  fetching:false,
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPost = currentPostList;
  console.log(newPost);
  if (action.type === "DELETE_POST") {
    newPost = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload.post, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPost = action.payload.posts;
  }
  // console.log(newPost);
  
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const nav=useNavigate("/")

  const addPost = useCallback((post) => {
    // console.log(post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  });

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type:"ADD_INITIAL_POSTS",
      payload:{posts}
    })
    
    
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };


  const [fetching,setFetching]=useState(false)
  useEffect(()=>{
    const controller = new AbortController()
    const signal=controller.signal;
    setFetching(true)
       fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then(data => {
        addInitialPosts(data.posts)
        setFetching(false)
      });

      return () =>{
        console.log("cleaning up useeffect");
        controller.abort()  
      }
  },[])

  return (
    <PostList.Provider value={{ postList, addPost, deletePost ,fetching}}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
