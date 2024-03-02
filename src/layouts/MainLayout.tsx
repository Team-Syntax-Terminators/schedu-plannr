import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
