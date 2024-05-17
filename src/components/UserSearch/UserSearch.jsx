import React from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// user search is supposed to take 'user' and fetch info with that search term, 
  // send found info as props to card

const UserSearch = ({ user }) => {
  const [userData, setUserData] = useState({
    info: null,
    repos: []
  });

  const location = useLocation();
  const path = location.pathname;
  
  const getRepos = async (repos) => {
    const response = await fetch(repos);
    const data = await response.json();
    setUserData((prev) => ({...prev, repos: data}));
  };

  const fetchUser = async (user) => {
    console.log('attempting fetch')
    const baseUrl = `https://api.github.com/`; // get base api url
    const wordQuery = 'users/'; //query for getting users
    const fetchRequest = `${baseUrl}${wordQuery}${user}`;

    console.log(fetchRequest);

    try {
      const response = await fetch(fetchRequest);
      const data = await response.json();
      const repos = data.repos_url;
      setUserData((prev) => ({...prev, info: data}));
      getRepos(repos);
      console.log(data);

    } catch (error) {
      console.log('Error inside fetchUser: ', error);
    }
  };

    useEffect(() => {
      fetchUser(user);
    }, [user]);

  
  return (
    <div className="user-search-container">
       {path.includes('search') &&  <Form userSearch={fetchUser}/>}

       <Card user={userData.info} repos={userData.repos} />
    </div>
  )
}

export default UserSearch;