import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ShowResult = () => {
  const { accuracy, wpm } = useContext(AppContext);
  return (
    <div className="w-[80%] m-auto flex justify-center mt-10">
      <div className="text-center mr-[20rem]">
        <h1 className="text-3xl text-[#ddb800] font-semibold">Wpm</h1>
        <p className="text-2xl text-slate-300">{wpm}</p>
      </div>

      <div className="text-center">
        <h1 className="text-3xl text-[#ddb800] font-semibold">Accuracy</h1>
        <p className="text-2xl text-slate-300">{accuracy}</p>
      </div>
    </div>
  );
};

export default ShowResult;
