import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function SearchBar({data1,data2}){
  //console.log('Bar2 => ', data1)
  //console.log('Bar2 => ', data2)
  const canvasDom = useRef(null);
 
  // console.log(data2[0])
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "bar",
      data:{
        labels:data1,
        datasets:[
          {
            label:'총반문자수',
            data:data2
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