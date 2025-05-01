import React from "react";
import "./post.css";
import sampleImage from "../assets/robot.jpg"; // Replace with your image

export default function Post() {
  const posts = [
    {
      title: "React Basics",
      desc: "Understand the fundamentals of components, JSX, and props.",
      img: sampleImage,
    },
    {
      title: "Hooks in Depth",
      desc: "Explore useState and useEffect with real-world examples.",
      img: sampleImage,
    },
    {
      title: "CSS Tricks",
      desc: "Style your React apps like a pro with Flexbox and Grid.",
      img: sampleImage,
    },
  ];

  return (
    <div className="rightCardsContainer">
      {posts.map((post, index) => (
        <div className="floatingCard" key={index}>
          <div className="cardImageContainer">
            <img src={post.img} alt={post.title} className="cardImage" />
            <div className="cardOverlay">
              <a href="/" className="cardLink">
                View More
              </a>
            </div>
          </div>
          <div className="cardContent">
            <h4>{post.title}</h4>
            <p>{post.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

