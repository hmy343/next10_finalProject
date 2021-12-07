import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
// import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';


function VisitCombo({data}) {

  // 전체 데이터 갖고 있는 배열
  const dataArr = Array.from(data);
  const labels = [];
  const vstr = [];
  const fest = [];
  

  dataArr.map( item => {
    labels.push(item.month);
    vstr.push(item.vstr_total);
    fest.push(item.fest_cnt);
  } );
  

  const colors = ['rgb(130,183,223)', 'rgb(47,139,90)'];


  // 그래프 데이터
  const chartData = {
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

  const option = {
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
  }

return (
  <div>
    <div className="chart-container">
      <Bar data={chartData} option={option}/>
    </div>
  </div>
);
}

export default VisitCombo;