import { Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from 'react';
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";


const Column = ({ data, children }) => {
  const [winReady, setWinReady] = useState(false);

  console.log(
    "data in column", data
  )
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "#3e4356" : "",
  });

  useEffect(() => {
    setWinReady(true);
  }, [])

  return (
    <div className=" flex flex-col h-[calc(100vh-4rem)] overflow-hidden w-[20rem] shrink-0    ">
      <div className="uppercase w-[100%] h-[5.8rem] text-[1.3rem] shadow-lg flex justify-between px-[1rem] items-center gap-[.3rem]  border-l-2 border-r-2 border-t-2 rounded-t-lg border-[#20253a] bg-[#101935] ">

        <div className=" flex items-center gap-[.35rem] " >
          <BsFillBookmarkStarFill className="text-green-500 text-[1.1rem] mt-[.15rem]  " />
          {data.name}
          <span className="flex ml-[.2rem] border-[1px] border-[#20253a] mt-[.15rem] items-center justify-center bg-[#313e5e] w-[1.9rem] h-[1.5rem] rounded-xl text-[.9rem] " >{data.tasks.length}</span>
        </div>
        <div className="flex items-center " >
          <button className="flex items-center text-[.9rem] gap-[.3rem] bg-[#212c47] hover:bg-[#6C72FF] duration-300 hover:text-white px-[.5rem] py-[.3rem] rounded-md " >
            <MdAssignmentAdd />
            Add task
          </button>
        </div>
      </div>



      {
        winReady ? (
          <div className={` flex flex-col gap-[1rem] bg-[#212c47] border-t-[2px] border-[#2a2e3e]  `}>
            <Droppable droppableId={data.name}  >
              {(provided, snapshot) => (
                <ul className="flex flex-col h-[calc(100vh-12rem)]  px-[1rem] pt-[1rem] pb-[1rem] gap-5 scrollbar-track-transparent overflow-y-scroll " {...provided.droppableProps} ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {children}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        ) : (null)}


    </div>
  )
}
export default Column