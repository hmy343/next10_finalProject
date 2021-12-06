import React from 'react';
import "../css/Main.css";
import Bar2 from '../charts/Bar2';
import Map from './Map';
// import App2 from './App2';
// import Sankey from '../charts/Sankeyinflow';

function Main() {
  return (
    <div className="mainbox">
      <div className="al mainleft">
        <div className="al tourindex">
            <Bar2 />
        </div>
        <div className="al smallmenu">

          <div className="al visitcost">
            <div className="al visitormenu">
              
            </div>
            <div className="al costmenu">

            </div>
          </div>
          <div className="al tourkey">
            <div className="al toursearch"></div>
            <div className="al keywordsearch"></div>
          </div>
        </div>

      </div>
      <div className="mainright">
        <div className="tourindexmap">
          {/* <App2/> */}
          {/* <Sankey/> */}
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default Main;
