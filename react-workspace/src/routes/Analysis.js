import React from "react";
import '../css/Analysis.css';
import Donut from '../charts/Donut';
import StackedBar from "../charts/StackedBar";


function Analysis() {
  return (
    <div className="analysis">
      <div className="analysisup">
          <div className="indexpie"><Donut/></div>
          <div className="middle"><StackedBar/></div> 
      </div>
      <div className="analysisdown"></div>
    </div>
  );
}

export default Analysis;
