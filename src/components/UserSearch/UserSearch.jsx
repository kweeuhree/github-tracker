import React, { useState, useEffect } from 'react';
//useLocation object will help define current path
import { useLocation } from 'react-router-dom';
//components
import Card from '../Card/Card';
import Form from '../Form/Form';
//github fetch logic
import { fetchUserData } from '../../utils/fetchData';


const UserSearch = ({ user }) => {

  const [userData, setUserData] = useState({
    notable: null,
    info: null,
    repos: []
  });

  const fetchData = async (username) => {
    const userInfo = await fetchUserData(username);
    displayUser(userInfo);
    console.log(userInfo.data, 'user Data of UserSearch');
  }

  useEffect(() => {
      fetchData(user.nickname);
      console.log('attempting fetch n1')

  }, [user]);

  const location = useLocation();
  const path = location.pathname;
  
const displayUser = (userInfo) => {
  setUserData({notable: user.notable, info: userInfo.data, repos: userInfo.reposData});
}

  return (
    <div className="user-search-container">
      {path.includes('search') && <Form userSearch={fetchUserData} />}
      <Card user={userData.info} repos={userData.repos} notable={userData.notable} />
    </div>
  );
};

export default UserSearch;
