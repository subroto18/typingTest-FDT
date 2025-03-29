import { createContext, useEffect, useMemo, useState } from "react";
import textJSON from "../api.json";
const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [textType, setTextType] = useState("normal");
  const [timer, setTimer] = useState(30);
  const [originalText, setOriginalText] = useState("");
  const [typeStart, setTypeStart] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [typingValue, setTypingValue] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    let textIndex = Math.floor(Math.random() * textJSON.length);
    let selectedText = textJSON[textIndex];
    setOriginalText(selectedText);
  }, []);

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
        wpm,
        setWpm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
