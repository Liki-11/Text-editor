import './App.css';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';

import React,{useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
  document.body.style.backgroundColor='black';
  showAlert("Dark mode has been enabled","success");
  document.title='Textutils-dark mode';
}
    else
    {setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils-light mode';
         }

    }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About mode={mode} />} />  {/* Corrected route */}
    <Route exact path="/" element={<TextForm mode={mode} showAle={showAlert} /> } /> {/* Corrected route */}   
    <Route exact path="/" element={<About mode={mode}/>}/> {/* Corrected route */}   

        </Routes>
    
    </div>
   
   </Router>
    </>
  );
}

export default App;
