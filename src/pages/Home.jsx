import React from 'react';
import Sidebar from './Sidebar';
import Section from './Section';

const Home = () => {
  return (
    <div className='d-flex'>
        <div className=""><Sidebar/></div>
        <div className=""><Section /></div>
    </div>
  );
}

export default Home;
