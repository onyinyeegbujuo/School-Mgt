import React from 'react'
import Chart from 'react-apexcharts'

const Donut = () => {
    const series =[1500,2000];


    const options ={   
        labels: ["Girls", "Boys"],
       colors:['bg-primary',  "#778DA9"],
       tooltip:{
        followCursor:true
       },
       legend:{
        show:true,
        position:'bottom'
       },
       plotOptions:{
        bar:{
            columnWidth:20
        }
       }

    }
  return (
     <Chart 
         series={series}
         options={options}
          type="donut"
          width="80%"
         
     
        />
  )
}

export default Donut