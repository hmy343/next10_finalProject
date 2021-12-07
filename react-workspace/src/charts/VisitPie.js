import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function VisitPie({d1,d2}){
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)', 'rgb(201, 203, 207)']
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "pie",
      data:{
        labels: d1,
        datasets:[
          {
            label:'data',
            data:d2,
            backgroundColor: colors,
          },
        ],
      },
      options:{
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                align : 'center'
            },
            subtitle: { // 차트 제목
                display: true,
                text: '지역별 관광지출 분포',
                color: 'black',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                padding: {
                  bottom: 20
                },
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

export default VisitPie;