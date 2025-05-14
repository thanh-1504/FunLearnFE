import axios from "axios";
import { useEffect, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useParams } from "react-router";
import api from "../common/api";

function CourseDetailPage() {
  const { idCourse } = useParams();
  const [courseDetail, setCourseDetail] = useState([]);
  const [urlVideo, setUrlVideo] = useState("");
  useEffect(() => {
    const fetchDetailCourse = async () => {
      try {
        const course = await axios({
          method: api.getCourse.method,
          url: `${api.getCourses.url}/${idCourse}`,
        });
        if (course.data.status === "success") {
          setCourseDetail(course.data.course.courseDetail);
          setUrlVideo(course.data.course.courseDetail[0]?.urlCourse);
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchDetailCourse();
  }, [idCourse]);
  console.log(urlVideo);
  return (
    <div className="pt-20 flex items-start w-full px-10 h-screen bg-[#f6f6f8]">
      <div className="w-[70%] h-full">
        <iframe
          width={"100%"}
          height={"95%"}
          src={urlVideo}
          title="Anh Cũng Đâu Có Muốn Tin, Forget Me Now, Wrong Times, Hai Đứa Nhóc | Playlist GenZ CHILL tâm trạng"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <ul className="w-[30%] ml-8 h-full overflow-y-scroll">
        {courseDetail.length > 0 &&
          courseDetail.map((course, index) => {
            return (
              <li
                key={index}
                className="bg-white p-3 rounded border-b border-b-slate-300"
                onClick={() => {
                  setUrlVideo(course.urlCourse);
                }}
              >
                <div className="flex items-center gap-x-2 hover:cursor-pointer hover:text-purple-600 transition-all">
                  <IoPlayCircleOutline className="min-w-5 min-h-5"></IoPlayCircleOutline>
                  <span className="mb-0.5 truncate max-w-[283px] font-semibold">
                    {course.name}
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CourseDetailPage;
