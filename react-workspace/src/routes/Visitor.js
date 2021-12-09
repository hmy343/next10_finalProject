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
import VisitMap from '../charts/VisitMap';
import img from '../img/visitmap.png';

const Visitor = () => {
    const [chart,setChart] = useState(null)
    const [sankey, setSankey] = useState(0);     // sankey
    const [combo, setCombo] = useState(0);       // VisitCombo

    // class에서 componentDidMount, componentDidUpdate와 같은 역할
    // 컴포넌트 동작 시, 실행됨
    useEffect( async ()=> {

        // {}는 해당 값에서 괄호 안의 값만을 추출하여 가져올 수 있음.
        const { data } = await axios.get('http://localhost:9797/visitor');

        // Pie
        const { ctpv_vstr } = data;
        const vstr_totals = ctpv_vstr.map(item => item.vstr_total)
        const ctpv_nms = ctpv_vstr.map(item => item.ctpv_nm)
        setChart(
            makePieChart(ctpv_nms,vstr_totals)
        )

        // sankey 그래프를 그리기위한 데이터 넘겨주기
        const { sankey_data } = data;
        setSankey(sankey_data);

        // Visit Combo 그래프 (Bar & Line)
        const { vs_fest_mon } = data;
        setCombo(vs_fest_mon);

    }, []);
    const makePieChart = (d1,d2) => {
        return(<Pie d1={d1} d2={d2} />)
    }
    return(
        <div className="visitor">
            <div className="visitorup">
                <div className="vpie">{chart}</div>
                <div className="vsankey"><Sankeyinflow data={sankey}/></div>
            </div>
            <div className="visitordown">
                <div className="vmap"><VisitMap /><img src={img} alt="범례" style={{width:"150px", position:"absolute", bottom:"20px", right:'920px'}}/>
                    <p style={{position:"absolute", bottom:"0px", right:'990px', fontSize:'12px'}}>단위 : 만명</p></div>
                <div className="vfestival"><VisitCombo data={combo}/></div>
            </div>
        </div>
    );
}

export default Visitor;