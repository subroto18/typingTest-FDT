import { createContext, useEffect, useMemo, useState } from "react";
import textJSON from "../api.json";
const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [textType, setTextType] = useState("normal");
  const [initialTimer, setInitialTimer] = useState(15);
  const [timer, setTimer] = useState(initialTimer);
  const [originalText, setOriginalText] = useState("");
  const [typeStart, setTypeStart] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [typingValue, setTypingValue] = useState("");
  const [userTypedValue, setUserTypedValue] = useState(""); // store user typed

  const [wpm, setWpm] = useState(null);

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
        userTypedValue,
        setUserTypedValue,
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
