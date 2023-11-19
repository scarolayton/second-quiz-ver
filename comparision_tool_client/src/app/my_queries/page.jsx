import React from 'react'
import Postcontainer from '@/components/postContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function myQueriesPage() {
  return (
    <div className='flex justify-center flex-col items-center border-x border-black border-opacity-30'>
      <Postcontainer title="Your saved queries"/>
      <ToastContainer
          position="bottom-left"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}
