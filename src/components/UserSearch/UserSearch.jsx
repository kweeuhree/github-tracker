import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUserData } from '../../utils/fetchData';
import Card from '../Card/Card';
import Form from '../Form/Form';

// User search is supposed to take 'user' and fetch info with that search term,
// and send found info as props to Card

const UserSearch = ({ user }) => {

  const [userData, setUserData] = useState({
    info: null,
    repos: []
  });

  const fetchData = async (username) => {
    const userInfo = await fetchUserData(username);
    setUserData({info: userInfo.data, repos: userInfo.reposData});
    console.log(userInfo.data, 'user Data of UserSearch');
  }

  useEffect(() => {
    if (user) {
      fetchData(user);
      console.log('attempting fetch n1')
    } else {
      setUserData({info: null, repos: []})
    }
  }, [user]);

  const location = useLocation();
  const path = location.pathname;
  


  return (
    <div className="user-search-container">
      {path.includes('search') && <Form userSearch={fetchUserData} />}
      <Card user={userData.info} repos={userData.repos} />
    </div>
  );
};

export default UserSearch;
