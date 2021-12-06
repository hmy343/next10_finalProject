import React from 'react';
import "../css/Main.css";
import SearchBar from '../charts/SearchBar';
// import App2 from './App2';
import Sankey from '../charts/Sankeyinflow';

function Main() {
  return (
    <div className="mainbox">
      <div className="al mainleft">
        <div className="al tourindex">관광지수</div>
        <div className="al smallmenu">
          <div className="al visitcost">
            <div className="al visitormenu">방문자수</div>
            <div className="al costmenu">사용금액</div>
          </div>
          <div className="al tourkey">
            <div className="al toursearch">관광지 검색</div>
            <div className="al keywordsearch">검색 키워드</div>
          </div>
        </div>
      </div>
      <div className="mainright">
        <div className="tourindexmap">관광지수 지도</div>
      </div>
    </div>
  );
}

export default Main;
