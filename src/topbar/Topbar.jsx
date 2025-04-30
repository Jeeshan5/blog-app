import './topbar.css';

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook fa-2x"></i>
        <i className="topIcon fa-brands fa-x-twitter fa-2x"></i>
        <i className="topIcon fa-brands fa-pinterest-p fa-2x"></i>
        <i className="topIcon fa-brands fa-instagram fa-2x"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass fa-2x"></i>
      </div>
    </div>
  );
}
