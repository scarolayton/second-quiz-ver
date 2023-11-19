import React, {useState, useEffect} from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
export default function BarChart({queryData, queryParameters}) {
  const data = [
    {
      "Day": "2023-11-14",
      "Top_Term": "Karol G en Chile",
      "country_name": "Chile",
      "rank": 1,
      "Total_Score": 27.32100396301189
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Deportivo Cali  Águilas Doradas",
      "country_name": "Colombia",
      "rank": 1,
      "Total_Score": 37.01785714285714
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Novak Djokovic",
      "country_name": "Chile",
      "rank": 2,
      "Total_Score": 21.81242236024845
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Junior",
      "country_name": "Colombia",
      "rank": 2,
      "Total_Score": 16.271040974529345
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Eliminatorias",
      "country_name": "Chile",
      "rank": 3,
      "Total_Score": 10.701298701298699
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Junior de Barranquilla",
      "country_name": "Colombia",
      "rank": 3,
      "Total_Score": 29.869763694951665
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Seleccion chilena",
      "country_name": "Chile",
      "rank": 4,
      "Total_Score": 16.794442465265405
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Cali",
      "country_name": "Colombia",
      "rank": 4,
      "Total_Score": 26.072292256238743
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Game Awards 2023",
      "country_name": "Chile",
      "rank": 5,
      "Total_Score": 31.500869565217393
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Novak Djokovic",
      "country_name": "Colombia",
      "rank": 5,
      "Total_Score": 28.763001190948792
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Colo Colo Femenino",
      "country_name": "Chile",
      "rank": 6,
      "Total_Score": 22.946363636363635
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Test lenguaje del.amor",
      "country_name": "Colombia",
      "rank": 6,
      "Total_Score": 33.60936007640879
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Kevin Turen",
      "country_name": "Chile",
      "rank": 7,
      "Total_Score": 33.28606965174129
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Jesus Ociel Baena",
      "country_name": "Colombia",
      "rank": 7,
      "Total_Score": 34.49107142857142
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "El Mercurio Karol Cariola",
      "country_name": "Chile",
      "rank": 8,
      "Total_Score": 36.61920529801325
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Julieta Venegas",
      "country_name": "Colombia",
      "rank": 8,
      "Total_Score": 28.617391304347823
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Tomás Barrios",
      "country_name": "Chile",
      "rank": 9,
      "Total_Score": 28.094276094276093
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Armero",
      "country_name": "Colombia",
      "rank": 9,
      "Total_Score": 8.899298597194386
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Clasificatorias Sudamericanas",
      "country_name": "Chile",
      "rank": 10,
      "Total_Score": 25.60179977502812
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Bills  Broncos",
      "country_name": "Colombia",
      "rank": 10,
      "Total_Score": 43.720000000000006
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Bono por Hijo",
      "country_name": "Chile",
      "rank": 11,
      "Total_Score": 23.451481103166497
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Massimo Dutti",
      "country_name": "Colombia",
      "rank": 11,
      "Total_Score": 33.96561085972851
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Medvedev",
      "country_name": "Chile",
      "rank": 12,
      "Total_Score": 22.979066022544284
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Rihanna",
      "country_name": "Colombia",
      "rank": 12,
      "Total_Score": 13.683948447568836
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Independiente",
      "country_name": "Chile",
      "rank": 13,
      "Total_Score": 27.861506421381463
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Real Oviedo",
      "country_name": "Colombia",
      "rank": 13,
      "Total_Score": 36.6764705882353
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Reajuste Sector publico 2024",
      "country_name": "Chile",
      "rank": 14,
      "Total_Score": 33.97142857142857
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Lakers",
      "country_name": "Colombia",
      "rank": 14,
      "Total_Score": 17.193144208037822
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Villarreal",
      "country_name": "Chile",
      "rank": 15,
      "Total_Score": 14.551042810098796
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Atlético Nacional  Millonarios",
      "country_name": "Colombia",
      "rank": 15,
      "Total_Score": 34.53971962616823
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Lakers",
      "country_name": "Chile",
      "rank": 16,
      "Total_Score": 14.085891954916445
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Liga BetPlay",
      "country_name": "Colombia",
      "rank": 16,
      "Total_Score": 28.79663804129363
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Guia de beneficios sociales 2023",
      "country_name": "Chile",
      "rank": 17,
      "Total_Score": 33.145762711864414
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Chelsea  Manchester City",
      "country_name": "Colombia",
      "rank": 17,
      "Total_Score": 33.015679442508706
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Rihanna",
      "country_name": "Chile",
      "rank": 18,
      "Total_Score": 7.5509065550906564
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Barcelona",
      "country_name": "Colombia",
      "rank": 18,
      "Total_Score": 28.717636022514082
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Deportivo Cali",
      "country_name": "Chile",
      "rank": 19,
      "Total_Score": 12.704013377926422
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Liverpool  Brentford",
      "country_name": "Colombia",
      "rank": 19,
      "Total_Score": 35.91769041769042
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Javier Milei",
      "country_name": "Chile",
      "rank": 20,
      "Total_Score": 20.263862332695986
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "América vs Medellín",
      "country_name": "Colombia",
      "rank": 20,
      "Total_Score": 30.724787935909518
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Haaland",
      "country_name": "Chile",
      "rank": 21,
      "Total_Score": 24.245787332945962
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Liverpool vs Brentford",
      "country_name": "Colombia",
      "rank": 21,
      "Total_Score": 34.89189189189189
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Teleton 2023",
      "country_name": "Chile",
      "rank": 22,
      "Total_Score": 17.53646477132262
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "America hoy",
      "country_name": "Colombia",
      "rank": 22,
      "Total_Score": 15.00172413793103
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Chelsea  Manchester City",
      "country_name": "Chile",
      "rank": 23,
      "Total_Score": 30.527522935779814
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Love Language Test",
      "country_name": "Colombia",
      "rank": 23,
      "Total_Score": 35.38461538461539
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Barcelona",
      "country_name": "Chile",
      "rank": 24,
      "Total_Score": 27.385313531353138
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Liga colombiana",
      "country_name": "Colombia",
      "rank": 24,
      "Total_Score": 25.451002648505487
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Chelsea vs Manchester City",
      "country_name": "Chile",
      "rank": 25,
      "Total_Score": 30.591608391608386
    },
    {
      "Day": "2023-11-14",
      "Top_Term": "Atlético Madrid  Villarreal",
      "country_name": "Colombia",
      "rank": 25,
      "Total_Score": 35.4804347826087
    }
  ]
  const [options, setOptions] = useState({})
  useEffect(() => {
    if(queryParameters.second_country === ''){
      setOptions({
        chart: {
          type: 'column'
        },
        title: {
          text: `Top ${queryParameters.query_quantity} terms in ${queryParameters.first_country} on ${queryParameters.first_date}`,
          align: 'left'
        },
        subtitle: {
          text:
              'Remember that the score is index from 0–100 that denotes how popular this term was for a country’s region during the current date, relative to the other dates in the same time series for this term',
          align: 'left'
        },
        xAxis: {
          title: {
            text: 'rank'
          },
          categories: queryData.map(query => query.rank),
          accessibility: {
            description: 'Top terms'
          }
        },
        yAxis: {
          title: {
            text: 'score'
          }
        },
        plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
        }, 
        series: [
          {
            name: `${queryData[0].country_name}`,
            data: queryData.map(query => ({
              y: Math.round(query.Total_Score),
              name: query.Top_Term // Esto muestra el Top_Term como label
            })),
          }
        ]
      })
    }else {
      const firstDataSet = queryData.filter(query => query.country_name === queryParameters.first_country)
      const secondDataSet = queryData.filter(query => query.country_name === queryParameters.second_country)
      setOptions({
        chart: {
          type: 'column'
        },
        title: {
          text: `Top ${queryParameters.query_quantity} terms in ${queryParameters.first_country} and ${queryParameters.second_country} on ${queryParameters.first_date}`,
          align: 'left'
        },
        subtitle: {
          text:
              'Remember that the score is index from 0–100 that denotes how popular this term was for a country’s region during the current date, relative to the other dates in the same time series for this term',
          align: 'left'
        },
        xAxis: {
          title: {
            text: 'rank'
          },
          categories: firstDataSet.map(query => query.rank),
          accessibility: {
            description: 'Top terms'
          }
        },
        yAxis: {
          title: {
            text: 'score'
          }
        },
        plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
        }, 
        series: [
          {
            name: `${firstDataSet[0].country_name}`,
            data: firstDataSet.map(query => ({
              y: Math.round(query.Total_Score),
              name: query.Top_Term 
            })),
          },
          {
            name: `${secondDataSet[0].country_name}`,
            data: secondDataSet.map(query => ({
              y: Math.round(query.Total_Score),
              name: query.Top_Term 
            })),
          }
        ]
      })
    }
  }, [])
  return (
    <HighchartsReact highcharts={Highcharts} options={options}/>
  )
}
