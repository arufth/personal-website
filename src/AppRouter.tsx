import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Life } from "./life/Life";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "life",
    element: <Life />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
