import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function Bar2(){
  const canvasDom = useRef(null);

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

export default Bar2;