import React from 'react';
import "../css/Main.css";

function Main() {
  return (
    <div className="mainbox">
      <div className="mainleft">
        <div className="indexmap">관광지수 지도</div>
      </div>
      <div className="mainright">
        <div className="visitor">방문자수</div>
        <div className="cost">사용금액</div>
        <div className="search">관광지 검색</div>
        <div className="keyword">검색 키워드</div>
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