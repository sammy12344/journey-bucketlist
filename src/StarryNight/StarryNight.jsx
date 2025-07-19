import React, { useEffect } from "react";
import "./StarryNight.css";

const StarryNight = () => {
  useEffect(() => {
    const starCount = 45;
    const shootingStarInterval = 8000;

    const starsContainer = document.getElementById("stars");

    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }

    function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(shootingStar);
      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.parentNode.removeChild(shootingStar);
        }
      }, 3000);
    }

    function generateStars() {
      for (let i = 0; i < starCount; i++) {
        createStar();
      }
    }

    generateStars();
    setTimeout(createShootingStar, Math.random() * shootingStarInterval);

    function randomizeShootingStarInterval() {
      const interval = Math.random() * shootingStarInterval;
      setTimeout(() => {
        createShootingStar();
        randomizeShootingStarInterval();
      }, interval);
    }

    randomizeShootingStarInterval();

    // Optional cleanup if component unmounts
    return () => {
      // Clear stars
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
      // Remove any existing shooting stars on body
      document.querySelectorAll(".shooting-star").forEach(el => el.remove());
    };
  }, []);

  return <div id="stars"></div>;
};

export default StarryNight;
