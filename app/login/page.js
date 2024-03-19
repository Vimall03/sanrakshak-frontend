"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  return (
    <div className="bg-[#080F25] w-[100%] h-[100vh] ">
      <div
        className=" w-[100%] h-[90vh] flex justify-center items-center"
      >
        <div className=" flex flex-col w-[30rem]   bg-[#101935] border-[1px] border-[#6c71ff37] rounded-md px-[2.5rem] py-[2.5rem] ">
          <form
            onSubmit={(e) => handleUserLogin(e)}
            className=" flex flex-col gap-[1rem]   "
          >
            <div className=" flex flex-col gap-[.5rem] ">
              <label htmlFor="email" className=" text-[#AEB9E180]  ">
                Email <span className="text-red-600 ">&#42;</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Email "
              />
            </div>
            <div className=" flex flex-col gap-[.5rem] ">
              <label htmlFor="password" className=" text-[#AEB9E180]  ">
                Passowrd <span className="text-red-600 ">&#42;</span>
              </label>
              <input
                onChange={(e) => setPass(e.target.value)}
                className=" bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password "
              />
            </div>
            <button
              className={` active:scale-95 duration-300   ${
                email && pass ? "opacity-100" : "opacity-25"
              } bg-[#6C72FF] text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `}
            >
              Login
            </button>

            <div className=" flex justify-center items-center gap-[.3rem] mt-[1rem] ">
              <div className=" w-[40%] h-[1px]  bg-[#6C72FF] " />
              <span className=" text-[#6C72FF] ">Or</span>
              <div className=" w-[40%] h-[1px] bg-[#6C72FF] " />
            </div>
          </form>
          <div className=" flex justify-center gap-[.4rem] mt-[.6rem] ">
            <p className="text-[#AEB9E180]">Don&apos;t have account,</p>
            <Link
              className=" text-[#b1b3ee] underline underline-offset-1 "
              href="/register"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
