import { BsStars } from "react-icons/bs";
import { IoBookOutline, IoPlayCircleOutline } from "react-icons/io5";

const sidebarItem = [
  {
    title: "Khám phá",
    icon: <IoPlayCircleOutline className="w-5 h-5" />,
    path: "/",
  },
  {
    title: "Khu vực học tập",
    icon: <IoBookOutline className="w-5 h-5" />,
    path: "/study",
  },
  {
    title: "Sắp ra mắt",
    icon: <BsStars className="w-5 h-5" />,
    path: "/coming-soon",
  },
];
export default sidebarItem;
