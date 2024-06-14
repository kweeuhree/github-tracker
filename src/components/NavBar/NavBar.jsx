import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyle.css';

const NavBar = () => {

  const links = ['search', 'kweeuhree', 'firstnamenika'];

  const linksJSX = links.map((item, index) => (
    <li key={index}>
      <Link to={`/${item}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className='display-flex flex-around nav-ul'>{linksJSX}</ul>
    </nav>
  )
}

export default NavBar;