import React from "react";
import useWordGame from "./useWordGame";
import "./style.css";

const App = () => {
  const {
    handleChange,
    text,
    isTimeRunning,
    inputRef,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(20);
  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea
        onChange={handleChange}
        name="textarea"
        value={text}
        disabled={!isTimeRunning}
        ref={inputRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        className="startButton"
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
};

export default App;
