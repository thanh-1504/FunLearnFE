import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../common/api";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
function SignInPage() {
  const {
    register,
    handleSubmit,
    reset,
    isSubmitting,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitFormSignIn = async (value) => {
    if (isValid) {
      try {
        setLoading(true);
        const response = await axios({
          method: api.signIn.method,
          url: api.signIn.url,
          data: {
            email: value?.email,
            password: value?.password,
          },
        });
        if (response.data.status === "success") {
          toast.success("Đăng nhập thành công", {
            pauseOnHover: false,
            autoClose: 1300,
          });
          setLoading(false);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: response.data.user?._id,
              name: response.data.user?.name,
              email: response.data.user?.email,
              role: response.data.user?.role,
            })
          );
          reset();
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1700);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Tài khoản hoặc mật khẩu không đúng !", {
          pauseOnHover: false,
          autoClose: 1500,
        });
        return;
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-[400px] shadow-xl rounded bg-white ">
        <div>
          <NavLink
            to={"/signin"}
            className={({ isActive }) =>
              isActive
                ? "w-2/4 bg-white inline-block text-center p-2 border-b-2 border-b-[#978df8] font-semibold"
                : "w-2/4 bg-white inline-block text-center p-2"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to={"/signup"}
            className="w-2/4 bg-white inline-block text-center p-2 border-b-2 border-b-slate-200"
          >
            Sign Up
          </NavLink>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(handleSubmitFormSignIn)}
          className="px-5 flex flex-col gap-y-3 mt-3 py-5"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              className="w-full outline-none border-slate-400 border p-2 rounded-sm"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                name="password"
                {...register("password")}
                className="w-full outline-none border-slate-400 border p-2 rounded-sm"
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
            {errors.password?.message && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            className={`text-white font-semibold uppercase flex items-center justify-center p-2 min-h-10 bg-[#978df8] hover:cursor-pointer`}
          >
            {loading ? (
              <div className="w-5 h-5 rounded-full border-2 animate-spin border-b-transparent pointer-events-none"></div>
            ) : (
              <div className="flex items-center gap-x-1">
                SIGN IN
                <FaArrowRight />
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
