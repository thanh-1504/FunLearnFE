import { Link } from "react-router";

function CourseItem({ data }) {
  const user = JSON.parse(localStorage.getItem("user"))?.id;
  const { _id, name, urlImageCourse, isComing } = data ?? {
    _id: "",
    name: "",
    description: "",
    isComing: false,
  };

  const courseContent = (
    <>
      <img
        src={urlImageCourse}
        alt={name}
        className="rounded object-cover max-h-60 w-full"
      />
      <p className="font-semibold text-xl my-4">{name}</p>
      <button
        disabled={isComing}
        className={`${
          isComing ? "bg-gray-300" : "bg-[#978df8] hover:cursor-pointer"
        } text-white font-semibold text-center w-full p-2 rounded`}
      >
        {isComing ? "Sắp ra mắt" : "Xem chi tiết"}
      </button>
    </>
  );

  return isComing ? (
    <div className="bg-white p-3 cursor-not-allowed opacity-70">
      {courseContent}
    </div>
  ) : (
    <Link to={!user ? "/signin" : `/detail/${_id}`} className="bg-white p-3">
      {courseContent}
    </Link>
  );
}

export default CourseItem;
