import React, { useState } from "react";
import Home from "./pages/home/Home";
import Post from "./post/Post";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import Contact from "./contact/Contact";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Topbar onSearchChange={setSearchTerm} />
      <Home />
      <div className="mainContent">
        {/* <Sidebar /> */}
        <Post searchTerm={searchTerm} />
        <Contact />
      </div>
    </>
  );
}

export default App;
