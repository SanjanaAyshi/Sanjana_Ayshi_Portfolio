import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Roots = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about_me",
    element: <h1>Its about me</h1>,
  },
  {
    path: "/projects",
    element: <h1>Projevt List</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default Roots;
