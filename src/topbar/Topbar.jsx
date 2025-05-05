import { useState } from "react";
import "./topbar.css";
import hamburgerIcon from "../assets/Hamburger_icon.svg.png";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>

      <div className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={hamburgerIcon} alt="Menu" className="hamburgerIcon" />
      </div>

      <div className={`topCenter ${menuOpen ? "show" : ""}`}>
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
        </ul>
      </div>

      <div className="topRight">
        <img className="topImg" src="" alt="profile" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}