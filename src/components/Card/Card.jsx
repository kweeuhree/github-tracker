import React from 'react';

const Card = ({ user, repos, notable }) => {
console.log(user, repos, ' inside Card');
  const loaded = () => {

    const reposJSX = repos.map((item, index) => (
        <a href={item.html_url} key={index} target='_blank'><li>{item.name}</li></a>
    ))


    return (

      <div className="card-container">
        
        {notable && <div>{notable}</div>}

            <div className="avatar-container">
              <img src={user.avatar_url} alt={user.login} />
            </div>

            <div className="bio">
              {user.bio}
            </div>

            <div className="repos-container">
              <div className="repos-number">{user.public_repos}</div>
            </div>

            <div className="stats">{user.html_url}</div>

            <div className='all-repos'><ul>{reposJSX}</ul></div>

      </div> 
    );
  };

  const loading = () => {
    return <div>loading</div>;
  };

  return user ? loaded() : loading(); 
}

export default Card;
