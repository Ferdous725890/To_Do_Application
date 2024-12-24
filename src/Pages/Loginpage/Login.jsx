import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../shared Component/Authprovider/Authprovider';
import Swal from 'sweetalert2';

const LoginPage = () => {
const {userLogin, googleLogin} = useContext(Authcontext)

  const handleLogin = (event) =>{
    console.log("btn click");
      event.preventDefault()
      const from = event.target
      const email = from.email.value;
      const password = from.password.value;
      // user information 
      const userInformation = {
        email,
        password,
      
      }
      userLogin(email,password)
     .then(result=>{
       console.log(result.user);
       Swal.fire({
         title: "Successfully Login!",
         icon: "success",
         draggable: true
       });
     })
     .then(error=>{
      console.log("error" ,error);
    })
    



  }
  const handelGoogleLogin = () =>{
    googleLogin()
  }






  return (
    <div className="h-[600px] mt-3 shadow-lg mb-5 rounded-lg flex items-center justify-center bg-gradient-to-b from-purple-400 to-purple-500">
      <div className="w-96 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
           
          <Link to="/register" className="text-blue-300 hover:underline">
            Register
          </Link>
        </p>
      <button onClick={handelGoogleLogin}>goole</button>
      </div>
    </div>
  );
};

export default LoginPage;



