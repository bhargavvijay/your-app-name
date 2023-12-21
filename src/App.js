import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator'; // Assuming this component is used elsewhere
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({ msg: '', type: '' });

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#07060e';
      showAlert('dark mode enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert('', '');
    }, 2500);
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtil" mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
