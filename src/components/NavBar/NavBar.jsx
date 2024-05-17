import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const links = ['home', 'search', 'kweeuhree', 'firstnamenika'];

  const linksJSX = links.map((item, index) => (
    <li key={index}>
      <Link to={`/${item}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className='nav-ul'>{linksJSX}</ul>
    </nav>
  )
}

export default NavBar;