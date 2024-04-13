import React from 'react'

export default function EventsSection() {
  
  const eventData = [
    {
      title: "Theft",
      date: "22/03/23, 11:23",
      location: "KR Puram",
    },
    {
      title: "Robbery",
      date: "23/03/23, 22:45",
      location: "MG Road",
    },
    {
      title: "Burglary",
      date: "24/03/23, 09:15",
      location: "Indiranagar",
    },
    {
      title: "Theft",
      date: "25/03/23, 14:30",
      location: "Koramangala",
    },
    {
      title: "Robbery",
      date: "26/03/23, 18:00",
      location: "Jayanagar",
    },
    {
      title: "Burglary",
      date: "27/03/23, 12:45",
      location: "Whitefield",
    },
    {
      title: "Theft",
      date: "28/03/23, 08:10",
      location: "Marathahalli",
    },
    {
      title: "Robbery",
      date: "29/03/23, 17:20",
      location: "HSR Layout",
    },
    {
      title: "Burglary",
      date: "30/03/23, 13:55",
      location: "Banashankari",
    },
    {
      title: "Theft",
      date: "31/03/23, 10:45",
      location: "Malleshwaram",
    },
    {
      title: "Robbery",
      date: "01/04/23, 22:00",
      location: "Basavanagudi",
    },
    {
      title: "Burglary",
      date: "02/04/23, 15:30",
      location: "Electronic City",
    },
    {
      title: "Theft",
      date: "03/04/23, 08:20",
      location: "Kengeri",
    },
    {
      title: "Robbery",
      date: "04/04/23, 19:10",
      location: "Hebbal",
    },
    {
      title: "Burglary",
      date: "05/04/23, 11:55",
      location: "Yelahanka",
    },
    {
      title: "Theft",
      date: "06/04/23, 16:35",
      location: "Peenya",
    },
    {
      title: "Robbery",
      date: "07/04/23, 09:40",
      location: "Bommanahalli",
    },
    {
      title: "Burglary",
      date: "08/04/23, 14:25",
      location: "Banerghatta Road",
    },
    {
      title: "Theft",
      date: "09/04/23, 18:55",
      location: "Silk Board",
    },
    {
      title: "Robbery",
      date: "10/04/23, 12:00",
      location: "Bellandur",
    },
    {
      title: "Burglary",
      date: "11/04/23, 20:30",
      location: "Domlur",
    },
  ];
  return (
    <div>
<div class="bg-[#1A2852] rounded-md  h-[85vh] px- py-2 ">
                <div className="px-4">
                  <h2 className="text-2xl  font-bold">Crime Feed</h2>
                  <h2 className="text-6xl text-center font-bold my-5">6,143</h2>
                </div>
                <div className="card-scroll h-[65vh] px-4 w-[100%]">
                  <div className=" items-center my-3 justify-between">
                    {/* loop cases here */}
                    <div>
                      {eventData.map((event, index) => (
                        <>
                          <div
                            key={index}
                            className="flex justify-between align-middle mt-2"
                          >
                            <div className="flex  justify-between">
                              <div className="p-1 mt-3 w-3 h-3 rounded-full shadow-lg shadow-[#505979] bg-[#505979]"></div>
                              <h2 className="text-xl p-1 font-medium px-[2rem] text-left">
                                {event.title}
                              </h2>
                            </div>
                            <div className="">
                              <div className="text-sm text-right ">
                                {event.date}
                              </div>
                              <div className="text-sm text-right">
                                {event.location.length > 13
                                  ? `${event.location.slice(0, 10)}...`
                                  : event.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow ml-2 border mt-2 w-[15rem] border-[#505979] pl-2" />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
