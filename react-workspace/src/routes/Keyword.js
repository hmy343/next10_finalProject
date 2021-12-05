import React from 'react';
import '../css/Keyword.css';
import KW_Pie from '../charts/KW_Pie'
import MixedBar from '../charts/MixedBar'

function Keyword(){
    return(
        <div className="keyword">
            <div className="keywordtop"><KW_Pie/></div>
            <div className="keywordbottom"><MixedBar/> </div>
        </div>

    )
}

export default Keyword;