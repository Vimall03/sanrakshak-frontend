import React, { useState } from 'react'

import PoliceLayout from '../../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'



const PoliceDashboard = () => {

    const [toggleDistrict, setToggleDistrict] = useState(false);

    const onSelectDistrict = (e) => {
        if (toggleDistrict) setToggleDistrict(false);
        else if (!toggleDistrict) setToggleDistrict(true);

    }

    return (
        <PoliceLayout>
            <div class="bg-[#080F25] text-[#D3DCFF] w-full h-screen flex flex-row relative flex-shrink">
                <Panel />
                <div class="w-full h-[81vh] flex flex-col px-8 pt-4 text-[#AEB9E1] text-lg">
                    <div class="flex flex-col  w-full">
                        <div className='rounded-2xl bg-[#1A2852] border-3 border-[#6c71ff37]'>
                            <div class="flex flex-row justify-between p-2">
                                <div class="flex items-center flex-row space-x-2">
                                    <div class="px-[1rem] text-base ">District</div>
                                    <select class="rounded-md px-[1rem] text-[white] bg-[#485fa4] p-1">
                                        <option value="bengaluru-city">All</option>
                                        <option value="bengaluru-city">Bengaluru City</option>
                                        <option value="bengaluru-city">Mysuru City</option>
                                    </select>
                                    <div class="px-[1rem] text-base ">Crime Type</div>
                                    <select class="rounded-md px-[1rem] text-[white] bg-[#485fa4] p-1">
                                        <option value="all">All</option>
                                        <option value="all">Theft</option>
                                        <option value="all">Assault</option>
                                        <option value="all">Property Crime</option>
                                    </select>
                                    <div class="px-[1rem] text-base ">Show Crimes for the last</div>
                                    <select class="rounded-md px-[1rem] text-[white] bg-[#485fa4] p-1">

                                        <option value="28-days">28 Days</option>
                                        <option value="28-days">7 Days</option>
                                        <option value="28-days">24 hours</option>
                                        <option value="28-days">1 hour</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between  py-0 px-1 mt-4">

                             {/* 1st chip */}

                            <div class="bg-[#1A2852] rounded-2xl h-[85vh] card-scroll w-[35rem] px-4 py-2">
                                <h2 className='text-2xl  font-bold'>Crime Map - Bengaluru City</h2>
                                <p className='text-base my-2'>Areas with High Crimes in the last hour : Shivajinagara,  Banaswadi, Indiranagar, Whitefield, Electronic City</p>

                                <div id="map" className='h-[20rem] my-3 bg-[white] '>

                                </div>
                            </div>

                            {/* 2nd chip */}

                            <div class="bg-[#1A2852] rounded-2xl h-[85vh] card-scroll w-[18rem] px-4 py-2">
                                
                                <h2 className='text-2xl  font-bold'>Resources</h2>
                                <h2 className='text-6xl text-center font-bold my-5'>6,143</h2>

                                <div id="map" className='h-[20rem] my-3 bg-[white] '>

                                </div>
                            </div>

                             {/* 3rd chip */}

                            <div class="bg-[#1A2852] rounded-2xl card-scroll h-[85vh] w-[18rem] px-4 py-2 ">
                                <h2 className='text-2xl  font-bold'>Crime Feed</h2>
                                <h2 className='text-6xl text-center font-bold my-5'>6,143</h2>
                                <div>
                                    <div className=" items-center my-3 justify-between">

                                        {/* loop cases here */}
                                        <div>
                                            <div className=" flex mt-2 ">
                                                <div className='p-1 mt-3 w-3 h-3 rounded-full shadow-[#505979] shadow bg-[#505979]'></div>
                                                <h2 className="text-xl p-1 font-medium px-[2rem] text-center">Theft</h2>
                                                <div className=''>
                                                    <div className="text-sm text-right ">22/03/23, 11:23 AM</div>
                                                    <div className="text-sm text-right ">KR Puram</div>
                                                </div>
                                            </div>
                                            <div className="flex-grow ml-2 border mt-2 w-[15rem] border-[#505979] pl-2" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </PoliceLayout>
    )
}

export default PoliceDashboard
