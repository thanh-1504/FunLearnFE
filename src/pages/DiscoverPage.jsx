import axios from "axios";
import { useEffect, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../common/api";
import CourseItem from "../components/CourseItem";
import LabelOfPage from "../components/LabelOfPage";
function DiscoverPage() {
  const navigate = useNavigate();
  const [listCourse, setListCourse] = useState([]);
  const [listCourseFilter, setListCourseFilter] = useState([]);

  const handleFilterCourseByName = async (e) => {
    if (e.key === "Enter") {
      navigate(`${e.target.value ? `?filter=${e.target.value}` : ""}`);
      try {
        const response = await axios({
          method: api.getCourses.method,
          url: `${api.getCourses.url}?name=${e.target.value}`,
        });
        const filterCourse = response.data?.courses.filter(
          (item) => item.isComing === false
        );
        if (filterCourse.length === 0 || !filterCourse) {
          toast.error("Không có khóa học mà bạn cần", {
            autoClose: 1500,
            pauseOnHover: false,
          });
          return;
        }
        setListCourseFilter(filterCourse);
      } catch (error) {
        console.error("Error:", error);
        setListCourseFilter([]);
      }
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios({
          method: api.getCourses.method,
          url: api.getCourses.url,
        });
        const filterCourse = response.data?.courses.filter(
          (item) => item.isComing === false
        );
        setListCourse(filterCourse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);
  return (
    <div className="pt-24 px-10 w-full bg-[#f6f6f8] max-h-screen overflow-y-auto">
      <LabelOfPage>Khám phá</LabelOfPage>
      <div className="my-5 flex items-center justify-between bg-white p-4 rounded">
        <input
          type="text"
          name=""
          id=""
          placeholder="Tìm kiếm khóa học"
          className="outline-none border border-[#ebedf0] rounded p-1 pl-2 w-[30%]"
          onKeyDown={handleFilterCourseByName}
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
        {(listCourseFilter.length > 0 ? listCourseFilter : listCourse).map(
          (course, index) => {
            return <CourseItem key={index} data={course}></CourseItem>;
          }
        )}
      </div>
    </div>
  );
}

export default DiscoverPage;
