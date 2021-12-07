import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function ScDonut(){
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(153, 102, 255)', 'rgb(201, 203, 207)']
  const data=[17,5,5,13]
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "doughnut",
      data:{
        labels:['자연관광지','역사관광지','휴양관광지','기타관광지'],
        datasets:[
          {
            label:'data',
            data:data,
            backgroundColor: colors,
          },
        ],
      },
      options:{
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                align : 'center',
                labels: {
                  boxHeight: 10
                }
            },
            subtitle: { // 차트 제목
                display: true,
                text: '부산시 관광지 검색순위 분포',
                color: 'black',
                font: {
                  size: 18,
                  weight: 'bold',
                },
                // padding: {
                //   bottom: -50
                // },
            },          
        },
      }
    });
  },[]);

  return(
    <div>
      <div className="chart-container">
        <canvas ref={canvasDom}></canvas>
      </div>
    </div>
  );
}

export default ScDonut;