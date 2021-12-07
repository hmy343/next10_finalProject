import React from 'react';
import '../css/Keyword.css';
import KwRadar from '../charts/KwRadar'
import KwMixedBar from '../charts/KwMixedBar'

function Keyword(){
    return(
        <div className="keyword">
            <div className="keywordtop"><KwRadar/></div>
            <div className="keywordbottom"><KwMixedBar/> </div>
        </div>

    )
}

export default Keyword;