import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import Treemap from './Treemap1';
import {gerneralData} from './util'
function ScTreemap() {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log( 'App2 call' )
    gerneralData().then(
      data => {
        // console.log( '=>', data )
        setData(
          data
        )
      }
    )
    
  }, []);
  return (
    <div className="App">
      <Treemap data={data} height={400} width={890} />
    </div>
  );
}

export default ScTreemap;