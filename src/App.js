import React, { useState } from "react";
import Home from "./pages/home/Home";
import Post from "./post/Post";
import Topbar from "./topbar/Topbar";
import Contact from "./contact/Contact";
import Services from "./Services/Services";
import ServicePolicy from "./ServicePolicy/ServicePolicy"; // <-- Import the component
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
        <Services />
        <Contact />
        <ServicePolicy /> {/* <-- Add the ServicePolicy component here */}
      </div>
    </>
  );
}

export default App;
