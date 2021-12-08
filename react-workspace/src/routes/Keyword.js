import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from "axios";
import '../css/Keyword.css';
import KwRadar from '../charts/KwRadar'
import KwMixedBar from '../charts/KwMixedBar'

const Keyword= () =>{
    const [chart, setChart] = useState(null)
    const [chart2, setChart2] = useState(null)

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:9797/keyword');
       //키워드 분포
        const { ds_srch } = data;
        // console.log(ds_srch)
        // 사업체 분포, 관광지출액
        const { cnp_expd } = data;
        const key_words = ds_srch.map(item => item.key_word)
        const rates = ds_srch.map(item => item.rate)
        const enp_majors = cnp_expd.map(item => item.enp_major)
        const enps = cnp_expd.map(item => item.enp)
        const expd_totals = cnp_expd.map(item => item.expd_total)
        
        setChart(
            makeRadarChart(key_words, rates)
        )
        setChart2(
            makeMixedBar(enp_majors, enps, expd_totals)
        )
    },[]);

    const makeRadarChart = (d1, d2) => {
        return(<KwRadar data1 = {d1} data2 = {d2}/>)    
    }
y
    const makeMixedBar = (d1, d2, d3) => {
        return(<KwMixedBar data1 = {d1} data2 = {d2} data3 = {d3}/>)    
    }

    return(
        <div className="keyword">
            <div className="keywordtop">{chart}</div>
            <div className="keywordbottom">{chart2}</div>
        </div>

    );
}

export default Keyword;