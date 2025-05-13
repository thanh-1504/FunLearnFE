import { NavLink } from "react-router";

function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-[400px] shadow-xl rounded bg-white ">
        <div>
          <NavLink
            to={"/signin"}
            className={({ isActive }) =>
              isActive
                ? "w-2/4 bg-white inline-block text-center p-2 border-b-2 border-b-[#fa8232] font-semibold"
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
          //   onSubmit={handleSubmit(handleSubmitFormSignIn)}
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
              //   {...register("email")}
              className="w-full outline-none border-slate-400 border p-2 rounded-sm"
            />
            {/* {errors.email?.message && (
              <p className="text-red-500">{errors.email.message}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                // type={`${showPassword ? "text" : "password"}`}
                type="password"
                id="password"
                name="password"
                // {...register("password")}
                className="w-full outline-none border-slate-400 border p-2 rounded-sm"
              />

              {/* {!showPassword ? (
                <IoEyeOutline
                  onClick={() => dispatch(handleShowPassWord(!showPassword))}
                  className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={() => dispatch(handleShowPassWord(!showPassword))}
                  className="absolute right-3 bottom-2/4 translate-y-2/4 cursor-pointer"
                />
              )} */}
            </div>
            {/* {errors.password?.message && (
              <p className="text-red-500">{errors.password.message}</p>
            )} */}
          </div>
          <button
            // disabled={isSubmitting || isSignInWithGoogle}
            className={`text-white font-semibold uppercase flex items-center justify-center p-2 min-h-10 bg-[#fa8232]`}
          >
            {/* {loading ? <div className="w-5 h-5 rounded-full border-2 animate-spin border-b-transparent pointer-events-none"></div> : <div className="flex items-center gap-x-1">
              SIGN IN
              <FaArrowRight />
            </div>} */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
