import React, { useState } from 'react'
import CreateUserModal from './createUserModal'
import { createPortal } from 'react-dom'
export default function SaveQueryButton({setModalIsOpen}) {
  const user = localStorage?.getItem('user')
  const [createUserModalIsOpen, setCreateUserModalIsOpen] = useState(false)
  const handleSaveQuery = () => {
    if(user){
      setModalIsOpen(true)
    }else {
      setCreateUserModalIsOpen(true)
      
    }
  }
  return (
    <>
      <div className='w-full flex justify-end items-end pt-3'>
      {createUserModalIsOpen && createPortal(<CreateUserModal setCreateUserModalIsOpen={setCreateUserModalIsOpen} />, document?.body)}
        <button  onClick={handleSaveQuery} className=' bg-[#2c6ef0] text-slate-50 p-2 mr-3 rounded-full'>Save Query</button>
      </div>
    </>
  )
}
