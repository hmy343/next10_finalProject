import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);
function Sankeyinflow({data}) {
  //console.log(d.series);
  // 데이터 저장할 변수 선언
  // const는 고정값, 해당 값은 변경되기때문에 var로 선언
  var ctsg_sankey = [];   // 유입도시 - 행정구
  var sgtd_sankey = [];   // 행정구 - 관광지
  for ( const [key, val] of Object.entries(data)) {
    switch(key) {
      case 'ctsg_sankey':
        ctsg_sankey = Array.from(val);
        break;
      case 'sgtd_sankey':
        sgtd_sankey = Array.from(val);
        break;
    }
  }
  // console.log(sgtd_sankey);

  // 저장된 데이터 val 값만 필요함.
  // 유입도시 - 행정구 값만 가져오기
  const sankeyArr = [];
  ctsg_sankey.map(item => {
    var ctsg = [ item.ctpv_nm, item.sgg_nm, item.vstr_total ];
    sankeyArr.push(ctsg);
  });


  // 행정구 - 관광지
  sgtd_sankey.map(item => {
    var sgtd = [ item.sgg_nm, item.tour_ds_nm, item.vstr_total ];
    sankeyArr.push(sgtd);
  });
  //console.log(sankeyArr);

  var chartOption = {
    title: {
      text: ""
    },
    series:[
      {
        keys: ["from", "to", "weight"],
        data:sankeyArr,
        type:"sankey",
        name: "Sankey demo series"
      }
    ]
  };
  //console.log(data);

  return (
    <div className="App">
      {/* <div style={{backgroundColor: "#6495ED"}}>
            <h4 style={{ padding:10, color:"white", textAlign:"center"}}>방문지역별 관광지 분석</h4>
        </div> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOption}
      />
    </div>
  );
}


export default Sankeyinflow;