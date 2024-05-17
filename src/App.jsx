import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import MainLayout from './pages/MainLayout';
import UserSearch from './components/UserSearch/UserSearch';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/user-search' element={<UserSearch />} />
          <Route path='/kweeuhree' element={<UserSearch user='kweeuhree'/>} />
          <Route path='/firstnamenika' element={<UserSearch user='firstnamenika'/>} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
