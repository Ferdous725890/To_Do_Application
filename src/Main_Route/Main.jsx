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
import Test from "../Components/TestFile/Test";
import ContactUs from "../Components/CardTable.jsx/ContactUs";

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
        element: 
        <PrivateRouter>

          <AddCar></AddCar>,
        </PrivateRouter>
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
      {
        path: "/test",
        element: <Test></Test>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      
   
    ],
  },
]);

export default router;
















// https://demo.awaikenthemes.com/novaride/
// https://demo.awaikenthemes.com/novaride/contact-us/
// https://preview.themeforest.net/item/carola-car-rental-wordpress-theme/full_screen_preview/54872845?_ga=2.206000019.1084767901.1734921970-878182566.1731848721&_gac=1.58766047.1732039875.Cj0KCQiAi_G5BhDXARIsAN5SX7rAiDoMxIkC6STUzqwUMs7sIUpPhK8EiIi7Y72yqiyXqnRdpmTsbBwaAvvJEALw_wcB
// https://preview.themeforest.net/item/motors-automotive-cars-vehicle-boat-dealership-classifieds-wordpress-theme/full_screen_preview/13987211?_ga=2.129616332.1149859446.1734787964-1465862782.1719140064&_gac=1.12356166.1733880830.CjwKCAiA6t-6BhA3EiwAltRFGPQDBHtMQfgPItNhydJVo8C7ZFPWqkPr6htF7t-J4DrO9CUgYkUEqRoC9AMQAvD_BwE
// https://motors.stylemixthemes.com/elementor-rent-a-car/