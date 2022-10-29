import './App.css';
import React from 'react'
import { data } from './data';

function App() {
  const reloadPage = (e) => {
    return window.location.reload()
  }

  return (
    <div className="App">
      <h1>Color Combination Generator</h1>
      <div id='myColorHolder'>
          {data.map((item)=>(
            <div className='myColors' key={item.id} style={{backgroundColor: item.color}}>
            <p className={'myParagraph'} style={{color: 'white', paddingTop: '10px'}}>{item.color.toString()}</p>
            </div>
          ))}
      </div>
      <button onClick={reloadPage}>Generate Color!</button>      
    </div>
  );
}

export default App;
