import { Outlet } from "react-router-dom";
import Navbar from "./component/headerCom/Navbar";
import Footer from "./component/footerCom/Footer";
import { navlink } from "./staticData/navstatic";

const App = () => {
  return (
    <div className="flex  flex-col bg-gradient-to-b min-h-[100vh] justify-between from-gray-900 to-teal-900  border-2 border-orange-500 overflow-y-auto overflow-x-hidden  ">
      <Navbar navlinks={navlink} />

      <div className="w-full text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
