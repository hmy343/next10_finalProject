import React, { useEffect, useState } from 'react';
import "../css/Main.css";
import MainMap from '../charts/MainMap';
import axios from 'axios';
import { render } from '@testing-library/react';
import people from '../img/people.png';
import money from '../img/money.png';
import search from '../img/searching.png';
import key from '../img/keyboard.png'

// function Main() {


//   return (
//     <div id="mainbox">
//       <div id="mainleft">
//         <div id="indexmap"><MainMap/></div>
//       </div>
//       <div id="mainright">
//         <div id="visitor">방문자수</div>
//         <div id="cost">사용금액</div>
//         <div id="search">관광지 검색</div>
//         <div id="keyword">검색 키워드</div>
//       </div>
//     </div>
//   );
// }


const Main = () => {
  const [expn, setExpn] = useState(0);     // 사용금액
  const [exsgg, setExsgg] = useState(0); //사용금액 순위 행정구
  const [exrat, setExrat] = useState(0)  // 사용금액 순위 비율
  const [vstr, setVstr] = useState(0);     // 방문객수
  const [ds, setDs] = useState(0);         // 검색 키워드
  const [sr, setSr] = useState(0);         // 관광지검색 (100위)
  useEffect(async () => {
    const { data } = await axios.get('http://localhost:9797/');
    setExpn(data.expn_total);
    setVstr(data.vstr_max_min);

    const dsList = [];
    data.ds_rank.map((item) => {
      dsList.push(item.key_word);
    });
    setDs(dsList);

    const srList = [];
    data.sr_rank.map((item) => {
      srList.push(item.tour_ds_nm);
    });
    setSr(srList);

    var exSgg = [];
    var exRat = [];
    data.expn_rank.map((item) => {
      exSgg.push(item.sgg_nm);
      exRat.push(item.ratio);
    });
    setExsgg(exSgg);
    setExrat(exRat);
  }, []);


  return (
    <div id="mainbox">
      <div id="mainleft">
        <div id="indexmap"><MainMap /></div>
      </div>
      <div id="mainright">
        
        <ul id="visitor" className="mainTitle"><img src={people}></img>
        <span>방문자수</span>    
          <li><b>최대</b> : {vstr.max_vstr}<span> (만명)</span></li>
          <li><b>최소</b> : {vstr.min_vstr}<span> (만명)</span></li>
          <li><b>평균</b> : {vstr.avg_vstr}<span> (만명)</span></li>
        </ul>
        
        <ul id="cost" className="mainTitle"><img src={money}></img><span>사용금액</span>
          <li id="costTotal">총 {expn}억원</li>
          <li><b>1위</b> {exsgg[0]} : {exrat[0]}<span> %</span></li>
          <li> <b>2위</b> {exsgg[1]} : {exrat[1]}<span> %</span></li>
          <li> <b>3위</b> {exsgg[2]} : {exrat[2]}<span> %</span></li>
        </ul>


        <ul id="search" className="mainTitle"><img src={search}></img><span>관광지 검색</span>
          <li><b>1위</b> {sr[0]}</li>
          <li><b>2위</b> {sr[1]}</li>
          <li><b>3위</b> {sr[2]}</li>
        </ul>

        <ul id="keyword" className="mainTitle"><img src={key}></img><span>검색 키워드</span>
          <li><b>1위</b> {ds[0]}</li>
          <li><b>2위</b> {ds[1]}</li>
          <li><b>3위</b> {ds[2]}</li>
        </ul>
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