import React from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import './MainLayoutStyle.css'
//notable users data
import { getRandomNotableUser } from '../utils/notableUsers';

const MainLayout = () => {

  const randomNotableUser = getRandomNotableUser();

  return (
    <div className='main-layout'>
        {/* <Button action={handleClick} type={'Find a User'} /> */}
        <UserSearch user={randomNotableUser}/>
    </div>
  )
}

export default MainLayout;