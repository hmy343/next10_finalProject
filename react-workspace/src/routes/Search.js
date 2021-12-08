import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from "axios";
import '../css/Search.css';
import ScTreemap from '../charts/ScTreemap'
import SearchBar from '../charts/SearchBar';
import ScDonut from "../charts/ScDonut";
import ScMap from "../charts/ScMap";
import Table from 'react-bootstrap/Table'

const Search= () =>{
    const [chart, setChart] = useState(null)

    useEffect(async () => {
        const { data } = await axios.get('http://localhost:9797/search');
        const { td_vstr } = data;
        const { main_cnt } = data;
        const main_types = main_cnt.map(item => item.main_type)
        const search_cnts = main_cnt.map(item => item.search_cnt)
    
        const nms = td_vstr.map(item => item.tour_ds_nm)
        
       
        setChart(
            makeBarChart(main_types,search_cnts)
            )
       
    },[]);

    const makeBarChart = (d1,d2) => {
        return(<ScDonut d1={d1} d2={d2} />)
    }


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
                    <div className="scvup">
                        
                    </div>
                    <div className="scvdown">
                        
                    </div>                        
                </div>
                <div className="scage"><ScTreemap/></div>
            </div>
        </div>
    );
}

export default Search;