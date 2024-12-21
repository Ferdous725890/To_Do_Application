import {createBrowserRouter,} from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Loginpage/Login";
import RegisterPage from "../Pages/Register_Page/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      children : [
        {
            path:"/login",
            element:<LoginPage></LoginPage>
        },
        {
            path:"/register",
            element:<RegisterPage></RegisterPage>
        }
      ]
    },
  ]);


export default router