import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
// import { FaBeer } from "react-icons/fa";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Sidebar from '../components/Sidebar.jsx';
import CreatePost from '../components/CreatePost.jsx';
import PostList from '../components/PostList.jsx';
import PostListProvider from '../store/posts-list-store.jsx';
import { Outlet } from 'react-router-dom';
// import {Outlet} from "react-router-dom";

function App({setSearchPost}) {

  const [selectedTab,setSelectedTab]=useState("Home")
  

  return (
    <PostListProvider>
    <div className='d-flex'>
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     {/* <Sidebar/> */}
     <div className='w-100'>
     <Header/>
     <Outlet />
     <Footer/>
     </div>
    </div>
    </PostListProvider>
  )
}

export default App
