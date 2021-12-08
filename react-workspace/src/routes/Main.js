import React from 'react';
import "../css/Main.css";
import MainMap from '../charts/MainMap';

function Main() {
  return (
    <div id="mainbox">
      <div id="mainleft">
        <div id="indexmap"><MainMap/></div>
      </div>
      <div id="mainright">
        <div id="visitor">방문자수</div>
        <div id="cost">사용금액</div>
        <div id="search">관광지 검색</div>
        <div id="keyword">검색 키워드</div>
      </div>
    </div>
  );
}

export default Main;

// 차트 종류
// 1. 관광지수(Analysis) - Donut, StackedBar, Table
// 2. 방문객 수(Visitor) - VisitPie, Sankeyinflow(+Sankeydata, Sankeyinflow), VisitCombo
// 3. 사용금액(Cost) - CostPie, CostMixedBar
// 4. 관광지 검색(Search) - SearchPie, SearchTb, SearchBar, ScTreemap(+Treemapdata, Treemap1)
// 5. 검색 키워드(Keyword) - KwPie, KwMixedBar 

// const elements = geojson.features