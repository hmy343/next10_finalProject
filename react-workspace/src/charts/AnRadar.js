import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function AnRadar({d1,d2}){
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)', 'rgb(201, 203, 207)']
  
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "radar",
      data:{
        labels:d1,
        datasets:[
          {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: d2,
            borderColor: 'rgb(255, 99, 132)',
            // pointBorderWidth: 1,
            radius: 3, // 포인트 점 크기
          },
        ],
      },
      options:{
        responsive: true,
        scale: {
          ticks: {
              beginAtZero: true,
              max: 40,
              min: 0,
              stepSize: 10,
              // font: {
              //     size: 10
              // }
          }
        },
        plugins: {
          legend:{
            display:false
          },
            subtitle: { // 차트 제목
                display: true,
                text: '부산시 관광지수 분포',
                color: 'black',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                padding: {
                  bottom: 20
                }          
            },          
        },
      }
    });
  },[]);

  return(
    <div>
      <div className="chart-container">
        <canvas ref={canvasDom} height="180"></canvas>
      </div>
    </div>
  );
}

export default AnRadar;