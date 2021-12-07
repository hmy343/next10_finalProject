import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function KwRadar(){
  const canvasDom = useRef(null);
  const labels = ['문화/관광/여가서비스업','관광쇼핑업','관광식음료업','관광숙박업','관광운수업','여행서비스업']
  const value=[12,33,15,25,9,6]
  const data={
    labels: labels,
    datasets:[
      {
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: value,
        borderColor: 'rgb(255, 99, 132)',
        // pointBorderWidth: 1,
        radius: 3, // 포인트 점 크기
      }
    ]
  }
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: 'radar',
      data: data,
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