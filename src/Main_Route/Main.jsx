import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Loginpage/Login";
import RegisterPage from "../Pages/Register_Page/Register";
import AddCar from "../Pages/AddCar/AddCar";
import MyCar from "../Pages/MyCar/MyCar";
import AvilableCar from "../Pages/AvilableCard/AvilableCard";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRouter from "../PrivateRoute/Private";
import CarDetailsPage from "../Pages/CarDetailsPage/CarDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/addCard",
        element: <AddCar></AddCar>,
      },
      {
        path: "/myCar",
        element:
        <PrivateRouter>

          <MyCar></MyCar>,
        </PrivateRouter>
      },
      {
        path: "/avilableCar",
        element: <AvilableCar></AvilableCar>,
      },
      {
        path: "/MyBooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/detailsPage/:id",
        element: <CarDetailsPage></CarDetailsPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
