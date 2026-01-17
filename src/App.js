import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlertMessage("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
      // The below code is used to change the title of the document at intervals
      // like a blinking effect to grab user attention
      // Logically not a good practice to use it frequently
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertMessage("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  } 
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container" my-3>
          {/* <TextForm setAlertMessage={setAlertMessage} heading="Enter the text to analyze" mode={mode}/> */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm setAlertMessage={setAlertMessage} heading="Enter the text to analyze" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
