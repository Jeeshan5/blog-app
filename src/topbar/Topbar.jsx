import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./topbar.css";
import icon from "../assets/icon.png";
import hamburgerIcon from "../assets/Hamburger_icon.svg.png";

export default function Topbar({ onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to collapse menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setShowSearch(false);
  };

  return (
    <div className={`top ${scrolled ? "scrolled" : ""}`}>
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
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              Home
            </Link>
          </li>
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="header" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              About
            </Link>
          </li>
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              Contact
            </Link>
          </li>
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="posts" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              Posts
            </Link>
          </li>
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="policy" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              Policies
            </Link>
          </li>
          <li className="topListItem" onClick={handleLinkClick}>
            <Link 
              to="services" 
              smooth={true} 
              duration={500} 
              className="topLink"
              offset={-80}
            >
              Services
            </Link>
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
         <img className="topImg" src={icon} alt="profile" />
        <i
          className="topSearchIcon fa-solid fa-magnifying-glass"
          onClick={() => setShowSearch(!showSearch)}
        ></i>
      </div>
    </div>
  );
}