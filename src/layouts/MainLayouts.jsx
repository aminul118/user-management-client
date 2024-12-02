import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto min-h-[calc(100vh-290px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
