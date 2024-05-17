import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Router>

        </Router>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
