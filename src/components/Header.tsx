import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="m-auto p-5">
      <div className="flex justify-between w-[80%] m-auto">
        <h2 className="font-bold text-2xl text-white">Helium</h2>
        <FaRegUser className="font-bold text-2xl text-white" />
      </div>
    </header>
  );
};

export default Header;
