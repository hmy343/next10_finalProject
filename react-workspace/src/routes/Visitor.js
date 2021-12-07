import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import '../css/Visitor.css';
import Pie from '../charts/VisitPie';
import Sankeyinflow from '../charts/Sankeyinflow';
import VisitCombo from '../charts/VisitCombo';

const Visitor = () => {
    const [chart,setChart] = useState(null)
    // const [chart2,setChart2] = useState(null)
    // const [chart3,setChart3] = useState(null)

    useEffect( async ()=> {
        const { data } = await axios.get('http://localhost:9797/visitor');
        const { ctpv_vstr } = data;
        const vstr_totals = ctpv_vstr.map(item => item.vstr_total)
        const ctpv_nms = ctpv_vstr.map(item => item.ctpv_nm)
        
        setChart(
            makePieChart(ctpv_nms,vstr_totals)
        )
    })
    const makePieChart = (d1,d2) => {
        return(<Pie d1={d1} d2={d2} />)
    }
    
    return(
        <div className="visitor">
            <div className="visitorup">
                <div className="vpie">{chart}</div>
                <div className="vsankey"><Sankeyinflow/></div>
            </div>
            <div className="visitordown">
                <div className="vmap"></div>
                <div className="vfestival"><VisitCombo/></div>
            </div>
        </div>
    );
}

export default Visitor;