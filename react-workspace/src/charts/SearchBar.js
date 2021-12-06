import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function SearchBar(){
  const canvasDom = useRef(null);
  const labels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  const data = [282.5,246.2,197.1,181.3,163.3,154.6,133.2,110.5,84.5,77.9,62.6,56.6,49.3,45.8,45.3,32.7,27.4,25.0,20.8,19.7,19.7,17.9,8.9,8.3,4.4,3.3]
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "bar",
      data:{
        labels:labels,
        datasets:[
          {
            data:data,
            label: '총방문자수'
          },
        ],
      },
      options:{
        backgroundColor:'#6495ED',
        responsive: true,
        interaction: { // 호버를 했을 때 뜨는 튤팁에 index 값들이 모두 보여짐.
          mode: 'index'
        },
        plugins: {
          legend: { // 범례설정
            position: 'bottom',
            align: 'center',
          },
          subtitle: { // 차트 제목
            display: true,
            text: '주요관광지 총 방문자수',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
            },
            padding: {
              bottom: 40
            }
          }
        },
        scales: { //축 설정
          y: {
            axis: 'y', // 'y'라는 id가진 y축에 대한 설정
            display: true,
            position: 'left',
            ticks: {
              stepSize: 100,
              max: 300
            },
            title: {
              display: true,
              align: 'end',
              text: '단위: 만명'
            },
            grid: {
              display: false
            }
          },
          x: {
            grid:{
              display: false
            }
          }
        }
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

export default SearchBar;