import React from 'react';
import '../css/Keyword.css';
import KwPie from '../charts/KwPie'
import KwMixedBar from '../charts/KwMixedBar'

function Keyword(){
    return(
        <div className="keyword">
            <div className="keywordtop"><KwPie/></div>
            <div className="keywordbottom"><KwMixedBar/> </div>
        </div>

    )
}

export default Keyword;