import React, { useState } from "react";
import Topbar from "./topbar/Topbar";

import About from "./header/Header";
import Contact from "./contact/Contact";
import Posts  from "./post/Post";
import Services from "./Services/Services";
import ServicePolicy from "./ServicePolicy/ServicePolicy";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      <Topbar onSearchChange={setSearchTerm} />
      
    
      
      {/* About Section */}
      <section id="home">
        <About />
      </section>
      
      {/* Posts Section */}
      <section id="posts">
        <Posts />
      </section>

        {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Policy Section */}
      <section id="policy">
        <ServicePolicy />
      </section>
      
    
    </div>
  );
}

export default App;