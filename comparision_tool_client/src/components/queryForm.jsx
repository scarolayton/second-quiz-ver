import React, { useState, useEffect } from 'react'
import countries from '@/static/countriesArray.js'
import { getTheGoogleQuery } from '@/api/googleQuery.api';

export default function QueryForm({setQueryParameters, queryParameters, setQueryData, setQueryIsloading}) {
  const today = new Date();
  today.setDate(today.getDate() - 2);
  const maxDate = today.toISOString().split('T')[0];
  const [secondDateIsDisabled, setSecondDateIsDisabled] = useState(true)
  const [firstCountry, setFirstCountry] = useState(queryParameters.first_country)
  const [secondCountry, setSecondCountry] = useState(queryParameters.second_country)
  const [fisrtDate, setFirstDate] = useState(queryParameters.first_date)
  const [secondDate, setSecondDate] = useState(queryParameters.second_date)
  const [queryQuantity, setQueryQuantity] = useState(queryParameters.query_quantity)
  const fetchGoogleQuery = async (updatedQueryParameters) => {
    setQueryIsloading(true)
    try {
      console.log(queryParameters);
      const res = await getTheGoogleQuery(updatedQueryParameters);
      console.log(res.data.query_res);
      setQueryData(res.data.query_res)
      setQueryIsloading(false)
      
    } catch (error) {
      console.error(error); // Manejar errores aquí
    }
  };
  useEffect(() => {
    if(queryParameters.first_country !== ''){
      fetchGoogleQuery(queryParameters)
    }
  }, [])
  const makeTheQuery = async (e) => {
    e.preventDefault();
    const updatedQueryParameters = {
      first_country: firstCountry,
      second_country: secondCountry,
      first_date: fisrtDate,
      second_date: secondDate === "" ? fisrtDate : secondDate,
      query_quantity: queryQuantity
    };
   
    setQueryParameters(updatedQueryParameters);
    fetchGoogleQuery(updatedQueryParameters); 
  };
  const handleQueryQuantityChange = (e) => {
    setQueryQuantity(e.target.value)
    if(e.target.value === "1"){
      setSecondDateIsDisabled(false)
    }else {
      setSecondDateIsDisabled(true)
      setSecondDate("")
    }
  }
  return (
    <form method='post' onSubmit={makeTheQuery} className='bg-slate-50 px-5 pt-4 pb-1 rounded-xl'>
        <select
          value={firstCountry}
          required={true}
          className='border border-black border-opacity-30 p-3 rounded-lg mx-2'
          name="first_country"
          id="first_country"
          onChange={(e) => setFirstCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>
        <select value={secondCountry} onChange={(e) => setSecondCountry(e.target.value)} className='border border-black border-opacity-30 p-3  rounded-lg mx-2' name="second_country" id="second_country">
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option value={country} key={index}>{country}</option>
          ))}    
        </select>
        <select required={true} value={queryQuantity} onChange={handleQueryQuantityChange}   className='border border-black border-opacity-30 p-3  rounded-lg mx-2' name="query_quantity" id="query_quantity">
          <option value="">Select the quantity</option>
          <option value="1">Top Term</option>
          <option value="10">10 Top Terms</option>
          <option value="15">15 Top Terms</option>
          <option value="25">25 Top Terms</option>
        </select>
        <input required={true} value={fisrtDate} onChange={(e) => setFirstDate(e.target.value)} className='border border-black border-opacity-30 p-3 py-3  rounded-lg mx-2' type="date" max={maxDate} name='first_date' id='first_date' />
        <input disabled={secondDateIsDisabled} value={secondDate} onChange={(e) => setSecondDate(e.target.value)} className='border border-black border-opacity-30 p-3 py-3 rounded-lg mx-2' type="date" max={maxDate} name='second_date' id='second_date' />
        <button className='bg-[#2c6ef0] text-slate-50 p-2 ml-2 rounded-full'>
          Run query
        </button>
        <p className='text-sm mt-3 text-gray-500'><strong className='text-red-500'>* </strong>You can make a basic query with just a country an specific day and if you want to get more than one term is limited to search just by an specific day<strong className='text-red-500'>*</strong></p>

      </form>
  )
}
