

import React, {useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {



const [mode, setmode] = useState('light');







const togglemode=()=>{

if (mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='grey';
  document.title='TextUtilities- Dark Mode';

//   setInterval(()=>{

//   document.title='TextUtilities- Dark Mode';
//   },2000);


// setInterval(()=>{
//   document.title='Share This Website With Friends'
// },1500);

}



else{
  setmode('light')
  document.body.style.backgroundColor='white';
  document.title='TextUtilities- Light Mode';
}

}
  return (
    <>
<Navbar title="TextUtilities"   aboutText="About" mode={mode} togglemode={togglemode}        />




<div className="container my-3">
<TextForm heading="Enter The Text To Analyze" mode={mode}/>

{/* <About/> */}
</div>
  </>
  );
}

export default App;
