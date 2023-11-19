import React, {useState} from 'react'
import { createUser } from '@/api/user.api';
import { toast } from 'react-toastify';
export default function CreateUserModal({setCreateUserModalIsOpen}) {
   const [userName, setUserName] = useState('');
   const handleCreateUser = async  (e) => {
    e.preventDefault()
    try {
      const body = {"username" : userName}
      const res = await createUser(body)
      localStorage.setItem('user', JSON.stringify(res))
      toast('User created')
      setCreateUserModalIsOpen(false)
    } catch (error) {
      console.error(error)
    }
   }
    return (
    <article className='w-screen min-h-screen fixed top-0 left-0 bg-black bg-opacity-30 z-10 flex justify-center items-center'>
      <div className='bg-slate-50 text-center  rounded-lg '>
        <h4 className='my-5 text-base'>To do any action in the app you must create a user</h4>
        <form onSubmit={handleCreateUser} method='post' className='flex flex-col gap-10 px-16 pb-6 o'>
          <input required={true} value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name='name' className='bg-transparent p-1 w-80 border-b border-[#2c6ef0]' placeholder='Your User Name' />
          <button className=' bg-[#2c6ef0] text-slate-50 p-2 mr-3 text-base rounded-full' type='submit'>Create User Name</button>
        </form>
      </div>
    </article>
  )
}
