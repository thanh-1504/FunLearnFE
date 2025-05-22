import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, googleProvider } from "../../firebaseConfig";
const handleAuthenticationWithGoogle = async (navigate) => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  try {
    const userInfo = await signInWithPopup(auth, googleProvider);
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: userInfo?.user.uid,
        email: userInfo?.user.email,
        name: userInfo?.user.displayName,
        role: "USER",
        signInWithGoogle: true,
      })
    );
    setTimeout(() => {
      toast("Đăng nhập thành công", {
        pauseOnHover: false,
        autoClose: 1000,
        type: "success",
      });
    }, 1000);
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 3000);
    return userInfo?.user;
  } catch (error) {
    console.log(error.message);
  }
};
export default handleAuthenticationWithGoogle;
