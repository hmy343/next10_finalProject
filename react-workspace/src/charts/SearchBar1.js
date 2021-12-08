import React, { useRef } from 'react';
import {Bar} from 'react-chartjs-2';


function SearchBar1({ data }) {
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
  const vstrArr1 = [];
  const vstrArr2 = [];

  gan1.map(item => { // 자연관광지 방문자수
    vstrArr1.push(item.vstr_total)
  });

  gan2.map(item => { // 휴양관광지 방문자수
    vstrArr2.push(item.vstr_total)
  });
  // console.log(vstrArr1);
  // console.log(vstrArr2);


  // 3. 관광지명 뽑아내기(자연, 휴양)
  const nm1 = [];
  const nm2 = [];

  gan1.map(item => { // 자연관광지 관광지명
    nm1.push(item.tour_ds_nm)
  });
  gan2.map(item => { // 휴양관광지 관광지명
    nm2.push(item.tour_ds_nm)
  });
  console.log(nm1);
  console.log(nm2);
 
  // 4. 1,2번 한 배열로 합치기
  const new_vstr1 = vstrArr1.concat(vstrArr2)
  console.log(new_vstr1)
  const new_nm1 = nm1.concat(nm2)
  console.log(new_nm1)
  

  // 5. 라벨 뽑아내기 (중복값 제거해서 map => Set)
  let key_word1 = [...new Set(gan1.map(item => item.key_word))];
  let key_word2 = [...new Set(gan2.map(item => item.key_word))];
  console.log(key_word1)
  console.log(key_word2)


  const colors = ['rgb(255, 99, 132)', 'rgb(153, 102, 255)']

  const chartData = {
    labels: new_nm1,
    datasets: [
      {
        axis: 'y',
        data: new_vstr1,
        backgroundColor: [colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[0],colors[1]]
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
        text: '부산시 주요관광지 방문자수(자연, 휴양)',
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


export default SearchBar1;