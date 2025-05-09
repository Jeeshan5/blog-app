import { useState } from "react";
import { Link } from "react-router-dom"; // <-- Import Link from react-router-dom
import "./topbar.css";
import hamburgerIcon from "../assets/Hamburger_icon.svg.png";

export default function Topbar({ onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value); // send input to App
  };

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
          <li className="topListItem">
            <Link to="/" className="topLink">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/Contact" className="topLink">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/Contact" className="topLink">Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/ServicePolicy" className="topLink">Policies</Link>
          </li>
          <li className="topListItem">
            <Link to="/\Services" className="topLink">Services</Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        {showSearch && (
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="searchInput"
          />
        )}
        <img className="topImg" src="" alt="profile" />
        <i
          className="topSearchIcon fa-solid fa-magnifying-glass"
          onClick={() => setShowSearch(!showSearch)}
        ></i>
      </div>
    </div>
  );
}
