import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { color } from 'highcharts';
import '../css/Treemap1.css';

export default function Treemap1({ data, width, height }) {
    const svgRef = useRef(null);
  
    function renderTreemap() {
      const svg = d3.select(svgRef.current);
  
      svg.attr('width', width).attr('height', height);

      
  
      const root = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value);
  
      const treemapRoot = d3.treemap().size([width, height]).padding(2).paddingInner(3)(root);
  
      const nodes = svg
        .selectAll('g')
        .data(treemapRoot.leaves())
        .join('g')
        .attr('transform', (d) => `translate(${d.x0},${d.y0})`);
  
      const fader = (color) => d3.interpolateRgb(color, '#fff')(0.3);
      const colorScale = d3.scaleOrdinal(['#aaa','#bbb','#ccc','#ddd','#eee','#fff'].map(fader));
  
      const fontSize = 12;

     
      nodes
      .append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => colorScale(d.data.category));
        // 이름끼리 색맞추기
      nodes
        .append('text')        
        .text((d) => `${d.data.name} ${d.data.value}`)
        .attr('font-size', `${fontSize}px`)
        .attr('x', 3)
        .attr('y', fontSize)
        
        // 트리맵에 이름 넣기
      

    
    }
  
    useEffect(() => {
      renderTreemap();
    }, [data]);
  
    return (
      <div>
        <svg className='treemap' ref={svgRef} />
      </div>
    );
  }