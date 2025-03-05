import React from 'react'
import Chart from 'react-apexcharts'
import { useState } from 'react';

const Barchat = () => {


    const series =[
        {
            name: "Total Present",
            data: [30, 40, 45, 50, 49]
        },

        {
            name: "Total Absent",
            data: [3, 10, 5, 15, 6]
        }
    ];

    const options ={
        chart: {
        id: "basic-bar",
        },
      xaxis: {
        tickPlacement:'on',
       categories: ['Mon', 'Tue', 'Wed', 'Thur','Fri']
       },
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
            borderRadius:8,
            columnWidth:38
        }
       }

    }
  return (
   <Chart 
    series={series}
    options={options}
     type="bar"
     width="87%"
    

   />
  )
}

export default Barchat