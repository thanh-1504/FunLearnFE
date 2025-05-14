import axios from "axios";
import { useEffect, useState } from "react";
import api from "../common/api";
import CourseItem from "../components/CourseItem";
import LabelOfPage from "../components/LabelOfPage";

function ComingSoonPage() {
  const [listCourseIsComing, setListCourseIsComing] = useState([]);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courses = await axios({
          method: api.getCourses.method,
          url: api.getCourses.url,
        });
        const filterCourse = courses.data?.courses.filter(
          (item) => item.isComing
        );
        setListCourseIsComing(filterCourse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);
  return (
    <div className="pt-24 px-10 w-full bg-[#f6f6f8]">
      <LabelOfPage>Sắp ra mắt</LabelOfPage>
      <div className="grid grid-cols-2 gap-8 mt-4">
        {listCourseIsComing.length > 0 &&
          listCourseIsComing.map((course, index) => {
            return <CourseItem key={index} data={course}></CourseItem>;
          })}
      </div>
    </div>
  );
}

export default ComingSoonPage;
