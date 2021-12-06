import React from "react";

import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import data from './Sankeydata';

HighchartsSankey(Highcharts);
function Sankeyinflow() {
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={data}
      />
    </div>
  );
}



export default Sankeyinflow;