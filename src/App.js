import React,{useState} from 'react';
import './App.css';
import Light from './components/light';


function App() {
const [bulb1,setBulb1]=useState('ON')
const [bulb2,setBulb2]=useState('ON')
  return (
    <div style={{border:"2px solid black",margin:25}} className="App">
     <Light switchOn = {bulb1} switches={() =>setBulb1(bulb1 === 'ON' ? 'OFF' : 'ON')} />
     <Light switchOn = {bulb2} switches={() =>setBulb2(bulb2 === 'ON' ? 'OFF' : 'ON')} />
    </div>
  );
}

export default App;
