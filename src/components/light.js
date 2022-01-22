import React, { useState } from 'react';
import './light.css';

const Light = () => {
    var[color,setColor] = useState('grey')
    var[switches,setSwitch]=useState('ON')
    var click = () =>{
        setColor(color==='orange'?'grey':'orange');
        setSwitch(switches==='ON'?'OFF':'ON');
    }
  
    return (
  <div className="container">
      <div className="bulb">
      <button style={{background:color}}> </button>
      </div>
      <div className="btn">
          <button onClick={click}>{switches}</button>
      </div>
     
  </div>
  
)};

export default Light;
