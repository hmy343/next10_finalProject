import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React, { useRef } from 'react';
// import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';


function VisitCombo() {
  const canvasDom = useRef(null);
  const colors = ['rgb(130,183,223)', 'rgb(47,139,90)']
  const labels = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
  const vstr = [8889,8421,9541,8288,9436,8917,9499,9363,942,956,9433,10069]
  const fest = [1,1,2,6,9,0,2,3,1,11,4,4]
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: '축제 건수',
        data: fest,
        backgroundColor: colors[1],
        yAxisID: 'y_sub',
        borderColor: 'rgb(7,92,46)',
        borderWidth: 1
      },
      {
        type: 'bar',
        label: '방문자 수',
        data: vstr,
        backgroundColor: colors[0],
        yAxisID: 'y'
      }     
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
            text: '부산시 월별 방문자 수 및 축제 건수',
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
              stepSize: 2000, // y축 단위
              max: 12000
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
          y_sub: { // y축 추가. 'y_sub'라는 id가진 y축에 대한 설정
            position: 'right',
            ticks: {
              stepSize: 2,
              max: 12
            },
            title: {
              display: true,
              align: 'end',
              text: '단위: 건'
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

export default VisitCombo;