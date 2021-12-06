import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function Cost_Pie(data1,data2){
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)', 'rgb(201, 203, 207)']
  const labels = ['요식/유흥', '교육/학원', '의류/잡화', '미용', '스포츠/문화/레저', '음/식료품', '여행/교통', '가전/가구', '가정생활/서비스', '주유', '자동차', '온라인거래']
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "pie",
      data:{
        labels: labels,
        datasets:[
          {
            label:'data',
            data:[639.5,161.6,212.1,33.2,34.8,24.8,26.1,18.5,28.4,15.1,11.9,3.7,6.1,1.5],
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

export default Cost_Pie;