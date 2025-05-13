import { Link } from "react-router";
import sidebarItem from "../common/sidebarItem";

function SideBar() {
  return (
    <aside
      id="sidebar"
      className="pt-20 border-r-2 border-r-slate-200 min-h-screen px-4 w-[25%] "
    >
      {sidebarItem.length > 0 &&
        sidebarItem.map((item) => {
          return (
            <Link
              to={item.path}
              className="flex items-center gap-x-2 hover:text-[#978df9] hover:cursor-pointer transition-all hover:bg-[#f4f3fe] p-2 rounded my-3"
            >
              {item.icon}
              <span className="mb-0.5">{item.title}</span>
            </Link>
          );
        })}
    </aside>
  );
}

export default SideBar;
