import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import Details from "../pages/details/Details";
import UpdateCoffee from "../pages/update/UpdateCoffee";

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
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  },
]);
