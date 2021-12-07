import Treemap from './Treemap1';
import data from './Treemapdata';

function ScTreemap() {
  return (
    <div className="App">
      <Treemap data={data} height={450} width={800} />
    </div>
  );
}

export default ScTreemap;