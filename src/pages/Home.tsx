import { useContext } from "react";
import Tab from "../components/Tab";
import Typing from "../components/Typing";
import { AppContext } from "../context/AppContext";
import ShowResult from "../components/ShowResult";

const Home = () => {
  const { typeStart, wpm } = useContext(AppContext);

  return (
    <div>
      {wpm == null ? (
        <>
          {!typeStart && <Tab />}
          <Typing />
        </>
      ) : (
        <ShowResult />
      )}
    </div>
  );
};

export default Home;
