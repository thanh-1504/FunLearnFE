import { BsStars } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const sidebarItem = [
  {
    title: "Khu vực học tập",
    icon: <IoBookOutline className="w-5 h-5" />,
    path: "/",
  },
  {
    title: "Sắp ra mắt",
    icon: <BsStars className="w-5 h-5" />,
    path: "/coming-soon",
  },
  {
    title: "Hồ sơ",
    icon: <FaRegCircleUser className="w-5 h-5" />,
    path: "/profile",
  },
];
export default sidebarItem;
