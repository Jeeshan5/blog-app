import React, { useState } from "react";
import "./post.css";
import sampleImage from "../assets/robot.jpg";

export default function Post({ searchTerm }) {
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

  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="postOverlayContainer">
      <div className="rightCardsContainer">
        {posts.map((post, index) => {
          const matches =
            searchTerm &&
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.body.toLowerCase().includes(searchTerm.toLowerCase()));

          return (
            <div
              className={`floatingCard ${matches ? "glow" : ""}`}
              key={index}
            >
              <div className="cardImageContainer">
                <img src={post.img} alt={post.title} className="cardImage" />
              </div>
              <div className="cardContent">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(post.title),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(post.desc),
                  }}
                />
                <button
                  className="viewMoreBtn"
                  onClick={() => setSelectedPost(post)}
                >
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedPost && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPost.title}</h2>
            <img
              src={selectedPost.img}
              alt={selectedPost.title}
              className="modalImage"
            />
            <p>{selectedPost.body}</p>
            <button onClick={closeModal} className="closeModalBtn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
