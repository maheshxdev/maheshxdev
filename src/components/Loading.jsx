import React from "react";

const Loading = () => {
  return (
    <div class="text-center mt-5">
      <div class="spinner-border" role="status" style={{width:"5rem",height:"5rem"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
