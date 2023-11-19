'use client'
import React,{useEffect, useState} from 'react'
import InteractionButtons from './interactionButtons'
import Comments from './comments'
import { createPortal } from 'react-dom'
import CreateUserModal from './createUserModal'
import Link from 'next/link'
import Loader from './loader'
import { getSavedQueryByUser } from '@/api/savedQueries.api'
import { getAllTheSavedQueries } from '@/api/savedQueries.api'
export default function Postcontainer({title}) {
  const user = JSON.parse(localStorage.getItem('user'))
  const [savedQueries, setSavedQueries] = useState([])
  const [loading, setLoading] = useState(true)
  const [createUserModalIsOpen, setCreateUserModalIsOpen] = useState(false)
  useEffect(() => {
    if(title === 'Your saved queries' && user){
      const fetchSavedQueriesByUser = async () => {

          try {
            const res = await getSavedQueryByUser(user.id)
            console.log(res);
            setSavedQueries(res.data)
            setLoading(false)
          } catch (error) {
            console.error(error)
          }
      }
      fetchSavedQueriesByUser()
    }else if(title === 'You can check the queries of our users') {
      const fetchAllTheSavedQueries = async () => {
        try {
          const res = await getAllTheSavedQueries()
          setSavedQueries(res.data)
          setLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
      fetchAllTheSavedQueries()
    }else {
      setLoading(false)
      setCreateUserModalIsOpen(true)
    }
  },[])
  return (
    <div className=" border-x-2  border-black border-opacity-10  w-1/2">
      {createUserModalIsOpen && createPortal(<CreateUserModal setCreateUserModalIsOpen={setCreateUserModalIsOpen} />, document?.body)}
      <h3 className="text-2xl font-medium  p-3">{title}</h3>
      {loading ? (
        <Loader/>
      ):(
        <>
          {savedQueries.map(savedQuery => (
            <div key={savedQuery.id} className='p-3 border-y-2'>
              <div className='flex mb-2'>
                <Link href={`/query_builder/${savedQuery.id}`} className='font-semibold text-gray-900'>{savedQuery.query_name}</Link>
                <p className='ml-1 text-slate-500 font-medium'>@{savedQuery.user.username ? savedQuery.user.username : user.username}</p>
              </div>
              <p className='text-gray-900'>{savedQuery.query_description}</p>
              <InteractionButtons/>
              <Comments  savedQueryId={savedQuery.id}/>
            </div>
          ))}
        </>
        
      )}
    </div>
    
  )
}
