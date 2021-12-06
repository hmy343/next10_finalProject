import React from "react";
import '../css/Search.css';
import ScTreemap from '../charts/ScTreemap'
import SearchBar from '../charts/SearchBar';
import SearchPie from "../charts/SearchPie";


function Search(){
    return(
      <div className="search">
            <div className="scup">
                <div className="scrank"><SearchPie/></div>
                <div className="scmap"></div>
            </div>
            <div className="scdown">
                <div className="scvisitors"><SearchBar/></div>
                <div className="scage"><ScTreemap/></div>
            </div>
        </div>
    );
}

export default Search;