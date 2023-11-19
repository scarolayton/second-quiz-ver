import React from 'react'

export default function Loader() {
  return (
    <div className='flex space-x-2 justify-center items-center bg-black bg-opacity-50 h-screen dark:invert'>
      <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-amber-500  bg-opacity-70 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-amber-500  bg-opacity-50 rounded-full animate-bounce'></div>
    </div>
  )
}
