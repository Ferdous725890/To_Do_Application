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
import Error from "../Pages/ErrorPage/ErrorHandel";
import Banner from "../Pages/Banner/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
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
        element: 
        <PrivateRouter>

          <AvilableCar></AvilableCar>,
        </PrivateRouter>
      },
      {
        path: "/MyBooking",
        element:
        <PrivateRouter>
          <MyBooking></MyBooking>,
        </PrivateRouter>
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
