import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import Form from '../Form/Form';

// User search is supposed to take 'user' and fetch info with that search term,
// and send found info as props to Card

const UserSearch = ({ user }) => {
  const [userData, setUserData] = useState({
    info: null,
    repos: []
  });

  const location = useLocation();
  const path = location.pathname;
  
  const getRepos = async (reposUrl) => {
    try {
      const response = await fetch(reposUrl);
      const data = await response.json();
      setUserData((prev) => ({ ...prev, repos: data }));
    } catch (error) {
      console.error('Error fetching repositories: ', error);
    }
  };

  const fetchUser = async (username) => {
    console.log('attempting fetch');
    const baseUrl = `https://api.github.com/`;
    const wordQuery = 'users/';
    const fetchRequest = `${baseUrl}${wordQuery}${username}`;

    console.log(fetchRequest);

    try {
      const response = await fetch(fetchRequest);
      const data = await response.json();
      const reposUrl = data.repos_url;
      setUserData((prev) => ({ ...prev, info: data }));
      if (reposUrl) {
        getRepos(reposUrl);
      }
      console.log(data);
    } catch (error) {
      console.error('Error inside fetchUser: ', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser(user);
    } else {
      setUserData({info: null, repos: []})
    }
  }, [user]);

  return (
    <div className="user-search-container">
      {path.includes('search') && <Form userSearch={fetchUser} />}
      <Card user={userData.info} repos={userData.repos} />
    </div>
  );
};

export default UserSearch;
