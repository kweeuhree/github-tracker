import React from 'react';
import Button from '../components/Button/Button';
import UserSearch from '../components/UserSearch/UserSearch';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <main>

      <section className='main-section'>

        <div className='info'>github is amazing</div>
        <Button action={handleClick} type={'Find a User'} />
        <UserSearch user={user}/>
      </section>

    </main>
  )
}

export default MainLayout;