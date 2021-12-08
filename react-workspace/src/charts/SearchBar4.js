import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';


function SearchBar4({ data }) {

  // 1. 대분류 항목끼리 그룹핑해서 배열로 담기
  const dataArr = Array.from(data);
  var gan1 = [];
  var gan2 = [];
  var gan3 = [];
  var gan4 = [];
  dataArr.map(item => {
    switch (item.key_word) {
      case '자연관광지':
        gan1.push(item);
        break;
      case '휴양관광지':
        gan2.push(item);
        break;
      case '기타관광지':
        gan3.push(item);
        break;
      case '역사관광지':
        gan4.push(item);
        break;
    }
  });
  // console.log(gan4);


  // 2. 방문자수 뽑아내기
  const vstrArr4 = [];

  gan4.map(item => { // 역사관광지 방문자수
    vstrArr4.push(item.vstr_total)
  });
  // console.log(vstrArr4);


  // 3. 역사관광지 뽑아내기
  const nm4 = [];
  gan4.map(item => { // 역사관광지 관광지명
    nm4.push(item.tour_ds_nm)
  });
  console.log(nm4);


  // 4. 라벨 뽑아내기 (중복값 제거해서 map => Set)
  let key_word4 = [...new Set(gan4.map(item => item.key_word))];
  console.log(key_word4)


  const colors = ['rgb(255, 205, 86)']

  const chartData = {
    labels: nm4,
    datasets: [
      {
        axis: 'y',
        label: key_word4,
        data: vstrArr4,
        backgroundColor: colors,
      }
    ],
  }

  const option = {
    type: 'bar',
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { // 범례설정
        position: 'bottom',
        align: 'center',
      },
      subtitle: { // 차트 제목
        display: true,
        text: '부산시 주요관광지 방문자수(역사)',
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
        axis: 'y',  
        display: true,
        position: 'left',
        
        grid: {
          display: false
        }
      },
      x: {
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
      }
    }
  }

return (
    <div>
      <div className="chart-container">
        <Bar data={chartData} options={option}/>
      </div>
    </div>
)};


export default SearchBar4;