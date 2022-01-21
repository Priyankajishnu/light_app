import React,{useState} from 'react';
import './App.css';
import Light from './components/light';


function App() {
const [val1,setVal1]=useState('ON')
const [val2,setVal2]=useState('ON')
  return (
    <div style={{border:"2px solid black",margin:25}} className="App">
     <Light switchOn = {val1} switches={() =>setVal1(val1 === 'ON' ? 'OFF' : 'ON')} />
     <Light switchOn = {val2} switches={() =>setVal2(val2 === 'ON' ? 'OFF' : 'ON')} />
    </div>
  );
}

export default App;
