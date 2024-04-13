import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SubTask = ({ coloumId }) => {
  const [subTaskData, setSubTaskData] = useState([{}]);
  const [task, setTask] = useState();

  const handleAddSubTask = (e, task, coloumId) => {
    e.preventDefault();
    let data = {
      task: task,
      coloumId: coloumId
    }
    setSubTaskData([...subTaskData, data]);
    setTask("");
  }
  return (
    <>
      <div>
        <form onKeyDown={(e) => {
          if (e.key === "Enter")
            handleAddSubTask(e, task, coloumId);
        }} className=' flex flex-col w-[100%] gap-[1rem] ' >
          <input type="text" onChange={(e) => setTask(e.target.value)} value={task} id="subTask" placeholder="Add SubTask" className=' bg-[#8C8C9A1F] w-[100%] h-[2.8rem] text-center outline-none rounded-md text-[1rem] px-[1rem] py-[1rem] ' ></input>
        </form>
      </div>

      <div>
        <div className='flex flex-col gap-[.5rem]  ' >
          {subTaskData && subTaskData.map((item, index) => (
            <div
              className='bg-gray-600 select-none '
            >
              {item.task}
            </div>
          ))}
        </div>

      </div>




    </>
  )
}

export default SubTask
