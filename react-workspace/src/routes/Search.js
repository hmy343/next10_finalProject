import React from "react";
import '../css/Search.css';
import App2 from '../charts/App2'
import Bar2 from '../charts/Bar2';

function Search(){
    return(
      <div className="search">
            <div className="scup">
                <div className="scrank"></div>
                <div className="scmap"></div>
            </div>
            <div className="scdown">
                <div className="scvisitors"><Bar2/></div>
                <div className="scage"><App2 /></div>
            </div>
        </div>
    );
}

export default Search;