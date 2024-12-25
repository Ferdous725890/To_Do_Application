import React, { useContext } from 'react';
import { Authcontext } from '../../shared Component/Authprovider/Authprovider';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const { googleLogin, userCreated } = useContext(Authcontext);

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpaddword = form.confirmpaddword.value;

    // Check if passwords match
    if (password !== confirmpaddword) {
      Swal.fire({
        title: "Passwords do not match!",
        icon: "error",
      });
      return;
    }

    const userInformation = {
      username,
      photo,
      email,
      password,
      confirmpaddword,
    };

    console.table(userInformation);

    // Create the user
    userCreated(email, password)
      .then(result => {
        console.log(result.user);
        
        // Set the username and photo URL
        result.user.updateProfile({
          displayName: username,
          photoURL: photo,
        }).then(() => {
          Swal.fire({
            title: "Successfully Registered!",
            icon: "success",
            draggable: true
          });
        }).catch(error => {
          console.error("Error updating profile:", error);
        });
      })
      .catch(error => {
        console.log("Error during registration:", error);
      });
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="p-10 mt-20 mb-20 shadow-lg rounded-lg flex items-center justify-center bg-gradient-to-b from-purple-400 to-purple-500">
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
              name="username"
              id="username"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>
          {/* Photo URL */}
          <div className="mb-4">
            <label htmlFor="photo" className="block mb-2 text-sm font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Photo URL"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
              name="confirmpaddword"
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

        {/* Google Login Button */}
        <div onClick={handelGoogleLogin} className="">
          <button>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;











// import React, { useContext, useState } from 'react';
// import { Authcontext } from '../../shared Component/Authprovider/Authprovider';
// import Swal from 'sweetalert2';

// const RegisterPage = () => {
// const {googleLogin, userCreated} = useContext(Authcontext)
// const handelRegister = (event) =>{
// event.preventDefault()
// const from = event.target
// const username = from.username.value;
// const photo = from.photo.value;
// const email = from.email.value;
// const password = from.password.value;
// const confirmpaddword = from.confirmpaddword.value;

// if(password !== confirmpaddword ){
//    Swal.fire({
//       title: "Passwords do not match!",
//       icon: "error",
//     });
//     return;
// }


// const userInformation = {
//   username,
//   photo,
//   email,
//   password,
//   confirmpaddword,
// }
// console.table(userInformation);
// userCreated(email, password)
// .then(result=>{
//   console.log(result.user);
//   Swal.fire({
//     title: "Successfully Register!",
//     icon: "success",
//     draggable: true
//   });
  
// })
// .then(error=>{
//   console.log("error" ,error);
// })


// }

// const handelGoogleLogin =() =>{
//   googleLogin()
//   .then(result =>{
//     console.log(result);
//   })
//   .catch(error=>{
//     console.log(error);
//   })
//   }




//   return (
//     <div className="p-10 mt-20 mb-20 shadow-lg rounded-lg flex items-center justify-center bg-gradient-to-b from-purple-400 to-purple-500">
//       <div className="w-96 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 text-white">
//         <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
//         <form onSubmit={handelRegister}>
//           {/* Username Field */}
//           <div className="mb-4">
//             <label htmlFor="username" className="block mb-2 text-sm font-medium">
//               Username
//             </label>
//             <input
//               type="text"
//               name='username'
//               id="username"
//               className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your username"
//             />
//           </div>
//           {/* Photo URL */}
//           <div className="mb-4">
//             <label htmlFor="username" className="block mb-2 text-sm font-medium">
//               Photo URL
//             </label>
//             <input
//               type="text"
//               name='photo'
//               id="photo"
//               className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Photo URL"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2 text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//                name='email'
//               id="email"
//               className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-2 text-sm font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//                name='password'
//               id="password"
//               className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-4">
//             <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//                name='confirmpaddword'
//               id="confirm-password"
//               className="w-full px-3 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Confirm your password"
//             />
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
//           >
//             Register
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="text-center text-sm mt-4">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-300 hover:underline">
//             Login here
//           </a>
//         </p>


//         <div onClick={handelGoogleLogin} className=''>
//           <button>Google Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
