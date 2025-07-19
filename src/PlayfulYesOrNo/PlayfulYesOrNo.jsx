import React, { useState, useEffect } from 'react';
import "./PlayfulYesOrNo.css";

const PlayfulYesNo = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '70.2%', left: '70%' });
  const [clickCounts, setClickCounts] = useState({ yes: 0, no: 0 });
  const [terminalText, setTerminalText] = useState("Undral@Undral-mac ~ % ");

  useEffect(() => {
    if (showSecondScreen) {
      let index = 0;
      const terminalMessage = " We are going to witness one of the greatest journey bucketlist, and hit ENTER (´｡• ᵕ •｡`)";
      const typingInterval = setInterval(() => {
        setTerminalText((prev) => prev + (terminalMessage[index] || ""));
        index++;
        if (index > terminalMessage.length) {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [showSecondScreen]);

  const handleYesClick = () => {
    setClickCounts((prev) => ({ ...prev, yes: prev.yes + 1 }));
    setShowSecondScreen(true);
  };

  const handleNoHover = () => {
    setClickCounts((prev) => ({ ...prev, no: prev.no + 1 }));
  
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
  
    // Base position near Yes button (e.g. center-ish)
    const baseLeftPx = containerWidth / 2 + 100;  // Yes button is center, put No 100px to right initially
    const baseTopPx = containerHeight / 2;
  
    // Random offset: large range so it jumps far away
    const offsetX = (Math.random() * 700) - 350; // -350px to +350px horizontally
    const offsetY = (Math.random() * 400) - 200; // -200px to +200px vertically
  
    let newLeftPx = baseLeftPx + offsetX;
    let newTopPx = baseTopPx + offsetY;
  
    // Clamp inside viewport boundaries so it doesn't go out of screen
    newLeftPx = Math.min(Math.max(newLeftPx, 0), containerWidth - 100);
    newTopPx = Math.min(Math.max(newTopPx, 0), containerHeight - 40);
  
    // Convert to percentage for CSS positioning
    const leftPercent = (newLeftPx / containerWidth) * 100 + '%';
    const topPercent = (newTopPx / containerHeight) * 100 + '%';
  
    setNoButtonPosition({ top: topPercent, left: leftPercent });
  };

  if (showSecondScreen) {
    return (
      <div className="app terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="button red"></span>
            <span className="button yellow"></span>
            <span className="button green"></span>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-text">{terminalText}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="playful-container">
      <div className="content">
        <div className="message">You ready? </div>
        <div className="buttons">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          <button
            className="no-button"
            style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayfulYesNo;
