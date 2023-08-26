import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alertbox from './components/Alertbox';

function App() {
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=> setAlert(null), 1500);
  };


  return (
  <>
  <Navbar />
  <Alertbox alert={alert} />
  <Textbox handleAlert={handleAlert} />
  </>
  );
}

export default App;
