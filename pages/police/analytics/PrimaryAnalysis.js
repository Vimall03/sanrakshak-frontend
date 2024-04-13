import React from 'react'
import Sample from './graphs/Sample'
import GraphByHour from './graphs/GraphByhour'
import CrimeTrend from './graphs/CrimeTrend'

export default function PrimaryAnalysis() {
  return (
    <div>

      <div className=" w-[35rem] h-[85vh]  ">

        <div className="bg-[#212C47] rounded-md w-[35 rem] mb-3 h-[32%] ">
          <div className="px-4 py-1">
            <h2 className="text-xl  font-bold">Today's Cases by hour</h2>
            <GraphByHour />
          </div>
        </div>

        <div className="bg-[#212C47] rounded-md w-[35 rem] mb-3 h-[64%] ">
        <div className="px-4 py-1">
            <h2 className="text-xl  font-bold">Crime Trend : Increasing</h2>
            <div className="mt-5" >

            <CrimeTrend  />
            </div>
        </div>
        </div>
      </div>
    </div>

  )
}
