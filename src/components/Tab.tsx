import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Tab = () => {
  const { textType, setTextType, timer, setTimer } = useContext(AppContext);

  return (
    <nav className="bg-[#2c2e32] w-[80%] text-white flex justify-around m-auto rounded-sm">
      <ul className="flex ">
        <li
          onClick={() => setTextType("punctuation")}
          className={`mr-5 text-sm cursor-pointer ${
            textType == "punctuation" ? "text-[#ddb800]" : ""
          }`}
        >
          @punctuation
        </li>
        <li
          onClick={() => setTextType("number")}
          className={`mr-5 text-sm cursor-pointer ${
            textType == "number" ? "text-[#ddb800]" : ""
          }`}
        >
          #numbers
        </li>
      </ul>
      <ul className="flex">
        <li
          onClick={() => setTextType("quote")}
          className={`mr-5 text-sm cursor-pointer ${
            textType == "quote" ? "text-[#ddb800]" : ""
          }`}
        >
          A quote
        </li>
      </ul>
      <ul className="flex">
        <li
          className={`mr-5 text-sm cursor-pointer ${
            timer == 15 ? "text-[#ddb800]" : ""
          }`}
          onClick={() => setTimer(15)}
        >
          15
        </li>
        <li
          onClick={() => setTimer(30)}
          className={`mr-5 text-sm cursor-pointer ${
            timer == 30 ? "text-[#ddb800]" : ""
          }`}
        >
          30
        </li>
      </ul>
    </nav>
  );
};

export default Tab;
