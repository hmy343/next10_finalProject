import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function VisitPie(){
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)', 'rgb(201, 203, 207)']
  const labels = ['강원',  '경기',  '경남',  '경북',  '광주',  '대구',  '대전',  '서울',  '세종',  '울산',  '인천',  '전남', '전북',  '제주',  '충남',  '충북']
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "pie",
      data:{
        labels: labels,
        datasets:[
          {
            label:'data',
            data:[2.32, 20.27,17.22, 5.07,1.20,7.97,1.82,20.06,1.04,8.35, 4.16,2.74,1.65,1.75,2.92,1.44],
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
                text: '용도별 관광지출 분포',
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