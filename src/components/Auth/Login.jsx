// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

    

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const submitHandler = (e)=>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setEmail("")
//         setPassword("")
//     }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
//                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login



//// new
import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-br from-emerald-200 to-emerald-500">
      <Navbar />
      <div className="flex items-center justify-center flex-grow p-8 sm:p-20">
        <div className="bg-white p-12 sm:p-16 rounded-xl shadow-xl w-full max-w-sm">
          <h2 className="text-3xl font-semibold text-emerald-600 text-center mb-8">
            Log in to your account
          </h2>

          <form onSubmit={submitHandler} className="flex flex-col space-y-6">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full py-3 px-6 rounded-full border-2 border-emerald-600 text-lg font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            />

            {/* Password Input */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full py-3 px-6 rounded-full border-2 border-emerald-600 text-lg font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-8 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300 ease-in-out"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
