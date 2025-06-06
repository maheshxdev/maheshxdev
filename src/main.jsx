import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import PostListProvider from "./store/posts-list-store.jsx";

const router = createBrowserRouter([{ path: "/", element: <App /> ,
  children : [
    {path:"/" , element :<PostList/>},
    {path:"/create-post", element:<CreatePost/>}
  ]
}]);
createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
