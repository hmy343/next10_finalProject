import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './routes/Main';
import Navbar from './routes/Navbar';
import Analysis from './routes/Analysis';
import Keyword from './routes/Keyword';
import Search from './routes/Search';
import Visitor from './routes/Visitor';
import Cost from './routes/Cost';
// import Test from './routes/Test';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/keyword" element={<Keyword/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/visitor" element={<Visitor/>}/>
        <Route path="/cost" element={<Cost/>}/>
        {/* <Route path="/test" element={<Test/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
