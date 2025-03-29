import { createContext, useEffect, useMemo, useState } from "react";
import textJSON from "../api.json";
const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [textType, setTextType] = useState("normal");
  const [initialTimer, setInitialTimer] = useState(30);
  const [timer, setTimer] = useState(initialTimer);
  const [originalText, setOriginalText] = useState("");
  const [typeStart, setTypeStart] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(100);
  const [typingValue, setTypingValue] = useState("");
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    let textIndex = Math.floor(Math.random() * textJSON.length);
    let selectedText = textJSON[textIndex];
    setOriginalText(selectedText);
  }, []);

  useEffect(() => {
    setTimer(initialTimer);
  }, [initialTimer]); // Sync when `initialTimer` changes

  const originalValue = originalText?.[textType];

  return (
    <AppContext.Provider
      value={{
        textType,
        setTextType,
        timer,
        setTimer,
        originalValue,
        typeStart,
        setTypeStart,
        accuracy,
        setAccuracy,
        typingValue,
        setTypingValue,
        startTime,
        setStartTime,
        wpm,
        setWpm,
        initialTimer,
        setInitialTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
