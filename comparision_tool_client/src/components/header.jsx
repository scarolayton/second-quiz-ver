import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className='flex px-6 py-5 w-screen items-center border bg-slate-50 border-black border-opacity-30'>
      <h1 className='text-xl mr-10 font-semibold'>Comparision Tool</h1>
      <nav className='flex-grow'>
        <ul className='flex items-center text-lg font-medium w-full'>
          <li className='hover:text-gray-900 mx-8'>  
            <Link href={'/'}>Home</Link>
          </li>
          <li className='hover:text-gray-900 mx-8'>  
            <Link href={'/query_builder'}>Run a query</Link>
          </li>
          <li className='hover:text-gray-900 mx-3 flex-grow text-end'>  
            <Link href={'/my_queries'}>My queries</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
