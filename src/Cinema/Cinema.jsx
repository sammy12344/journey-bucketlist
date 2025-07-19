import React, { useEffect, useRef, useState } from "react";
import "./Cinema.scss";

const Chair = () => (
  <div className="chair flex">
    <div className="chair-b flex">
      <div className="chair-b__front face" />
      <div className="chair-b__back face" />
      <div className="chair-b__right face" />
      <div className="chair-b__left face" />
      <div className="chair-b__top face" />
      <div className="chair-b__bottom face" />
    </div>
    <div className="chair-t flex">
      <div className="chair-t__front face" />
      <div className="chair-t__back face" />
      <div className="chair-t__right face" />
      <div className="chair-t__left face" />
      <div className="chair-t__top face" />
      <div className="chair-t__bottom face" />
    </div>
    <div className="chair-bs flex">
      <div className="chair-ba flex">
        <div className="chair-ba__front face" />
        <div className="chair-ba__back face" />
        <div className="chair-ba__right face" />
        <div className="chair-ba__left face" />
        <div className="chair-ba__top face" />
        <div className="chair-ba__bottom face" />
      </div>
      <div className="chair-ba flex">
        <div className="chair-ba__front face" />
        <div className="chair-ba__back face" />
        <div className="chair-ba__right face" />
        <div className="chair-ba__left face" />
        <div className="chair-ba__top face" />
        <div className="chair-ba__bottom face" />
      </div>
    </div>
  </div>
);

const ChairRow = ({ id }) => (
  <div className="chairs" id={id}>
    {[...Array(5)].map((_, i) => (
      <Chair key={i} />
    ))}
  </div>
);

const Step = ({ type }) => (
  <div className={`step-${type} flex`}>
    {["front", "back", "right", "left", "top", "bottom"].map((face) => (
      <div key={face} className={`step-${type}__${face} face`} />
    ))}
  </div>
);

const Lamp = () => (
  <div className="lamp flex">
    <div className="lamp-t flex">
      {["front", "back", "right", "left", "top", "bottom"].map((face) => (
        <div key={`t-${face}`} className={`lamp-t__${face} face`} />
      ))}
    </div>
    <div className="lamp-b flex">
      {["front", "back", "right", "left", "top", "bottom"].map((face) => (
        <div key={`b-${face}`} className={`lamp-b__${face} face`} />
      ))}
    </div>
  </div>
);

const CinemaScene = () => {
  const cineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const fullText =
    "We have seen several films together,\nand we will see many more in the future. <3";

  // Slow handwriting effect on play
  useEffect(() => {
    if (!isPlaying) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedText(fullText.slice(0, index));
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // 100 ms per character = slower and smooth

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (cineRef.current) cineRef.current.classList.add("is-full");
    document.body.classList.add("is-black");
    document.documentElement.style.setProperty("--yl", "rgba(239, 240, 218, .85)");
    document.documentElement.style.setProperty("--yd", "rgba(213, 214, 194, .85)");
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (cineRef.current) cineRef.current.classList.remove("is-full");
    document.body.classList.remove("is-black");
    document.documentElement.style.setProperty("--yl", "#FAFDBA");
    document.documentElement.style.setProperty("--yd", "#d5d799");
  };

  return (
    <div className="main flex" id="main">
      <div className="cine" id="cine" ref={cineRef}>
        <div className="floor flex">
          {["front", "back", "right", "left", "top", "bottom"].map((face) => (
            <div key={face} className={`floor__${face} face`} />
          ))}
          {[1, 2, 3, 4, 5].map((id) => (
            <ChairRow key={id} id={id.toString()} />
          ))}
        </div>

        <div className="floor-a flex">
          {["front", "back", "right", "left", "top", "bottom"].map((face) => (
            <div key={face} className={`floor-a__${face} face`} />
          ))}
        </div>

        <div className="steps flex">
          {["a", "b", "c", "d"].map((t) => (
            <Step key={t} type={t} />
          ))}
        </div>

        <div className="steps steps-b flex">
          {["a", "b", "c"].map((t) => (
            <Step key={t} type={t} />
          ))}
        </div>

        <div className="wall-l flex">
          {["front", "back", "right", "left", "top", "bottom"].map((face) => (
            <div key={face} className={`wall-l__${face} face`} />
          ))}
        </div>

        <div className="wall-r flex">
          <div className="wall-r__front face flex">
            <div className="screen flex">
              {/* Handwritten text with line breaks */}
              <pre className="message handwritten-text" style={{ whiteSpace: "pre-wrap" }}>
                {displayedText}
              </pre>
            </div>
          </div>
          {["back", "right", "left", "top", "bottom"].map((face) => (
            <div key={face} className={`wall-r__${face} face`} />
          ))}
        </div>

        <div className="lamps">{[1, 2, 3].map((i) => <Lamp key={i} />)}</div>
      </div>

      <div className="buttons">
        <button
          className="button"
          id="play"
          type="button"
          disabled={isPlaying}
          aria-label="Start movie"
          onClick={handlePlay}
        >
          Start movie
          <img
            className="button__icon"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPjwvZz48Zz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtMTYsMTBsMCwyOGwyMiwtMTRsLTIyLC0xNHoiLz48L2c+PC9zdmc+"
            alt="Play"
          />
        </button>
        <button
          className="button"
          id="stop"
          type="button"
          disabled={!isPlaying}
          aria-label="Stop movie"
          onClick={handleStop}
        >
          Stop movie
          <img
            className="button__icon"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPjwvZz48Zz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtMTIsMTJsMjQsMGwwLDI0bC0yNCwwbDAsLTI0eiIvPjwvZz48L3N2Zz4="
            alt="Stop"
          />
        </button>
      </div>
    </div>
  );
};

export default CinemaScene;
