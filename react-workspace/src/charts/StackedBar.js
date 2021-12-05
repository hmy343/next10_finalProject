import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React, { useRef } from 'react';


function StackedBar() {
  const canvasDom = useRef(null);
  const colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)']
  const labels = ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구']
  const data = {
    labels: labels,
    datasets: [
      {
        label: '관광자원분포',
        data: [0.2537, 0.3711, 0.787, 0.3711, 0.1352, 0.2528, 0.1991, 0.0622, 0.1727, 0.1564, 0.2504, 0.0162, 0.0162, 0.0648, 0.5803, 0.5993],
        backgroundColor: colors[0],
        stack: 'Stack 0',
        // datalabels:{
        //   align:'end',
        //   anchor:'start'
        // }
      },
      {
        label: '관광인프라',
        data: [0.1837, 0.1323, 0.1507, 0.1589, 0.2487, 0.2054, 0.3958, 0.2143, 0.2211, 0.199, 0.2516, 0.148, 0.1397, 0.129, 0.3176, 0.6357],
        backgroundColor: colors[1],
        stack: 'Stack 0',
      },
      {
        label: '지역관광효과',
        data: [0.3404, 0.5226, 0.4126, 0.552, 0.327, 0.5812, 0.9684, 0.4844, 0.4795, 0.5794, 0.255, 0.453, 0.4164, 0.2724, 0.38, 0.9555],
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