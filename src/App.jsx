import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const location = useLocation();
  const hideHeaderAndSidebar =
    location.pathname === "/signup" || location.pathname === "/signin";
  return (
    <>
      {!hideHeaderAndSidebar && <Header></Header>}
      <main
        className={`grid ${
          location.pathname === "/signup" ||
          location.pathname === "/signin" ||
          location.pathname.includes("detail")
            ? "grid-cols-1"
            : "grid-cols-[20%_80%]"
        } `}
      >
        {!hideHeaderAndSidebar && <SideBar></SideBar>}
        <Outlet></Outlet>
      </main>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
