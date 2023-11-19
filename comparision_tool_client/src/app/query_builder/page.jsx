'use client'
import React, { useState } from 'react'
import LineChart from '@/components/lineChart';
import QueryForm from '@/components/queryForm';
import BarChart from '@/components/barChart';
import SaveAQueryModal from '@/components/saveAQueryModal';
import SaveQueryButton from '@/components/saveQueryButton';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '@/components/loader';
import { createPortal } from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
export default function MakeAQueryPage() {
  const [queryIsloading, setQueryIsloading] = useState(false)
  const [queryParameters, setQueryParameters] = useState({
    first_country : '',
    second_country: '',
    first_date: '',
    second_date: '',
    query_quantity: ''
  })
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [queryData, setQueryData] = useState([])
  return (
    <main className='bg-slate-100 min-h-screen'>
      {modalIsOpen && createPortal(<SaveAQueryModal toast={toast} queryParameters={queryParameters} setModalIsOpen={setModalIsOpen} />, document.body)}
      <div className='flex justify-center items-center py-10 bg-slate-200'>
        <QueryForm queryParameters={queryParameters} setQueryIsloading={setQueryIsloading} setQueryData={setQueryData} setQueryParameters={setQueryParameters}/>
      </div>
        <>
        {queryIsloading ? (
          <Loader/>
        ):(
          <>
            {queryData.length !== 0 ? (
              <div className='w-2/3   bg-white rounded-xl m-auto mt-10 pt-5'>
                <SaveQueryButton setModalIsOpen={setModalIsOpen} />
                {queryParameters.first_date === queryParameters.second_date ? (
                  <BarChart queryData={queryData} queryParameters={queryParameters}/>
                  ):(
                    <LineChart queryParameters={queryParameters} queryData={queryData}/>
                    )}
              </div>
            ):(

              <p>make the query</p>
            )}
          </>
        )}
      </>
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
