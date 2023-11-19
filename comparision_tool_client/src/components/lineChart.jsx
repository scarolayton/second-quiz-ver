'use client';
import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
export default function LineChart({queryParameters, queryData}) {
  // const [firstDataSet, setFirstDataSet] = useState([])
  // const [secondDataSet, setSecondDataSet] = useState([])
  const [loading, setLoading] = useState(true)

  const data = [
    {
      "Day": "2023-11-13",
      "Top_Term": "Liga BetPlay",
      "country_name": "Colombia",
      "rank": 1,
      "Total_Score": 29.184915285115686
    },
    {
      "Day": "2023-11-13",
      "Top_Term": "Teleton",
      "country_name": "Chile",
      "rank": 1,
      "Total_Score": 7.3076525336091
    },
    {
      "Day": "2023-11-12",
      "Top_Term": "Real Madrid",
      "country_name": "Colombia",
      "rank": 1,
      "Total_Score": 25.3499932641789
    },
    {
      "Day": "2023-11-12",
      "Top_Term": "Teleton 2023",
      "country_name": "Chile",
      "rank": 1,
      "Total_Score": 19.186460807600945
    },
    {
      "Day": "2023-11-11",
      "Top_Term": "Temblor hoy",
      "country_name": "Colombia",
      "rank": 1,
      "Total_Score": 11.905975644293399
    },
    {
      "Day": "2023-11-11",
      "Top_Term": "Tiempo",
      "country_name": "Chile",
      "rank": 1,
      "Total_Score": 40.998450813323025
    },
    {
      "Day": "2023-11-10",
      "Top_Term": "Toulouse  Liverpool",
      "country_name": "Colombia",
      "rank": 1,
      "Total_Score": 33.104289940828394
    },
    {
      "Day": "2023-11-10",
      "Top_Term": "Liverpool",
      "country_name": "Chile",
      "rank": 1,
      "Total_Score": 13.870643642072212
    }
    
  ]
  const [options, setOptions] = useState({})
  useEffect(() => {
    
    if(queryParameters.second_country === ''){
      // setCategories(queryData.map(query => query.Day))
      console.log(queryParameters.second_country);
      const opt = {
        title: {
          text: `Top term in ${queryParameters.first_country} between ${queryParameters.first_date} and ${queryParameters.second_date}`
        },
        subtitle: {
          text:
              'Remember that the score is index from 0–100 that denotes how popular this term was for a country’s region during the current date, relative to the other dates in the same time series for this term',
          align: 'left'
        },
        yAxis: {
          title: {
              text: 'Score'
          }
        },
        xAxis: {
          categories: queryData.map(query => query.Day),
          title: {
            text: 'Days'
          }
        },
        series: [{
          name: `${queryData[0].country_name}`,
          data: queryData.map(query => ({
            y: Math.round(query.Total_Score),
            name: query.Top_Term // Esto muestra el Top_Term como label
          })),
          dataLabels: {
            enabled: true,
            format: '{point.name}' // Define el formato de la etiqueta
          }
        }]
      }
      setOptions(opt)
      setLoading(false)
    }else {
      const firstDataSet = queryData.filter(query => query.country_name === queryParameters.first_country)
      const secondDataSet = queryData.filter(query => query.country_name === queryParameters.second_country)
      const opt = {
        title: {
          text:  `Top term in ${queryParameters.first_country} and ${queryParameters.second_country} between ${queryParameters.first_date} and ${queryParameters.second_date}`
        },
        subtitle: {
          text:
              'Remember that the score is index from 0–100 that denotes how popular this term was for a country’s region during the current date, relative to the other dates in the same time series for this term',
          align: 'left'
        },
        yAxis: {
          title: {
              text: 'Score'
          }
        },
        xAxis: {
          categories: secondDataSet.map(query => query.Day)
        },
        series: [
          {
            name: `${firstDataSet[0]?.country_name}`,
            data: firstDataSet.map(query => ({
              y: Math.round(query.Total_Score),
              name: query.Top_Term // Esto muestra el Top_Term como label
            })),
            dataLabels: {
              enabled: true,
              format: '{point.name}' // Define el formato de la etiqueta
            }
          },
          {
            name: `${secondDataSet[0]?.country_name}`,
            data: secondDataSet.map(query => ({
              y: Math.round(query.Total_Score),
              name: query.Top_Term // Esto muestra el Top_Term como label
            })),
            dataLabels: {
              enabled: true,
              format: '{point.name}' // Define el formato de la etiqueta
            }
          }
        ]
        
      }
      setOptions(opt)
      setLoading(false)
    }
  }, [])
  
 
  return (
    <div >
      {loading ? (
        <p>loading...</p>
      ): (

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        />
      )}
    </div>
  )
}
