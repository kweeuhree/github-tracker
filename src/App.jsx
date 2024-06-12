import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import MainLayout from './pages/MainLayout';
import UserSearch from './components/UserSearch/UserSearch';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    getRandomNotableUser();
  }, []);

  const notableUsers = [
      { 
        notable: 'python creator', 
        nickname: 'gvanrossum'
    }, {
       notable: 'linux creator', 
       nickname: 'torvalds'
    }, {
       notable: 'Lennart Poettering is a German software engineer working for Microsoft and the original author of PulseAudio, Avahi and systemd.', 
       nickname: 'poettering'
      
    }
  ];

  const getRandomNotableUser = () => {
    const randomIndex = Math.floor(Math.random() * notableUsers.length);
    console.log(randomIndex, ' random index');
    console.log('random user', notableUsers[randomIndex])
    return notableUsers[randomIndex];
  }

  const randomNotableUser = getRandomNotableUser();


  return (
    <div className="App">
      <NavBar />

      <Routes>
          <Route path='/' element={<MainLayout />} />
          {/* <Route path='/home' element={<MainLayout />} /> */}
          <Route path='/search' element={<UserSearch user={randomNotableUser}/>} />
          <Route path='/kweeuhree' element={<UserSearch user={'kweeuhree'} />} />
          <Route path='/firstnamenika' element={<UserSearch user={'firstnamenika'} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
