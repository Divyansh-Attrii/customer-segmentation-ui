import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-15 w-15 flex justify-center items-center text-2xl font-semibold">
          {props.id+1}
        </h2>
        <div>
          <p className="text-shadow-10xl text-l leading-relaxed text-white mb-10">
            {props.context}
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full">{props.tag}</button>
            <button className="bg-blue-600 text-white font-semibold p-3 rounded-full text-lg">
              <ArrowRight size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent