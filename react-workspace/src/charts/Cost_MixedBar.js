import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React, { useRef } from 'react';


function Cost_MixedBar() {
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 205, 86)', 'rgb(75, 192, 192)']
  const labels = ['중구', '금정구', '수영구','서구', '기장군','영도구','부산진구','남구','사하구','해운대구','강서구']
  const visitors = [33784643, 33826, 1624442, 453164,626000,615022,4961205,197722,668563,7340905,493716]
  const expense = [827,372,74,2,4543,89,93,6149,1]
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: '방문자수',
        data: visitors,
        backgroundColor: colors[0],
        yAxisID: 'y'
      },
      {
        type: "bar",
        label: '관광지출액',
        data: expense,
        backgroundColor: colors[1],
        yAxisID: 'y_sub'
      },
    ]
  }
  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    new Chart(ctx, {

      data: data,
      options: {
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
              stepSize: 5000000,
              max: 32000000
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
              max: 7000
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
      },
    })
  },[]);

return (
  <div>
    <div className="chart-container">
      <canvas ref={canvasDom} height="180"></canvas>
    </div>
  </div>
);
}

export default Cost_MixedBar;