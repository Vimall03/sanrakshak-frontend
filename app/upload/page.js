"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Handle response from server as needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  }
  return (


    <div className="bg-[#16213c] w-[100%] h-[100vh]">
      <div className=" w-[100%] h-[90vh] flex justify-center items-center">
        <div className=" flex flex-col w-[30rem]   bg-[#101935] border-[1px] border-[#6c71ff37] rounded-lg px-[2.5rem] py-[2.5rem] ">
          <h1 className='my-5 text-2xl font-semibold'>Upload CSV File</h1>
          <form onSubmit={handleSubmit}>

            <label class="block">
              <span class="sr-only">Upload CSV File</span>
              <input type="file" onChange={handleFileChange} class="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                      file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
            </label>
            <button type="submit" className='className=" active:scale-95 duration-300 bg-[#6d72fe] flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.25rem] rounded font-nunito font-[400] text-[1.02rem] mt-[2rem]   '>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;