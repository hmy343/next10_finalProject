import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import axios from 'axios';
import '../css/Analysis.css';
import AnRadar from '../charts/AnRadar';
import StackedBar from "../charts/StackedBar";
import AnTable from "../charts/AnTable";

const Analysis = () => {
  const [chart,setChart] = useState(null)
  const [chart2,setChart2] = useState(null)
  const [chart3,setChart3] = useState(0)

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:9797/analysis');
    const { index_pro } = data; // 부산시 관광지수 항목별 비중
    const { mid_index } = data; // 구별 관광지수 현황(중분류)
    const { all_index } = data; // 지수 테이블
    const { tour_infra } = mid_index;
    const { tour_effect } = mid_index;
    const { tour_rsc } = mid_index;
    const sub_indexs = index_pro.map(item => item.sub_index);
    const index_kpis = index_pro.map(item => item.index_kpi);
    const infra_vals = tour_infra.map(item => item.val);
    const tour_sgg = tour_infra.map(item => item.sgg_nm);
    const effect_vals = tour_effect.map(item => item.val);
    const rsc_vals = tour_rsc.map(item => item.val);

    setChart(
      makeRadarChart(sub_indexs,index_kpis)
    )
    setChart2(
      makeStackChart(tour_sgg,infra_vals,effect_vals,rsc_vals)
    )
    setChart3(all_index); // 지수 테이블

  },[]);
  const makeRadarChart = (d1, d2) => {
    return(<AnRadar d1={d1} d2={d2}/>)
  }
  const makeStackChart = (d1, d2, d3, d4) => {
    return(<StackedBar d1={d1} d2={d2} d3={d3} d4={d4} />)
  }

  return (
    <div className="analysis">
      <div className="analysisup">
          <div className="indexpie">{chart}</div>
          <div className="middle">{chart2}</div>
      </div>
      <div className="analysisdown"><AnTable data={chart3}/></div>
    </div>
  );
}

export default Analysis;
