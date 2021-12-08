import React, { useEffect, useState } from 'react';
import "../css/Main.css";
import MainMap from '../charts/MainMap';
import axios from 'axios';
import { render } from '@testing-library/react';

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
  const [ expn, setExpn ] = useState(0);    // 사용금액
  const [ vstr, setVstr ] = useState(0);    // 방문객수
  const [ ds, setDs ] = useState(0);        // 검색 키워드
  const [ sr, setSr ] = useState(0);        // 관광지검색 (100위)
  useEffect( async() => {
    const { data } = await axios.get('http://localhost:9797/');
    setExpn(data.expn_total);
    setVstr(data.vstr_ma_min);

    const dsList = [];
    data.ds_rank.map((item)=> {
      dsList.push(item.key_word);
    });
    setDs(dsList);

    const srList = [];
    data.sr_rank.map((item) => {
      srList.push(item.tour_ds_nm);
    });
    setSr(srList);
    // console.log(data);
  }, []);


  return (
    <div id="mainbox">
      <div id="mainleft">
        <div id="indexmap"><MainMap/></div>
      </div>
      <div id="mainright">
        <div id="visitor">방문자수(만명)</div>
        <div>최대 : {vstr.max_vstr} (만명)</div>
        <div>최소 : {vstr.min_vstr} (만명)</div>
        <div>평균 : {vstr.avg_vstr} (만명)</div>
        
        <div id="cost">사용금액</div>
        <div>{expn} (억원)</div>

        <div id="search">관광지 검색</div>
        <div>{sr[0]}</div>
        <div>{sr[1]}</div>
        <div>{sr[2]}</div>
        <div id="keyword">검색 키워드</div>
        <div>{ds[0]}</div>
        <div>{ds[1]}</div>
        <div>{ds[2]}</div>
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