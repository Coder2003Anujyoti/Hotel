import React from 'react';
import {
    BrowserRouter as Routers,
    Routes, Route,
    Link
} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';

const Router = () => {
  return (
  <Routers>
  <div className="container">
 <nav><ul>
 <li><Link to="/home">Home</Link></li>
<li><Link to="/about">About</Link></li>
</ul></nav>
<Routes>
<Route path="/home"element={<Home />} />
<Route path="/about" element={<About/>} />
</Routes>
</div>
</Routers>
  );
};

export default Router;
