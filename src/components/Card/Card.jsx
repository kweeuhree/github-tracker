import React, { useState, useEffect } from 'react';
//components
import Stats from '../Stats/Stats';
import ImageContainer from '../ImageContainer/ImageContainer';
import Anchor from '../Anchor/Anchor';
//css
import './CardStyle.css';


const Card = ({ user, repos, notable, mostUsedLang }) => {
// console.log(repos, ' inside Card');

//set state to trigger onload timer
  const [pageLoaded, setPageLoaded] = useState(false);
//trigger soft text appearance
  useEffect(() => {
    //set time out
    const timer = setTimeout(() => {
      //trigger new style
      setPageLoaded(true);
    }, 150); //set timer

    //clean up function prevents memory leaks
    return () => clearTimeout(timer);
  }, [])

  //loading gif
  const loadingGif = {
    src: "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif",
    alt:"Loading...",
    class: 'loading-gif'
  };

  // display links to repositories on load
  const loaded = () => {
    //map through all repositories
    const reposJSX = repos.map((item, index) => (
          <li key={index}>
            {/* display anchor element */}
            <Anchor href={item.html_url} innerHtml={item.name} />
            {/* most used language of the repository */}
            <span>{item.language}</span>
          </li>
       
    ))

// main function ------------------------------------------------------
    return (

      <div className="card-container">
        {/* if it is a notable user, display description */}
        {notable && 
          <div className={`notable ${pageLoaded ? 'fade-in' : ''}`}>
            {notable}
          </div>}

            {/* display image */}
            <div className='display-flex flex-around top-container'>
              <ImageContainer  src={user.avatar_url} alt={user.login} />
              
                {/* most used languagese */}
                <Stats mostUsedLang={mostUsedLang} />

            </div>

            {/* bio */}
            <div className="bio">
              {user.bio}
            </div>

              {/* container  with the link to github and total number of repositories*/}
            <div className="display-flex flex-around repos-container">
              
              <div className="repos-number">{user.public_repos}</div>
              {/* display the link */}
            <Anchor href={user.html_url} innerHtml={user.html_url} />
            
            </div>

            {/* all repositories */}
            <div className='display-flex all-repos'><ul>{reposJSX}</ul></div>

      </div> 
    );
  };

  const loading = () => {
    return <ImageContainer thisClass={loadingGif.class} src={loadingGif.src} alt={loadingGif.alt} />
  };

  return user ? loaded() : loading(); 
}

export default Card;
