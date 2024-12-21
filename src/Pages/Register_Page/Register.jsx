import React, { useContext } from 'react';
import { Authcontext } from '../../shared Component/Authprovider/Authprovider';

const RegisterPage = () => {
const {googleLogin, userCreated} = useContext(Authcontext)
const handelRegister = (event) =>{
event.preventDefault()
const from = event.target
const username = from.username.value;
const email = from.email.value;
const password = from.password.value;
const confirmpaddword = from.confirmpaddword.value;
const userInformation = {
  username,
  email,
  password,
  confirmpaddword,

}

userCreated(email, password)
.then(result=>{
  console.log(result.user);
})
.then(error=>{
  console.log("error" ,error);
})


}

const handelGoogleLogin =() =>{
  googleLogin()
  .then(result =>{
    console.log(result);
  })
  .catch(error=>{
    console.log(error);
  })
  }




  return (
    <div className="h-[600px] mt-3 shadow-lg mb-5 rounded-lg flex items-center justify-center bg-gradient-to-b from-purple-400 to-purple-500">
      <div className="w-96 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handelRegister}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name='username'
              id="username"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
               name='email'
              id="email"
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
               name='password'
              id="password"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
               name='confirmpaddword'
              id="confirm-password"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-300 hover:underline">
            Login here
          </a>
        </p>


        <div onClick={handelGoogleLogin} className=''>
          <button>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
