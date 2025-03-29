import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

const Typing = () => {
  const {
    originalValue,
    typeStart,
    setTypeStart,
    typingValue,
    setTypingValue,
    setUserTypedValue,
    userTypedValue,
    setAccuracy,
    timer,
    setTimer,
    initialTimer,
    setWpm,
    startTime,
    setStartTime,
  } = useContext(AppContext);
  const inputRef = useRef(null);
  const styledTextRef = useRef(null);
  const intervalRef = useRef(null); // Store interval ID
  const startTimeRef = useRef(null);

  const typingValueRef = useRef("");

  const handleTyping = () => {
    if (!typeStart) {
      startTimer();
      setStartTime(Date.now());
      startTimeRef.current = Date.now(); // Store latest time in ref
      setAccuracy(null);
      setWpm(null);
    }
  };

  const handleChange = (e) => {
    setTypingValue(e.target.value);
    setUserTypedValue(e.target.value);

    // start typing
    handleTyping();
    const inputValue = e.target.value;
    typingValueRef.current = inputValue; // Store latest value in ref
    styledTextRef.current.innerHTML = ""; // Clear previous content
    inputValue.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.color = originalValue[index] == char ? "white" : "red";
      styledTextRef.current.appendChild(span);
    });
  };

  const calculateResult = () => {
    const currentTypingValue = typingValueRef.current; // Get latest value
    const timeTaken = (Date.now() - startTimeRef.current) / 1000 / 60; // Convert ms to minutes
    const wordsTyped = currentTypingValue.split(" ").length;
    setWpm(Math.round(wordsTyped / timeTaken));
    let correctChars = currentTypingValue?.split("").filter((char, index) => {
      return char === originalValue[index];
    }).length;

    setAccuracy(Math.floor((correctChars / originalValue.length) * 100));
  };

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    setTypeStart(true);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          // clear all state

          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setTypeStart(false);
          setTimer(initialTimer);
          setUserTypedValue(typingValue);
          // calculate result
          calculateResult();

          // setTypingValue("");

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-[80%] m-auto ">
      <form className="my-10 w-full h-[300px] m-auto">
        <div className="h-10">
          {typeStart && <h2 className="text-2xl text-[#ddb800]"> {timer}</h2>}
        </div>
        <div className=" relative">
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
    </div>
  );
};

export default Typing;
