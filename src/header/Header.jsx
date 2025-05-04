import "./header.css";
import heroBackground from "../assets/hero-background.jpg";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImg" src={heroBackground} alt="Hero" />
      <div className="headerOverlay" />

      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
    </div>
  );
}
