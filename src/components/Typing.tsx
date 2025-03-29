import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

const Typing = () => {
  const { originalValue, typeStart, setTypeStart } = useContext(AppContext);
  const inputRef = useRef(null);
  const styledTextRef = useRef(null);
  const intervalRef = useRef(null); // Store interval ID
  const [accuracy, setAccuracy] = useState(100);
  const [typingValue, setTypingValue] = useState("");
  const [timer, setTimer] = useState(10);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const handleChange = (e) => {
    if (startTime == null) {
      setStartTime(Date.now());
    }

    setTypingValue(e.target.value);

    const inputValue = e.target.value;

    styledTextRef.current.innerHTML = ""; // Clear previous content

    inputValue.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.color = originalValue[index] == char ? "white" : "red"; // Cycle through colors
      styledTextRef.current.appendChild(span);
    });
  };

  const handleSubmit = () => {
    const timeTaken = (Date.now() - startTime) / 1000 / 60; // Convert ms to minutes
    const wordsTyped = typingValue.split(" ").length;
    setWpm(Math.round(wordsTyped / timeTaken));

    let correctChars = typingValue?.split("").filter((char, index) => {
      return char === originalValue[index];
    }).length;
    setAccuracy(Math.floor((correctChars / originalValue.length) * 100));
  };

  const handleInterval = () => {};

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    setTypeStart(true);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setTypeStart(false);
          setTimer(10);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-[80%] m-auto ">
      <div className="mt-10">
        <h2 className="text-2xl text-[#ddb800]"> {timer}</h2>
      </div>

      <form className="my-10 w-full h-[300px] m-auto">
        <div className="relative">
          <p
            ref={inputRef}
            className="block p-2.5 w-full text-xl text-[#64666a] rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-0 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all border-0 outline-none  absolute"
          >
            {originalValue}
          </p>

          <p
            ref={styledTextRef}
            className="block p-2.5 w-full text-xl text-[#64666a] rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-0 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all border-0 outline-none  absolute"
          ></p>

          <textarea
            rows="10"
            value={typingValue}
            onChange={handleChange}
            className="block p-2.5 w-full text-xl  text-transparent rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-0 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all border-0 outline-none absolute top-0"
          />
        </div>
      </form>
      <p>{accuracy}</p>
      <p>{wpm}</p>
      <button onClick={handleSubmit}>SUbmit</button>
    </div>
  );
};

export default Typing;
