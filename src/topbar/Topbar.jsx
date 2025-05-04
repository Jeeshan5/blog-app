import { useState } from "react";
import "./topbar.css";
import hamburgerIcon from "../assets/Hamburger_icon.svg.png";


export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook fa-2x"></i>
        <i className="topIcon fa-brands fa-x-twitter fa-2x"></i>
        <i className="topIcon fa-brands fa-pinterest-p fa-2x"></i>
        <i className="topIcon fa-brands fa-instagram fa-2x"></i>
      </div>

      {/* Hamburger Icon */}
      <div className="menuToggle" onClick={handleToggle}>
        <img src={hamburgerIcon} alt="Menu" className="hamburgerIcon" />
      </div>

      <div className="topCenter">
        <ul className={`topList ${menuOpen ? "show" : ""}`}>
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
        </ul>
      </div>

      <div className="topRight">
        <img className="topImg" src="" alt="profile" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass fa-2x"></i>
      </div>
    </div>
  );
}
