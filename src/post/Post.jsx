import React, { useState } from "react";
import "./post.css";
import sampleImage from "../assets/robot.jpg";

export default function Post() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: "React Basics",
      desc: "Understand the fundamentals of components, JSX, and props.",
      body: "React Basics is an introductory topic covering how to build components, use JSX, and pass data using props. This post will help you get started building dynamic web interfaces.",
      img: sampleImage,
    },
    {
      title: "Hooks in Depth",
      desc: "Explore useState and useEffect with real-world examples.",
      body: "Hooks allow you to use state and lifecycle methods in functional components. This post covers how to manage state, run side effects, and handle logic reuse.",
      img: sampleImage,
    },
    {
      title: "CSS Tricks",
      desc: "Style your React apps like a pro with Flexbox and Grid.",
      body: "Master layout techniques using Flexbox and Grid. This guide walks through responsive design, common pitfalls, and performance-friendly styles.",
      img: sampleImage,
    },
    {
      title: "Advanced Topics",
      desc: "Dive into context, reducers, and performance optimization.",
      body: "Once you're comfortable with the basics, dive deeper into Context API, useReducer for state management, and techniques for optimizing component rendering.",
      img: sampleImage,
    },
  ];

  const handleViewMore = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="postOverlayContainer">
      <div className="rightCardsContainer">
        {posts.map((post, index) => (
          <div className="floatingCard" key={index}>
            <div className="cardImageContainer">
              <img src={post.img} alt={post.title} className="cardImage" />
            </div>
            <div className="cardContent">
              <h4>{post.title}</h4>
              <p>{post.desc}</p>
              <button className="viewMoreBtn" onClick={() => handleViewMore(post)}>View More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPost.title}</h2>
            <img src={selectedPost.img} alt={selectedPost.title} className="modalImage" />
            <p>{selectedPost.body}</p>
            <button onClick={closeModal} className="closeModalBtn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
