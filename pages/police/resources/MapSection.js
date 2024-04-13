import React from 'react'

export default function MapSection() {
  return (
    <div>
      <div class="bg-[#212C47] rounded-md h-[85vh] card-scroll w-[35rem] px-4 py-2">
        <h2 className="text-2xl  font-bold">
          Crime Map - Bengaluru City
        </h2>
        <p className="text-base my-2">
          Areas with High Crimes in the last hour : Shivajinagara,
          Banaswadi, Indiranagar, Whitefield, Electronic City
        </p>

        <div id="map" className="h-[27rem] my-3 bg-[#141d35] "></div>
      </div>
    </div>
  )
}
