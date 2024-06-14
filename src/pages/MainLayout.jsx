import React from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import './MainLayoutStyle.css'

const MainLayout = ({ user }) => {

  return (
    <div className='main-layout'>

        <div className='header'>
          <div className='animate-text'>github is amazing</div>
          <div className='animate-text2'>github is amazing</div>
          <div className='animate-text3'>github is amazing</div>
          <div className='image-overlay' />
        </div>
        {/* <Button action={handleClick} type={'Find a User'} /> */}
        <UserSearch user={user}/>
    </div>
  )
}

export default MainLayout;