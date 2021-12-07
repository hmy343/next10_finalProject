import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import '../css/Cost.css';
import Pie from '../charts/Cost_Pie'
// import Cost_MixedBar from '../charts/Cost_MixedBar'
import Bar2 from "../charts/Bar2";


const Cost = () => {
    const [chart, setChart] = useState(null)
    const [chart2, setChart2] = useState(null)

    useEffect(async () => {
        // 컴포넌트가 보이기 직전
        console.log('화면이 보이기 직점')
        const { data } = await axios.get('http://localhost:9797/cost');
        const { expn_biz } = data;
        const { sgg_vstr_expn } = data;
        const expn_totals = expn_biz.map(item => item.expn_total)
        const expn_biz_nms = expn_biz.map(item => item.expn_biz_nm)
        const vstr_totals = sgg_vstr_expn.map(item => item.vstr_total)
        const sgg_nms = sgg_vstr_expn.map(item => item.sgg_nm)
        const totals = sgg_vstr_expn.map(item => item.expn_total)

        console.log(expn_biz_nms)
        console.log(expn_totals)
        setChart(
            makePieChart(expn_biz_nms, expn_totals)
        )
        setChart2(
            makeBarChart(sgg_nms, vstr_totals, totals)
        )
    }, []);
    const makePieChart = (d1, d2) => {
        return (<Pie data1={d1} data2={d2} />)
    }
    const makeBarChart = (d1, d2, d3) => {
        return (<Bar2 data1={d1} data2={d2} data3={d3} />)
    }
    return (
        <>
            <div className="cost">
            <div className="costleft">
                <div className="costuse">{chart}</div>
                <div className="costarea">{chart2}</div>
            </div>
            <div className="costright"></div>
        </div>
        </>
    )
}
export default Cost;