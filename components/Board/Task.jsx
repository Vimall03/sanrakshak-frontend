import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdAssignmentAdd } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { useBoards } from "@/context/BoardContext";
import { TestPoliceImage } from "@/public/assetsManager";
import Image from "next/image"

const Task = ({ data, index }) => {
  console.log("data in task ", data)

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "#445174" : "",
    ...draggableStyle
  });

  const testUserData = [
    1, 2, 3, 4, 5, 6
  ]

  const completedSubtasks = data.subtasks.reduce((acc, subtask) => subtask.isCompleted ? acc + 1 : acc, 0);
  return (
    <Draggable draggableId={String(data.id)} index={index} >
      {(provided, snapshot) => (
        <>
          <div className="cursor-pointer select-none flex flex-col justify-between gap-[.2rem] w-[100%] max-h-[7rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[1rem] shadow-xl shadow-[#20263b] "
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
            onClick={() => setOpenTaskModal(true)}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <div className=" flex gap-[1rem] w-[100%] " >
              <div className=" w-[70%] " >
                <h4 className=" line-clamp-3">{data.title}</h4>
              </div>

              <div className=" flex flex-wrap gap-[-1rem] w-[23%] h-[3.5rem] " >
                {
                  testUserData.map((data, index) => {
                    return (
                      <Image
                        src={TestPoliceImage}
                        height={100}
                        width={100}
                        alt="user"
                        className="w-[1.35rem] ml-[-.6rem] h-[1.35rem] border-[1px] border-[#292441]   opacity-[.75] rounded-full"
                      />
                    )
                  })
                }
              </div>
            </div>

            <div className="flex justify-between gap-[1rem] w-[100%] " >
              <div className=" cursor-pointer flex gap-[.2rem] items-center w-[70%] opacity-[.5] hover:opacity-[.9] duration-300" >
                <MdAssignmentAdd />
                <h2 className=" text-[.9rem] " >Add Subtask</h2>
              </div>

              <div className=" cursor-pointer flex gap-[.2rem] items-center w-[30%] opacity-[.5] hover:opacity-[.9] duration-300 " >
                <MdGroupAdd />
                <h2 className=" text-[.9rem] " >Assign</h2>
              </div>

            </div>
          </div>
        </>
      )}
    </Draggable>
  )
}
export default Task