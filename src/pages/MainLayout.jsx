import React from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import './MainLayoutStyle.css'

const MainLayout = ({ user }) => {

  return (
    <div className='display-flex flex-col main-layout'>

        <div className='info'>github is amazing</div>
        {/* <Button action={handleClick} type={'Find a User'} /> */}
        <UserSearch user={user}/>
    </div>
  )
}

export default MainLayout;