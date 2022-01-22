import React,{useState} from 'react';
import './App.css';
import Light from './components/light';


function App() {

  return (
    <div style={{border:"2px solid black",margin:25}} className="App">
     <Light />
     <Light />
    </div>
  );
}

export default App;
