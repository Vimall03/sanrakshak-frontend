"use client";
import React, { useState } from "react";
import TestPoliceImage, { TestPostImage } from '../../public/assetsManager'
import Image from "next/image";
import { TestProfileImage } from "../../public/assetsManager";

// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";
// import Link from "next/link";
// import axios from "axios";
// import { ApiUrl } from "@/utils/BaseUrl";
// import { useContext } from "react";
// import { DataLayer } from "@/context/UserDataProvider";
// import { useRouter } from "next/router";
// import Cookies from "js-cookie";



const userData = [
    { name: 'Ayush Nandi', profileImage: 'path/to/profile1.jpg' },
    { name: 'Vikalp Sharma', profileImage: 'path/to/profile2.jpg' },
    { name: 'Abhay Dev', profileImage: 'path/to/profile2.jpg' },
    { name: 'Ayush Nandi', profileImage: 'path/to/profile1.jpg' },
    { name: 'Vikalp Sharma', profileImage: 'path/to/profile2.jpg' },
    { name: 'Abhay Dev', profileImage: 'path/to/profile2.jpg' },
];

export default function caseview() {
    return (

        <>
            <div className=" w-[100%] h-[100vh] flex justify-center items-center">
                <div className="w-[60rem] rounded-2xl h-[40rem] flex flex-col  bg-[#334066] border-[1px] border-[#6c71ff37] px-[2.0rem] py-[2.0rem]">
                    <h2 className=" text-[#D3DCFF] font-bold text-2xl my-[-1.5rem]"> Case Name</h2>
                    <div className="px-0 mt-[3rem] pb-0 pt-4">
                        <h3 className="text-lg font-medium text-[#D3DCFF]">Duties Assign</h3>

                        <div className="grid grid-cols-1   md:grid-cols-3 gap-4">
                            <div className=" bg-[#334066] h-[75vh] card-scroll shadow-lg p-0 rounded-2xl ">

                                <div className="bg-[#101935] px-3 border  border-[#505979]  pt-5 pb-3 rounded-2xl ">
                                    <div className=" bg-[#334066] border border-[#505979] px-1 pt-2 pb-1 rounded-xl ">
                                        <h3 className="text-base font-normal px-1 text-[#D3DCFF] ">Crime Branch</h3>
                                        <div className="bg-[#101935]   px-4 pb-4  rounded-md ">

                                            {/* <div className="pt-2">
                                            <div className="flex  h-[2rem]  right-0 items-center">
                                                <img src='profileImage' alt="Profile picture" className="w-6 h-6 rounded-full mr-2" />
                                                <span className="text-sm text-[#D3DCFF] font-normal">Name </span>
                                            </div>
                                            <div className="flex-grow ml-2 border mt-1  border-[#505979] pl-2" />
                                        </div> */}

                                            {userData.map((user) => (
                                                <div key={user.name} className="pt-2">
                                                    <div className="flex h-[2rem] right-0 items-center">
                                                        <Image
                                                            src={TestProfileImage}
                                                            alt={`Profile picture of ${user.name}`}
                                                            className="w-6 h-6 rounded-full mr-2"
                                                            height={150}
                                                            width={150}
                                                        />
                                                        <span className="text-sm text-[#D3DCFF] font-normal">{user.name}</span>
                                                    </div>
                                                    <div className="flex-grow ml-2 border mt-1 border-[#505979] pl-2" />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className=" bg-[#334066] border border-[#505979] mt-3 px-1 pt-2 pb-1 rounded-xl ">
                                        <h3 className="text-base px-1 font-normal text-[#D3DCFF] ">Investigation Branch</h3>
                                        <div className="bg-[#101935] px-4 pb-4  rounded-md ">

                                            {/* <div className="pt-2">
<div className="flex  h-[2rem]  right-0 items-center">
    <img src='profileImage' alt="Profile picture" className="w-6 h-6 rounded-full mr-2" />
    <span className="text-sm text-[#D3DCFF] font-normal">Name </span>
</div>
<div className="flex-grow ml-2 border mt-1  border-[#505979] pl-2" />
</div> */}

                                            {userData.map((user) => (
                                                <div key={user.name} className="pt-2">
                                                    <div className="flex h-[2rem] right-0 items-center">
                                                        <Image
                                                            src={TestProfileImage}
                                                            alt={`Profile picture of ${user.name}`}
                                                            className="w-6 h-6 rounded-full mr-2"
                                                            height={150}
                                                            width={150}
                                                        />
                                                        <span className="text-sm text-[#D3DCFF] font-normal">{user.name}</span>
                                                    </div>
                                                    <div className="flex-grow ml-2 border mt-1 border-[#505979] pl-2" />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="bg-gray-100 p-4 rounded shadow">
                            <h3 className="text-lg font-medium mb-2">Report:</h3>
                            <p>Investigation Branch</p>
                        </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}
