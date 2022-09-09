// 1. Components are simple JavaScript Functions
// 2. Function name should always start with uppercase letter
// 3. Function should always return a single JSX element
// 4. Function should be exported

import React from 'react';
import './Home.css';
import logo from '../logo.svg';

const Home = () => {
  
  return (
    <>
    <div>
        <h1 className="head1" style={{ color : 'red',  backgroundColor : 'yellow' }}>My Home Component</h1>
        <hr />
        <button className='btn btn-primary'>Bootstrap</button>
        <img src={logo} />
    </div>
    <div>

    </div>
    </>
    
  );
}

export default Home;