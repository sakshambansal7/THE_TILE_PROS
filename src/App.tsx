import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

import Routing from './utility/Routing.jsx';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    // Additional configuration or event listeners can be added here
    // Make sure to clean up any resources if necessary
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <div className='w-full h-screen inline-block font-Roboto'>
        <Routing />
      </div>
    </>
  );
};

export default App;
