import React from "react";
import '../css/Cost.css';
import CostPie from '../charts/CostPie'
import CostMixedBar from '../charts/CostMixedBar'

function Cost(){
    return(
        <div className="cost">
            <div className="costleft">
                <div className="costuse"><CostPie/></div>
                <div className="costarea"><CostMixedBar/></div>
            </div>
            <div className="costright"></div>
        </div>
    );
}

export default Cost;