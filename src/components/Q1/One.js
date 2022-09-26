import React from 'react';
import pic1 from  './Group -1.png';
import pic2 from  './Group -2.png';
import pic3 from  './Group -3.png';
import pic4 from  './Group 17.png';

import "./One.css"


const One = () => {
  return (
    <div class="container" >
  
    <div class='item'>
    <h4>Total Traffic</h4>
    <h4>123,456</h4>
    <img alt=''  src={pic1} />
    </div>
    

    <div class='item'>
    <h4>New users</h4>
    <h4>2,345</h4>
    <img alt=''  src={pic2} />
    </div>

    <div class='item'>
    <h4>Sales</h4>
    <h4>924</h4>
    <img alt='' src={pic3} />
    </div>

    <div class='item'>
    <h4>Performance</h4>
    <h4>48.65%</h4>
    <img alt=''   src={pic4} />
    </div>
    </div>
  );
}

export default One;
