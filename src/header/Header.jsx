import "./header.css";
import heroBackground from "../assets/hero-background.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src={heroBackground}
        alt="Hero"
      />
    </div>
  );
}
