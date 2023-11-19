'use client'
import React, { useState, useEffect } from 'react'
import LineChart from '@/components/lineChart';
import QueryForm from '@/components/queryForm';
import BarChart from '@/components/barChart';
import SaveQueryButton from '@/components/saveQueryButton';
import Loader from '@/components/loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveAQueryModal from '@/components/saveAQueryModal';
import { createPortal } from 'react-dom';
import {getASavedQuery} from '@/api/savedQueries.api'
export default function ConsultQueryPage({params}) {
  const [loading, setLoading] = useState(true)
  const [queryIsloading, setQueryIsloading] = useState(false)
  const [queryParameters, setQueryParameters] = useState({
    first_country : '',
    second_country: '',
    first_date: '',
    second_date: '',
    query_quantity: ''
  })
  useEffect(() => {
    const fetchQuery = async  () => {
      try {
        const res =  (await getASavedQuery(params.query_id)).data

        setQueryParameters({
          first_country : res.first_country,
          second_country: res.second_country === null ? '' : res.second_country,
          first_date: res.first_date,
          second_date: res.second_date,
          query_quantity: res.query_quantity.toString()
        })
      }catch(err) {
        console.error(err)
      }
      // console.log(res);
      setLoading(false)
    }
    fetchQuery()
    console.log(queryParameters);
    },[])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [queryData, setQueryData] = useState([])
  return (
    <main className='bg-slate-100 min-h-screen'>
      {loading ? (
        <Loader/>
      ):(
        <>
        {modalIsOpen && createPortal(<SaveAQueryModal queryParameters={queryParameters} setModalIsOpen={setModalIsOpen} />, document.body)}
      <div className='flex justify-center items-center py-10 bg-slate-200'>
        <QueryForm queryParameters={queryParameters} setQueryIsloading={setQueryIsloading} setQueryParameters={setQueryParameters} setQueryData={setQueryData}/>
      </div>
      {queryData.length !== 0 ? (
        <>
          {queryIsloading ? (
            <Loader/>
          ) : (

          <div className='w-2/3   bg-white rounded-xl m-auto mt-10 pt-5'>
            <SaveQueryButton setModalIsOpen={setModalIsOpen} />
            {queryParameters.first_date === queryParameters.second_date ? (
              <BarChart queryData={queryData} queryParameters={queryParameters}/>
              ):(
                <LineChart queryParameters={queryParameters} queryData={queryData}/>
                )}
          </div>
          )}
        </>
      ):(
        <>
          {queryIsloading ? (
            <Loader/>
          ):(
            <p>make the query</p>
          )}
        </>
      )}
      </>
      )}
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
  </main>
  )
}
