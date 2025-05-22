import { NavLink, useLocation } from "react-router";
import sidebarItem from "../common/sidebarItem";

function SideBar() {
  const location = useLocation();
  const hideSidebar = location.pathname.includes("detail");
  const user = JSON.parse(localStorage.getItem("user"))?.id;
  if (!user && sidebarItem.length >= 3) sidebarItem.pop();
  return (
    <aside
      id="sidebar"
      className={`pt-20 border-r-2 border-r-slate-200 min-h-screen px-4 ${
        hideSidebar && "hidden"
      }`}
    >
      {sidebarItem.length > 0 &&
        sidebarItem.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item?.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-x-2 text-[#978df9] hover:cursor-pointer transition-all bg-[#f4f3fe] p-2 rounded my-3"
                  : "flex items-center gap-x-2 hover:text-[#978df9] hover:cursor-pointer transition-all hover:bg-[#f4f3fe] p-2 rounded my-3"
              }
            >
              {item?.icon}
              <span className="mb-0.5">{item?.title}</span>
            </NavLink>
          );
        })}
    </aside>
  );
}

export default SideBar;
