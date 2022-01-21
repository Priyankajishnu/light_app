import React, { useState } from 'react';
import './light.css';

const Light = ({switchOn,switches}) => {
    var[color,setColor] = useState('grey')

    var click = () =>{
        switchOn==='ON' ? setColor("orange") : setColor('grey');
        switches()
    }
  return (
  <div className="container">
      <div className="bulb">
      <button style={{background:color}}> </button>
      </div>
      <div className="btn">
          <button onClick={click}>{switchOn}</button>
      </div>
     
  </div>
  
)};

export default Light;
