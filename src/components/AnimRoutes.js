// // import pages
// import React from 'react';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Portfolio from '../pages/Portfolio';
// import Studio from '../pages/shotTypes/Studio';
// import Scenery from '../pages/shotTypes/Scenery';
// import Birthdays from '../pages/shotTypes/Birthdays';
// import Graduations from '../pages/shotTypes/Graduations';


// // import routes route & useLocation hook
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Pricing from '../pages/Pricing';

// const AnimRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence initial={true} mode='wait'>
//       <Routes key={location.pathname} location={location}>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/portfolio' element={<Portfolio />} />
//         <Route path='/pricing' element={<Pricing />} />
//         <Route path='/portfolio/gradshots' element={<Graduations/>} />
//         <Route path='/portfolio/scenery' element={<Scenery/>} />
//         <Route path='/portfolio/studio' element={<Studio/>} />
//         <Route path='/portfolio/birthdays' element={<Birthdays/>} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// export default AnimRoutes;



// import pages
import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Studio from '../pages/shotTypes/Studio';
import Scenery from '../pages/shotTypes/Scenery';
import Birthdays from '../pages/shotTypes/Birthdays';
import Graduations from '../pages/shotTypes/Graduations';


// import routes route & useLocation hook
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Pricing from '../pages/Pricing';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/portfolio/gradshots' element={<Graduations/>} />
        <Route path='/portfolio/scenery' element={<Scenery/>} />
        <Route path='/portfolio/studio' element={<Studio/>} />
        <Route path='/portfolio/birthdays' element={<Birthdays/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
