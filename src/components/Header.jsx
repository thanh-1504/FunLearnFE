import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router";

function Header() {
  return (
    <header className="shadow-md min-h-16 fixed w-full flex items-center px-5 z-50 bg-[#f6f6f8]">
      <Link to={"/"} className="flex items-center">
        <span className="min-w-8 min-h-8 rounded-full bg-[#978df8] font-bold text-white flex items-center justify-center mr-2 text-xl hover:cursor-pointer">
          F
        </span>
        <span className="font-semibold text-xl hover:cursor-pointer">
          Fun Learn
        </span>
      </Link>
      <button className="flex items-center gap-x-2 bg-[#978df8] text-white rounded-md p-2 ml-auto px-5 font-medium hover:cursor-pointer">
        <FaRegCircleUser />
        <Link to={"/signup"}>Đăng nhập</Link>
      </button>
    </header>
  );
}

export default Header;
