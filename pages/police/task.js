import React from 'react'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'

const PoliceTask = () => {
  return (
    <PoliceLayout>
      <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
        <Panel />
        <div className=" w-[100%] h-[81vh] flex  flex-col items-center px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ">
          <h1>hello from task</h1>
        </div>
      </div>
    </PoliceLayout>
  )
}

export default PoliceTask
