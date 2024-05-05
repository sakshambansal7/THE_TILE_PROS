import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Caulking from '../components/Caulking';
import Screeding from '../components/Screeding';
import Waterproofing from '../components/Waterproofing';
import Tiling from '../components/Tiling';
import TileRepairs from '../components/TileRepairs';
import Indoor from '../components/Indoor';
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/Services' element={<Services />} /> */}
      <Route path='/number' element={"this is a number +61451580078"} />
      <Route path="/caulking/:id?" element={<Caulking />} />
      <Route path="/screeding/:id?" element={<Screeding />} />
      <Route path="/tiling/:id?" element={<Tiling />} />
      <Route path="/waterproofing/:id?" element={<Waterproofing />} />
      <Route path="/tileRepair/:id?" element={<TileRepairs />} />
      <Route path="/indoor/:id?" element={<Indoor />} />
      <Route path="/Contact/:id?" element={<Contact />} />
    </Routes>
      
   
  );
}

export default Routing;






