import CourseItem from "../components/CourseItem";
import LabelOfPage from "../components/LabelOfPage";

function StudyPage() {
  return (
    <div className="pt-24 px-10 w-full bg-[#f6f6f8]">
      <LabelOfPage>Khu vực học tập</LabelOfPage>
      <div className="grid grid-cols-2 gap-8 mt-4">
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>
    </div>
  );
}

export default StudyPage;
