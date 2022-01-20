import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import MintPage from './pages/mintPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mint' element={<MintPage />} />
      </Routes>
    </Router>
  );
}

export default App;
