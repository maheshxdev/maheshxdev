import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
import Loading from "./Loading";

const PostList = () => {
  const { postList ,fetching} = useContext(PostListData);
  
  return (
    <>
    {fetching && <Loading/>}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 ">
        {!fetching && postList.length === 0 ? (!fetching && <h1 className="mb-2">Not uploaded any post!</h1>) : (
          postList.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </>
  );
};

export default PostList;
