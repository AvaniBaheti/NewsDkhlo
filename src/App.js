import { useState } from 'react';
import './App.css';
import Navbar from './compo/Navbar';
import NewsBoard from './compo/NewsBoard';
function App() {

  const [category,seAns]=useState("General")
  return (
    <div className="App">
      <Navbar seAns={seAns}/>
      <NewsBoard category={category}/>
    </div>
  );
}
export default App;
