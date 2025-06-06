import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Sidebar = ({selectedTab,setSelectedTab}) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "200px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {/* <li className="nav-item" onClick={()=>setSelectedTab("Home")}> */}
        <li className="nav-item " onClick={()=>setSelectedTab("Home")}>
          {/* <a href="#" className={`nav-link text-white ${selectedTab ==="Home" && "active"}`} aria-current="page" > */}
          <Link to="/" className={`nav-link text-white ${selectedTab == "Home" && "active"}`} >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
         {/* <li className="nav-item" onClick={()=>setSelectedTab("CreatePost")}> */}
        <li className="nav-item " onClick={()=>setSelectedTab("CreatePost")}>
            {/* <a href="#" className={`nav-link text-white ${selectedTab ==="CreatePost" && "active"}`} > */}
           <Link to="/create-post" className={`nav-link text-white ${selectedTab == "CreatePost" && "active"}`} >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" to="#">
              New project...
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
