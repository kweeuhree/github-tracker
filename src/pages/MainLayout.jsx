import React, { useState, useEffect } from 'react';
import UserSearch from '../components/UserSearch/UserSearch';
import Form from '../components/Form/Form';
import './MainLayoutStyle.css'
//notable users data
import { getRandomNotableUser } from '../utils/notableUsers';
//github fetch logic
import { fetchUserData } from '../utils/fetchData';

const MainLayout = ({ user }) => {

  const [userData, setUserData] = useState({
    info: null,
    repos: [],
    mostUsedLang: ''
  });

  const randomNotableUser = getRandomNotableUser();

  useEffect(() => {
    if (user && user.nickname) {
      fetchData(user.nickname);
    } else if( user === null ) {
      fetchData(randomNotableUser.nickname);
    }
    // console.log('attempting fetch n1')
}, [user]);

  useEffect(() => {
    fetchData(randomNotableUser.nickname);
  }, []);

  const fetchData = async (username) => {
    const userInfo = await fetchUserData(username);
    displayUser(userInfo);
    // console.log(userInfo, 'user Data of UserSearch');
  }

  const displayUser = (userInfo) => {
    console.log('setting data');
    setUserData((prev) => ({
      ...prev,
      notable: userInfo.notable === undefined ? '' : user.notable,
      info: userInfo.data,
      repos: userInfo.reposData,
      mostUsedLang: userInfo.mostUsedLang
    }));
  };

  return (
    <div className='main-layout'>
        <Form userSearch={fetchData} />
        {/* <Button action={handleClick} type={'Find a User'} /> */}
        <UserSearch user={userData}/>
    </div>
  )
}

export default MainLayout;