import { Link } from "react-router";

function CourseItem() {
  return (
    <Link to={"/detail/123"} className="bg-white p-3">
      <img src="/images/imageCourseTest.webp" alt="" className="rounded" />
      <p className="font-semibold text-xl my-4">
        Khóa học Thuật toán và Cấu trúc dữ liệu cơ bản cho người mới
      </p>
      <button className="bg-[#978df8] text-white font-semibold text-center w-full p-2 rounded hover:cursor-pointer">
        Xem chi tiết
      </button>
    </Link>
  );
}

export default CourseItem;
