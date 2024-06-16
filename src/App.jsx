import { Routes, Route, Navigate } from 'react-router-dom';
//css
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import MainLayout from './pages/MainLayout';
import Header from './components/Header/Header';
import UserSearch from './components/UserSearch/UserSearch';

function App() {

  return (
    <main className="display-flex flex-col main-layout">

<Header />

      <NavBar />
      
      <Routes>
          <Route path='/' element={<Navigate to={'/search'}/>} />
          <Route path='/search' element={<MainLayout user={null}/>} />
          <Route path='/kweeuhree' element={<MainLayout user={{nickname: 'kweeuhree'}} />} />
          <Route path='/firstnamenika' element={<MainLayout user={{nickname: 'firstnamenika'}} />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
