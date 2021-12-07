import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import React,{useRef} from 'react';


function Bar({data1,data2}){
  //console.log('Bar2 => ', data1)
  //console.log('Bar2 => ', data2)
  const canvasDom = useRef(null);
 
  // console.log(data2[0])
  useEffect(()=>{
    const ctx =canvasDom.current.getContext("2d");
    new Chart(ctx,{
      type: "bar",
      data:{
        labels:data1,
        datasets:[
          {
            label:'data',
            data:data2,
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

export default Bar;