import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AddCoffee from "../pages/addCoffee/AddCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />
      }
    ]
  },
]);
