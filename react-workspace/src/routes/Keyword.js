import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from "axios";
import '../css/Keyword.css';
import KwDonut from '../charts/KwDonut'
import KwMixedBar from '../charts/KwMixedBar'
import KwTable1 from '../charts/KwTable1'
import KwTable2 from '../charts/KwTable2'

const Keyword= () =>{
    const [chart, setChart] = useState(null)
    const [chart2, setChart2] = useState(null)
    const [chart3, setChart3] = useState(0)
    const [chart4, setChart4] = useState(0)

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:9797/keyword');
       //키워드 분포
        const { ds_srch } = data;
        const key_words = ds_srch.map(item => item.key_word)
        const rates = ds_srch.map(item => item.rate)
        // console.log(ds_srch)
        // 사업체 분포, 관광지출액
        const { cnp_expd } = data;
        const enp_majors = cnp_expd.map(item => item.enp_major)
        const enps = cnp_expd.map(item => item.enp)
        const expd_totals = cnp_expd.map(item => item.expd_total)
        
        setChart(
            makeDonutChart(key_words, rates)
        )
        setChart2(
            makeMixedBar(enp_majors, enps, expd_totals)
        )

        // 키워드 분포 테이블
        setChart3(ds_srch);

        // 사업체분포, 관광지출액 테이블
        setChart4(cnp_expd);

    },[]);

    const makeDonutChart = (d1, d2) => {
        return(<KwDonut data1 = {d1} data2 = {d2}/>)    
    }

    const makeMixedBar = (d1, d2, d3) => {
        return(<KwMixedBar data1 = {d1} data2 = {d2} data3 = {d3}/>)    
    }

    return(
        <div className="keyword">
            <div className="kwleft">
                <div className="kwdonut">{chart}</div>
                <div className="kwtable1"><KwTable1 data={chart3}/></div>
            </div>
            <div className="kwright">
                <div className="kwbar">{chart2}</div>
                <div className="kwtable2"><KwTable2 data={chart4}/></div>
            </div>
        </div>

    );
}

export default Keyword;