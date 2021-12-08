import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from "axios";
import '../css/Search.css';
import ScDonut from "../charts/ScDonut";
import SearchBar1 from '../charts/SearchBar1';
import SearchBar2 from '../charts/SearchBar2';
import ScMap from "../charts/ScMap";
import ScTreemap from '../charts/ScTreemap'
// import Table from 'react-bootstrap/Table'

const Search= () =>{
    const [chart, setChart] = useState(null)
    const [bar, setBar] = useState(0) // 주요관광지 방문자수

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:9797/search');
         const { main_cnt } = data;
        const main_types = main_cnt.map(item => item.main_type)
        const search_cnts = main_cnt.map(item => item.search_cnt)
        // 주요관광지 방문자수
        const { td_vstr } = data;
        const totals = td_vstr.map(item => item.vstr_total)
        const nms = td_vstr.map(item => item.tour_ds_nm)
        
       
        setChart(
            makeDonutChart(main_types,search_cnts) //관광지 검색순위
        )
        setBar(td_vstr) //주요관광지 방문자수
       
    },[]);

    const makeDonutChart = (d1,d2) => {
        return(<ScDonut d1={d1} d2={d2} />)
    }

    // const makeBarChart = (d1, d2) => {
    //     return(<SearchBar1 data1 = {d1} data2 = {d2}/>)    
    // }


    return(
      <div className="search">
            <div className="scup">
                <div className="scrank">
                    <div className="scdonut">{chart}</div>
                    <div className="scdonut"></div>
                </div>
                <div className="scmap"><ScMap /></div>
            </div>
            <div className="scdown">
                <div className="scvisitors">
                    <div className="scvup"><SearchBar1 data={bar} /></div>
                    <div className="scvdown"><SearchBar2 data={bar} /></div>                 
                </div>
                <div className="scage"><ScTreemap/></div>
            </div>
        </div>
    );
}

export default Search;