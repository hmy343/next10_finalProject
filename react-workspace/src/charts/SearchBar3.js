import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';


function SearchBar3({ data }) {

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
  // console.log(gan3);


  // 2. 방문자수 뽑아내기
  const vstrArr3 = [];

  gan3.map(item => { // 기타관광지 방문자수
    vstrArr3.push(item.vstr_total)
  });
  // console.log(vstrArr3);


  // 3. 기타관광지 뽑아내기
  const nm3 = [];
  gan3.map(item => { // 기타관광지 관광지명
    nm3.push(item.tour_ds_nm)
  });
  console.log(nm3);


  // 4. 라벨 뽑아내기 (중복값 제거해서 map => Set)
  let key_word3 = [...new Set(gan3.map(item => item.key_word))];
  console.log(key_word3)


  const colors = ['rgb(75, 192, 192)']

  const chartData = {
    labels: nm3,
    datasets: [
      {
        axis: 'y',
        label: key_word3,
        data: vstrArr3,
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
        text: '부산시 주요관광지 방문자수(기타)',
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


export default SearchBar3;