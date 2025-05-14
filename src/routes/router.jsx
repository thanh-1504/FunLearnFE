import { createBrowserRouter } from "react-router";
import App from "../App";
import ComingSoonPage from "../pages/ComingSoonPage";
import CourseDetailPage from "../pages/CourseDetailPage";
import DiscoverPage from "../pages/DiscoverPage";
import ProfilePage from "../pages/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <DiscoverPage /> },
      { path: "/coming-soon", element: <ComingSoonPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/detail/:idCourse", element: <CourseDetailPage /> },
    ],
  },
]);
