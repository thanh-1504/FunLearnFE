import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../common/api";
import handleAuthenticationWithGoogle from "../utils/authenticationWithGoogle";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required")
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation must match the password"
    ),
});
function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleSubmitFormSignUp = async (value) => {
    if (isValid) {
      try {
        setLoading(true);
        const response = await axios({
          method: api.signUp.method,
          url: api.signUp.url,
          data: {
            name: value?.name,
            email: value?.email,
            password: value?.password,
          },
        });
        if (response.data.status === "success") {
          setLoading(false);
          toast.success("Đăng ký thành công", {
            pauseOnHover: false,
            autoClose: 1300,
          });
          reset();
          setTimeout(() => {
            navigate("/signin");
          }, 1700);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Tài khoản đã tồn tại !", {
          pauseOnHover: false,
          autoClose: 1500,
        });
        reset();
        return;
      }
    }
  };
  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="w-full max-w-[400px] shadow-lg rounded bg-white">
        <div>
          <NavLink
            to={"/signin"}
            className="w-2/4 bg-white inline-block text-center p-2 border-b-2 border-b-slate-200"
          >
            Sign In
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-2/4 bg-white inline-block text-center p-2 border-b-2 border-b-[#978df8] font-semibold"
                : "w-2/4 bg-white inline-block text-center p-2"
            }
          >
            Sign Up
          </NavLink>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(handleSubmitFormSignUp)}
          className="px-5 flex flex-col gap-y-3 mt-3 py-5"
        >
          <div className="flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              className="w-full outline-none border-slate-400 border p-2 rounded-sm"
            />
            {errors.name?.message && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
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
                className="w-full outline-none border-slate-400 border p-2 pr-8 rounded-sm"
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
          <div className="flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={`${showPasswordConfirm ? "text" : "password"}`}
                id="confirmPassword"
                name="confirmPassword"
                {...register("passwordConfirm")}
                className="w-full outline-none border-slate-400 border p-2"
              />
              {!showPasswordConfirm ? (
                <IoEyeOutline
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={() => setShowPasswordConfirm(false)}
                  className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
                />
              )}
            </div>
            {errors.passwordConfirm?.message && (
              <p className="text-red-500">{errors.passwordConfirm.message}</p>
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
                SIGN UP
                <FaArrowRight />
              </div>
            )}
          </button>
          <div className="relative flex my-4 justify-center items-center">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="absolute bg-white px-2 text-gray-500">or</span>
          </div>
          <button
            type="button"
            className="flex items-center justify-center p-2 border-slate-300 border gap-x-2 hover:cursor-pointer"
            onClick={async () => {
              try {
                const userData = await handleAuthenticationWithGoogle(navigate);
                const { displayName, email } = userData;
                await axios({
                  method: api.signUp.method,
                  url: api.signUp.url,
                  data: {
                    name: displayName,
                    email,
                    signInWithGoogle: true,
                  },
                });
              } catch (error) {
                console.log(error);
                toast.error("Đăng nhập Google thất bại");
                return;
              }
            }}
          >
            Đăng ký với Google <FcGoogle className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
