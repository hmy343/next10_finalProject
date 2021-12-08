//import React from "react";
import axios from 'axios';
import Bar2 from "../charts/Bar2";
import React,{
    useRef,
    useEffect,
    useState
} from 'react';

const Test2 = () => {
    const [chart, setChart] = useState(null)

    useEffect( async ()=>{
        // 컴포넌트가 보이기 직전
        console.log('화면이 보이기 직점')
        const { data } = await axios.get('http://localhost:9797/cost');
        const { expn_biz } = data;
        const expn_totals = expn_biz.map( item => item.expn_total )
        const expn_biz_nms = expn_biz.map( item => item.expn_biz_nm )
        
        setChart(
            makeBarChart(expn_biz_nms, expn_totals)
        )
    },[]);
    const makeBarChart = (d1, d2) => {
        return ( <Bar2 data1={d1} data2={d2}/> )
    }
    return (
        <>
            <div className="test">
                { chart }
            </div>
        </>
    )
}
export default Test2;