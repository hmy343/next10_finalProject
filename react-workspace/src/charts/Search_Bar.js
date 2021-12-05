import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function Search_Bar(){
  const canvasDom = useRef(null);
  const labels = ['문화/관광/여가서비스업', '관광쇼핑업', '관광식음료업', '관광숙박업', '관광운수업', '여행서비스업']
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: '관광 사업체 현황',
        data: datacnp,
        backgroundColor: colors[0],
        yAxisID: 'y'
      },
      {
        type: "bar",
        label: '관광지출액',
        data: dataexpd,
        backgroundColor: colors[1],
        yAxisID: 'y_sub'
      },
    ]
  }

  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "bar",
      data:{
        labels:['월','화','수','목','금','토','일'],
        datasets:[
          {
            label:'data',
            data:[750,640,240,200,160,400,600],
            borderWidth:1,
            barPercentage:0.7,
          },
        ],
      },
      options:{
        backgroundColor:"#9ac6ff",
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

export default Search_Bar;