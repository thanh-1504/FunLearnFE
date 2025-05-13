import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const location = useLocation();
  const hideHeaderAndSidebar =
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname.includes("detail");
  return (
    <>
      <Header></Header>
      <div className="flex items-start">
        {!hideHeaderAndSidebar && <SideBar></SideBar>}
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
