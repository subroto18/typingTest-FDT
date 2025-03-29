import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#323438] to-[#323438]">
      <Header />
      <Outlet />;
    </div>
  );
};

export default MainLayout;
