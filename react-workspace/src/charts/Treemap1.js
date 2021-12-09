import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '../css/Treemap1.css';


export default function Treemap1({ data, width, height }) {
  const svgRef = useRef(null);
  const legendRef = useRef(null);

  function renderTreemap() {
    const svg = d3.select(svgRef.current);
    svg.selectAll('g').remove();

    const legendContainer = d3.select(legendRef.current);
    legendContainer.selectAll('g').remove();

    svg.attr('width', width).attr('height', height);



    const root = d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value);

    const treemapRoot = d3.treemap().size([width, height]).padding(1)(root);
    // .paddingInner(3)

    const nodes = svg
      .selectAll('g')
      .data(treemapRoot.leaves())
      .join('g')
      .attr('transform', (d) => `translate(${d.x0},${d.y0})`);


    const fader = (color) => d3.interpolateRgb(color, '#fff')(0.4);
    const colorScale = d3.scaleOrdinal(['#3F51B5', "#5C6BC0", "#7986CB","#9FA8DA","#C5CAE9", "#E8EAF6" ].map(fader));
    // const colorS = d3.scaleOrdinal(['	#FF0000'])
    const fontSize = 12;


    setTimeout(() => {
      // 이름끼리 색맞추기
      nodes
        .append('rect')
        .attr('width', (d) => d.x1 - d.x0)
        .attr('height', (d) => d.y1 - d.y0)
        .attr('fill', (d) => colorScale(d.data.category));
      // .style('backgournd' ,(d)=> colorS(d.data.category));

      // 트리맵에 이름 넣기
      nodes
        .append('text')
        .text((d) => `${d.data.name} ${d.data.value}`)
        .attr('data-width', (d) => d.x1 - d.x0)
        .attr('font-size', `${fontSize}px`)
        .attr('x', 3)
        .attr('y', fontSize)
        .call(wrapText);


      function wrapText(selection) {
        selection.each(function () {
          const node = d3.select(this);
          const rectWidth = +node.attr('data-width');
          let word;
          const words = node.text().split(' ').reverse();
          let line = [];
          let lineNumber = 0;
          const x = node.attr('x');
          const y = node.attr('y');
          let tspan = node.text('').append('tspan').attr('x', x).attr('y', y);
         
          while (words.length > 1) {
            word = words.pop();
            line.push(word);
            tspan.text(line.join(' '));
            const tspanLength = tspan.node().getComputedTextLength();
            if (tspanLength > rectWidth && line.length !== 1) {
              line.pop();
              tspan.text(line.join(' '));
              line = [word];
              tspan = addTspan(word);
            }
          }
          addTspan(words.pop());

          function addTspan(text) {
            lineNumber += 1;
            return node
              .append('tspan')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', `${lineNumber * fontSize}px`)
              .text(text);
          }
        });
      }

      // pull out hierarchy categories
      let categories = root.leaves().map((node) => node.data.category);
      categories = categories.filter(
        (category, index, self) => self.indexOf(category) === index,
      );

      legendContainer.attr('width', width).attr('height', height / 4);

      // create 'g' elements based on categories
      const legend = legendContainer.selectAll('g').data(categories).join('g');

      // create 'rects' for each category
      legend
        .append('rect')
        .attr('width', fontSize)
        .attr('height', fontSize)
        // .attr('x', fontSize)
        // .attr('y', (_, i) => fontSize * 2 * i)
        .attr('x', (_, i) => fontSize * 6 * i)
        .attr('y', fontSize )
        .attr('fill', (d) => colorScale(d));

      // add text to each category key
      legend
        .append('text')
        .attr('transform', `translate(20, ${fontSize})`)
        .attr('x', (_, i) => fontSize * 6 * i)
        .attr('y', fontSize)
        // .attr('x', fontSize * 3)
        // .attr('y', (_, i) => fontSize * 2 * i)
        .style('font-size', fontSize)
        .text((d) => d);
    }, 1000 * 0.1)



  }

  useEffect(() => {
    renderTreemap();
  }, [data]);

  return (
    <div>
      <div id ='treeTitle'>연령대별 주요 관광지 방문객 수</div>
      <svg className='treemap' ref={svgRef} />
      <svg className='treemapCt' ref={legendRef} />
      
      
    </div>
  );
}