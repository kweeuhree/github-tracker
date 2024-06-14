import { Routes, Route, Navigate } from 'react-router-dom';
//css
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/NavBar/Footer';
import MainLayout from './pages/MainLayout';
import UserSearch from './components/UserSearch/UserSearch';
//notable users data
import { getRandomNotableUser } from './utils/notableUsers';

function App() {

  const randomNotableUser = getRandomNotableUser();


  return (
    <main className="display-flex flex-col">
      <NavBar />

      <Routes>
          <Route path='/' element={<Navigate to={'/search'}/>} />
          <Route path='/search' element={<MainLayout user={randomNotableUser}/>} />
          <Route path='/kweeuhree' element={<UserSearch user={{nickname: 'kweeuhree'}} />} />
          <Route path='/firstnamenika' element={<UserSearch user={{nickname: 'firstnamenika'}} />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
