// TextComponent.js
import React from "react";
import styles from "./text.module.scss";

const TextComponent = () => {
  return (
    <div className={styles.textContainer}>
      <h1>Parallax Scrolling</h1>
      <p>This is how does parallax scrolling look like</p>
      <button
        className="button"
        target="_blank"
        onClick={() =>
          (window.location.href =
            "https://github.com/Parv-gugnani/Parallax-Scroll")
        }
      >
        Source code
      </button>
    </div>
  );
};

export default TextComponent;
