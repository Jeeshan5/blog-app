import React from "react";
import Home from "./pages/home/Home";
import Post from "./post/Post";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import Contact from "./contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Topbar />
      <Home />
      <div className="mainContent">
        {/* <Sidebar /> */}
        <Post />
        <Contact />
      </div>
    </>
  );
}

export default App;
