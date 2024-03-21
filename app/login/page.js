'use client'
import React, { useState, useEffect, useContext } from 'react'
import IntialUserNavbar from '@/components/navbar/intialUserNavbar'
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useAuth from '@/context/AuthContext';
import { useSearchParams } from 'next/navigation'
import { AuthContext } from '@/context/AuthContext';
import Cookies from 'js-cookie';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, token, setToken, userName, setUserName, userEmail, setUserEmail, userRole, setUserRole, userCity, setUserCity, userProfileImage, setUserProfileImage } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams()

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [role, setRole] = useState("");
  const [city, setCity] = useState("")

  console.log(email, "email")
  console.log(pass, "pass")

  useEffect(() => {
    setRole(searchParams.get("role"));
    setCity(searchParams.get("city"))
    console.log(" I am in login")
  }, [])



  const handleUserLogin = async (e) => {
    try {
      e.preventDefault();
      if (email && pass) {
        const data = {
          "email": email,
          "password": pass
        }
        const res = await axios.post(`${process.env.NEXT_PUBLIC_ApiUrl}/api/auth/login`, data);
        console.log(res?.data);
        Cookies.set('accessToken', res?.data?.token);
        var userData = {
          name: res?.data?.user?.name || "",
          profileImage: res?.data?.user?.profileImage || "",
          email: res?.data?.user?.email || "",
          role: res?.data?.user?.role || "",
          city: res?.data?.user?.city || "",
        };
        const userDataInCookies = JSON.stringify(userData);
        // console.log("userdatas", userDataInCookies)
        Cookies.set('userData', userDataInCookies);



        // Update AuthContext state after successful login
        // router.push(`/${userRole}`)
        toast.success("User Logged in Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })


      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // setIsAuthenticated(false)
    }
  }

  return (
    <>
      <div className='dark:bg-[#080F25] w-[100%] h-[100vh] ' >
        <IntialUserNavbar />
        <div className=' w-[100%] h-[90vh] flex justify-center items-center   ' >
          <div className=' flex flex-col w-[30rem]   dark:bg-[#101935] border-[1px] dark:border-[#6c71ff37] rounded-md px-[2.5rem] py-[2.5rem] ' >
            <form onSubmit={(e) => handleUserLogin(e)} className=' flex flex-col gap-[1rem]   '  >
              <div className=' flex flex-col gap-[.5rem] ' >
                <label htmlFor="email" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]  ' >Email <span className='text-red-600 ' >*</span></label>
                <input onChange={(e) => setEmail(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c] ' type="text" id="email" name="email" placeholder="Enter your Email " />
              </div>
              <div className=' flex flex-col gap-[.5rem] ' >
                <label htmlFor="password" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]  ' >Password <span className='text-red-600 ' >*</span></label>
                <input onChange={(e) => setPass(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c] ' type="password" id="password" name="password" placeholder="Enter your password " />
              </div>
              <button className={` active:scale-95 duration-300   ${email && pass ? "opacity-100" : "opacity-25"} bg-[#2243b1] dark:bg-[#6C72FF] text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `} >Login</button>

              <div className=' flex justify-center items-center gap-[.3rem] mt-[1rem] ' >
                <div className=' w-[40%] h-[1px] bg-[#afb1ed81] dark:bg-[#6C72FF] ' />
                <span className=' text-[#afb1ed81] dark:text-[#6C72FF]  ' >Or</span>
                <div className=' w-[40%] h-[1px] bg-[#afb1ed81] dark:bg-[#6C72FF]  ' />
              </div>

            </form>
            <button onClick={() => alert("Currently this feature is not enabled")} className=' active:scale-95 duration-300 dark:bg-[#e2eaf8] border-[1px] shadow-sm dark:shadow-none dark:border-none flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.5rem] rounded-md font-nunito font-[600] text-[1.02rem] mt-[2rem]   ' >
              <FcGoogle className=' text-[1.2rem] ' />
              Login with Google
            </button>
            <div className=' flex justify-center gap-[.4rem] mt-[.6rem] ' >
              <p className='text-[#4c4e58e2] dark:text-[#AEB9E180] ' >Don't have account,</p>
              <Link className=' text-[#2931ac] dark:text-[#b1b3ee] underline underline-offset-1 ' href={` ${role != null && city != null ? `/register?role=${role}&city=${city}` : "/register"} `} >
                register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
