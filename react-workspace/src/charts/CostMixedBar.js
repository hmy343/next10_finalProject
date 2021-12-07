import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function CostMixedBar({data1,data2,data3}){
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
            label:'방문자수',
            data:data2,
            borderWidth:1,
            barPercentage:0.7,
            backgroundColor: [ 'red' ],
            yAxisID: 'y'           
          },
          {
            label:'사용금액',
            data:data3,
            borderWidth:1,
            barPercentage:0.7,
            yAxisID: 'y_sub'
          },
        ],
      },
      options:{
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
            text: '부산시 관광사업체 및 관광지출액 현황',
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
              max: 1000
            },
            title: {
              display: true,
              align: 'end',
              text: '단위: 명'
            },
            grid: {
              display: false
            }
          },
          y_sub: { // y축 추가. 'y_sub'라는 id가진 y축에 대한 설정
            position: 'right',
            ticks: {
              stepSize: 1000,
              max: 10000
            },
            title: {
              display: true,
              align: 'end',
              text: '단위: 억 원'
            },
            grid: {
              display: false
            },
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

export default CostMixedBar;