import { Routes, Route } from 'react-router-dom';
//css
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import MainLayout from './pages/MainLayout';
import UserSearch from './components/UserSearch/UserSearch';
//notable users data
import { notableUsers } from './utils/notableUsers';



function App() {

  const getRandomNotableUser = () => {
    const randomIndex = Math.floor(Math.random() * notableUsers.length);
    return notableUsers[randomIndex];
  }

  const randomNotableUser = getRandomNotableUser();


  return (
    <div className="App">
      <NavBar />

      <Routes>
          <Route path='/' element={<MainLayout user={randomNotableUser}/>} />
          <Route path='/search' element={<UserSearch user={randomNotableUser}/>} />
          <Route path='/kweeuhree' element={<UserSearch user={{nickname: 'kweeuhree'}} />} />
          <Route path='/firstnamenika' element={<UserSearch user={{nickname: 'firstnamenika'}} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
