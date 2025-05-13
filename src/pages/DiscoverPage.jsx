import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import CourseItem from "../components/CourseItem";
import LabelOfPage from "../components/LabelOfPage";
function DiscoverPage() {
  return (
    <div className="pt-24 px-10 w-full bg-[#f6f6f8]">
      <LabelOfPage>Khám phá</LabelOfPage>
      <div className="my-5 flex items-center justify-between bg-white p-4 rounded">
        <input
          type="text"
          name=""
          id=""
          placeholder="Tìm kiếm khóa học"
          className="outline-none border border-[#ebedf0] rounded p-1 pl-2 w-[30%]"
        />
        <div>
          <button className="bg-[#978df8] text-white p-3 rounded mr-3 hover:cursor-pointer">
            <RiArrowLeftWideFill className="w-5 h-5 " />
          </button>
          <button className="bg-[#978df8] text-white p-3 rounded hover:cursor-pointer">
            <RiArrowRightWideFill className="w-5 h-5 " />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>
    </div>
  );
}

export default DiscoverPage;
