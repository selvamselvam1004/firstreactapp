import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function AppTwo(){
  return <h1>this is the second app</h1>;
}



ReactDOM.render(<React.Fragment><App /><AppTwo /></React.Fragment>,document.getElementById("root"));