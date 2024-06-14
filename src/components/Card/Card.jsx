import React from 'react';
import Stats from '../Stats/Stats';
import ImageContainer from '../ImageContainer/ImageContainer';
import Anchor from '../Anchor/Anchor';

import './CardStyle.css';

const Card = ({ user, repos, notable, mostUsedLang }) => {
// console.log(repos, ' inside Card');

  const loadingGif = {
    src: "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif",
    alt:"Loading..."
  };

  const loaded = () => {

    const reposJSX = repos.map((item, index) => (
          <li key={index}>
            <Anchor href={item.html_url} innerHtml={item.name} />
            <span>{item.language}</span>
          </li>
       
    ))


    return (

      <div className="card-container">
        
        {notable && <div className='notable'>{notable}</div>}

            <div className='display-flex flex-around top-container'>
              <ImageContainer  src={user.avatar_url} alt={user.login} />
              
                {/* most used languagese */}
                <Stats mostUsedLang={mostUsedLang} />

            </div>

            <div className="bio">
              {user.bio}
            </div>

            <div className="display-flex flex-around repos-container">
              
              <div className="repos-number">{user.public_repos}</div>
              
            <Anchor href={user.html_url} innerHtml={user.html_url} />
            
            </div>

            
            <div className='display-flex all-repos'><ul>{reposJSX}</ul></div>

      </div> 
    );
  };

  const loading = () => {
    return <ImageContainer src={loadingGif.src} alt={loadingGif.alt} />
   
  };

  return user ? loaded() : loading(); 
}

export default Card;
