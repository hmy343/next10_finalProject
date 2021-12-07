import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function KwRadar({data1,data2}){
  const canvasDom = useRef(null);

  // console.log(data2)
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: 'radar',
      data: {
        labels: data1,
        datasets:[
          {
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: data2,
            borderColor: 'rgb(255, 99, 132)',
            // pointBorderWidth: 1,
            radius: 3, // 포인트 점 크기
          }          
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
                text: '검색키워드 분포',
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

export default KwRadar;