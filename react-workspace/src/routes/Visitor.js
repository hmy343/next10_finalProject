import React from 'react';
import '../css/Visitor.css';
import Visit_Pie from '../charts/Visit_Pie';
import Sankeyinflow from '../charts/Sankeyinflow';

function Visitor(){
    return(
        <div className="visitor">
            <div className="visitorup">
                <div className="vpie"><Visit_Pie/></div>
                <div className="vsankey"><Sankeyinflow/></div>
            </div>
            <div className="visitordown">
                <div className="vmap"></div>
                <div className="vfestival"></div>
            </div>
        </div>
    );
}

export default Visitor;