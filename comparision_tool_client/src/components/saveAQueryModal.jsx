import React, { useState } from 'react'
import { createSavedQuery } from '@/api/savedQueries.api';
import { toast } from 'react-toastify';
export default function SaveAQueryModal({queryParameters, setModalIsOpen}) {
  const [queryName, setQueryName] = useState('');
  const [queryDescription, setQueryDescription] = useState('');
  const user = JSON.parse(localStorage.getItem('user'))
  const handleSaveQuery = async (e) => {
    e.preventDefault()
    console.log(user.id);
    const body = {
      first_country : queryParameters.first_country,
      second_country: queryParameters.second_country,
      first_date: queryParameters.first_date,
      second_date: queryParameters.second_date === '' ? queryParameters.first_date : queryParameters.second_date,
      query_quantity: queryParameters.query_quantity,
      user: user.id,
      query_description: queryDescription,
      query_name: queryName
    }
    console.log();
    try {
      const res = await createSavedQuery(body)
      console.log(res);
      toast('Query succesfully saved')
      setModalIsOpen(false)
    } catch (error) {
      console.error(error)
    }
  }
    return (
      <>
      <article className='w-screen min-h-screen fixed top-0 left-0 bg-black bg-opacity-30 z-10 flex justify-center items-center'>
        <div className='bg-slate-50 text-center  rounded-lg'>
          <h4 className='my-5 text-lg'>Save your query</h4>
          <form onSubmit={handleSaveQuery} method='post' className='flex flex-col gap-10 px-16 pb-6 o'>
            <input required={true} value={queryName} onChange={(e) => setQueryName(e.target.value)} type="text" name='name' className='bg-transparent p-1 w-80 border-b border-[#2c6ef0]' placeholder='name of your query' />
            <textarea required={true} value={queryDescription} onChange={(e) => setQueryDescription(e.target.value)} rows={5}  name='description' placeholder='description of your query' className='resize-none rounded border border-[#2c6ef0]' />
            <button className=' bg-[#2c6ef0] text-slate-50 p-2 mr-3 text-base rounded-full' type='submit'>Save query</button>
          </form>
        </div>
      </article>
        
      </>
  )
}
