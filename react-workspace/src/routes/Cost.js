import React from "react";
import '../css/Cost.css';
import Cost_Pie from '../charts/Cost_Pie'
import Cost_MixedBar from '../charts/Cost_MixedBar'

function Cost(){
    return(
        <div className="cost">
            <div className="costleft">
                <div className="costuse"><Cost_Pie/></div>
                <div className="costarea"><Cost_MixedBar/></div>
            </div>
            <div className="costright"></div>
        </div>
    );
}

export default Cost;