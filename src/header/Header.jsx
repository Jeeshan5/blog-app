import { useState, useEffect, useMemo } from "react";
import "./header.css";
import heroBackground from "../assets/hero-background.jpg";

export default function Header() {
  const [text, setText] = useState(""); // State to store typed text
  const [index, setIndex] = useState(0); // Index for the word we're typing
  
  // Memoize the words array so it doesn't change between renders
  const words = useMemo(() => 
    ["Explore Ideas", "Write Stories", "Share Knowledge", "Inspire Others"], 
    []
  );
  
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delaySpeed = 1000;

  useEffect(() => {
    let typeInterval;
    let deleteInterval;
    let currentWord = words[index];
    let typedText = "";

    const type = () => {
      if (typedText.length < currentWord.length) {
        typedText += currentWord[typedText.length];
        setText(typedText);
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          // Start deleting after typing is complete
          deleteWord();
        }, delaySpeed);
      }
    };

    const deleteWord = () => {
      let deleteIndex = currentWord.length;
      deleteInterval = setInterval(() => {
        if (deleteIndex > 0) {
          typedText = typedText.slice(0, deleteIndex - 1);
          setText(typedText);
          deleteIndex -= 1;
        } else {
          clearInterval(deleteInterval);
          setIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
        }
      }, deleteSpeed);
    };

    // Start typing the current word immediately
    typeInterval = setInterval(type, typeSpeed);

    return () => {
      clearInterval(typeInterval);
      clearInterval(deleteInterval);
    };
  }, [index, words]); // Now includes words in dependencies

  return (
    <div className="header">
      <img className="headerImg" src={heroBackground} alt="Hero" />
      <div className="headerOverlay" />

      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
        <div className="headerTyping">
          <span>{text}</span>
        </div>
        
        {/* Fixed text below the auto-typing text */}
        <p className="headerSubtitle">
          Your ultimate platform for creativity and expression.
          Join our community of writers and thinkers today.
          Your ultimate platform for creativity and expression.
          Join our community of writers and thinkers today.
        </p>
      </div>
    </div>
  );
}