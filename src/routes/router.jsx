import { createBrowserRouter } from "react-router";
import App from "../App";
import ComingSoonPage from "../pages/ComingSoonPage";
import DiscoverPage from "../pages/DiscoverPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import StudyPage from "../pages/StudyPage";
import CourseDetailPage from "../pages/CourseDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <DiscoverPage /> },
      { path: "/study", element: <StudyPage /> },
      { path: "/coming-soon", element: <ComingSoonPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/detail/:idCourse", element: <CourseDetailPage /> },
    ],
  },
]);
