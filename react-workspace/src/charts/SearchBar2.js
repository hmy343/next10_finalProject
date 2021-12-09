import React, { useRef } from 'react';
import {Bar} from 'react-chartjs-2';


function SearchBar2({ data }) {
  const canvasDom = useRef(null);

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
  // console.log(gan1);

  // 2. 방문자수 뽑아내기
  const vstrArr3 = [];
  const vstrArr4 = [];

  gan3.map(item => { // 기타관광지 방문자수
    vstrArr3.push(item.vstr_total)
  });

  gan4.map(item => { // 역사관광지 방문자수
    vstrArr4.push(item.vstr_total)
  });
  // console.log(vstrArr3);
  // console.log(vstrArr4);


  // 3. 관광지명 뽑아내기(기타, 역사)
  const nm3 = [];
  const nm4 = [];

  gan3.map(item => { // 기타관광지 관광지명
    nm3.push(item.tour_ds_nm)
  });
  gan4.map(item => { // 역사관광지 관광지명
    nm4.push(item.tour_ds_nm)
  });
  console.log(nm3);
  console.log(nm4);
 
  // 4. 3,4번 한 배열로 합치기
  const new_vstr2 = vstrArr3.concat(vstrArr4)
  console.log(new_vstr2)
  const new_nm2 = nm3.concat(nm4)
  console.log(new_nm2)
  

  // 5. 라벨 뽑아내기 (중복값 제거해서 map => Set)
  let key_word3 = [...new Set(gan3.map(item => item.key_word))];
  let key_word4 = [...new Set(gan4.map(item => item.key_word))];
  console.log(key_word3)
  console.log(key_word4)


  const colors = ['rgb(255, 159, 64)', 'rgb(201, 203, 207)']

  const chartData = {
    labels: new_nm2,
    datasets: [
      {
        axis: 'y',
        data: new_vstr2,
        backgroundColor: [colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1],colors[1],colors[1]]
      }
    ],
  }

  const option = {
    type: 'bar',
    indexAxis: 'y', // 가로막대 그래프 축 변경
    responsive: true,
    plugins: {
      legend: { // 범례설정
        display:false
      },
      subtitle: { // 차트 제목
        display: true,
        text: '부산시 주요관광지 방문자수(기타, 역사)',
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


export default SearchBar2;