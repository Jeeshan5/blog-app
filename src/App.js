import React from "react";
import Home from "./pages/home/Home";
import Post from "./post/Post";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";


function App() {
  return (
    <>
      <Topbar />
      <Home />
      <div className="mainContent">
        {/* <Sidebar /> */}
        <Post />
      </div>
    </>
  );
}

export default App;
