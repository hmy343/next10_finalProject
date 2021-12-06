import React from 'react';
import '../css/Visitor.css';
import VisitPie from '../charts/VisitPie';
import Sankeyinflow from '../charts/Sankeyinflow';
import VisitCombo from '../charts/VisitCombo';

function Visitor(){
    return(
        <div className="visitor">
            <div className="visitorup">
                <div className="vpie"><VisitPie/></div>
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