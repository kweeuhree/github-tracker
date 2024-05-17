import React from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <main>

      <section className='main-section'>

        <div className='info'>github is amazing</div>
        <Button action={handleClick} type={'Find a User'} />

      </section>

    </main>
  )
}

export default MainLayout;