import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoSignOut } from "react-icons/go";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../common/api";

function ProfilePage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const handleSubmitFormUpdateUser = async (value) => {
    if (isValid) {
      try {
        const response = await axios({
          method: api.getProfile.method,
          url: `${api.getProfile.url}/${user?.id}`,
          data: {
            name: value?.name,
            email: value?.email,
            password: value?.password,
          },
        });
        if (response.data.status === "success") {
          toast.success("Cập nhật thành công", {
            pauseOnHover: false,
            autoClose: 1300,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: response.data.userUpdated?._id,
              name: response.data.userUpdated?.name,
              email: response.data.userUpdated?.email,
              role: response.data.userUpdated?.role,
            })
          );
        }
      } catch (error) {
        console.log(error);
        toast.error("Cập nhật thất bại !", {
          pauseOnHover: false,
          autoClose: 1500,
        });
        return;
      }
    }
  };
  return (
    <div className="pt-20 px-10 w-full bg-[#f6f6f8] h-screen">
      <form onSubmit={handleSubmit(handleSubmitFormUpdateUser)}>
        <div className="flex items-center justify-end gap-x-5 mb-10 ">
          <button
            type="submit"
            className="py-3 px-6 bg-[#978df8] text-white rounded-md font-semibold hover:bg-[#8177dc] hover:cursor-pointer transition-all"
          >
            Cập nhật
          </button>
          <button
            type="button"
            className="flex items-center gap-x-3 py-3 px-6 bg-red-500 text-white font-semibold rounded-md hover:cursor-pointer hover:bg-red-600 transition-all"
            onClick={() => {
              localStorage.removeItem("user");
              setTimeout(() => {
                navigate("/");
                window.location.reload();
              }, 1000);
            }}
          >
            Đăng xuất
            <GoSignOut />
          </button>
        </div>
        <div className="flex items-center gap-x-5 mt-16">
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="name" className="w-full">
              Tên
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              defaultValue={user?.id ? user.name : "Nhập họ tên"}
              className="w-full p-3 outline-none border border-slate-300 rounded focus:border-[#978df8] focus:shadow transition-all"
              placeholder="Nhập tên"
            />
          </div>
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              defaultValue={user?.id ? user.email : "Nhập email"}
              className="w-full p-3 outline-none border border-slate-300 rounded focus:border-[#978df8] focus:shadow transition-all"
              placeholder="Nhập email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-5">
          <label htmlFor="update-password">Thay đổi mật khẩu</label>
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              id="update-password"
              name="password"
              {...register("password")}
              placeholder="Nhập mật khẩu mới"
              className="w-full p-3 outline-none border border-slate-300 rounded focus:border-[#978df8] focus:shadow transition-all"
            />
            {!showPassword ? (
              <IoEyeOutline
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setShowPassword(false)}
                className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
