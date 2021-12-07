import '../css/Search.css';
import ScTreemap from '../charts/ScTreemap'
import Bar from '../charts/Bar';
import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from "axios";


const Search= () =>{
    // const [chart, setChart] = useState(null)
    const [chart2, setChart2] = useState(null)
    // const [chart3, setChart3] = useState(null)

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:9797/search');
        // const { age_td_vstr } = data;
        const { td_vstr } = data;
        // const vstr_totals = age_td_vstr.map(item => item.vstr_total)
        // const ages = age_td_vstr.map(item => item.age)
        // const tour_ds_nms = age_td_vstr.map(item => item.tour_ds_nm)
        const totals = td_vstr.map(item => item.vstr_total)
        const nms = td_vstr.map(item => item.tour_ds_nm)


       
        // setChart(
        //     makeBubbleChart()
        // )
        setChart2(
            makeBarChart(nms, totals)
        )
    },[]);

    const makeBarChart = (d1, d2) => {
        return(<Bar data1 = {d1} data2 = {d2}/>)    
    }

    return(
      <div className="search">
            <div className="scup">
                <div className="scrank"></div>
                <div className="scmap"></div>
            </div>
            <div className="scdown">
                <div className="scvisitors">{chart2}</div>
                
                <div className="scage"><ScTreemap /></div>
            </div>
        </div>
    );
}

export default Search;