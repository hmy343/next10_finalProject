import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React, { useRef } from 'react';


function StackedBar({d1,d2,d3,d4}) {
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)']
  const labels = d1
  const data = {
    labels: labels,
    datasets: [
      {
        label: '관광자원분포',
        data: d2,
        backgroundColor: colors[0],
        stack: 'Stack 0',
        // datalabels:{
        //   align:'end',
        //   anchor:'start'
        // }
      },
      {
        label: '관광인프라',
        data: d3,
        backgroundColor: colors[1],
        stack: 'Stack 0',
      },
      {
        label: '지역관광효과',
        data: d4,
        backgroundColor: colors[2],
        stack: 'Stack 1',
      },
    ]
  }
  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        scales: { // x축, y축 설정
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: { // 범례설정
            position: 'bottom',
            align: 'center',
            padding: 20
          },
          subtitle: { // 차트 제목
            display: true,
            text: '구별 관광지수 현황(중분류)',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
            },
            padding: {
              bottom: 20
            }
          }
        }
      }
    })
  }, []);
  return (
    <div>
      <div className="chart-container">
        <canvas ref={canvasDom} height="180"></canvas>
      </div>
    </div>
  );
}

export default StackedBar;