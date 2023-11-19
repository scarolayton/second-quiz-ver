import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaComments } from "react-icons/fa";
export default function InteractionButtons() {
  return (
    <div className='my-2 text-xl flex gap-3 text-gray-800'>
      <button>
        <IoMdHeartEmpty/>
      </button>
    </div>
  )
}
