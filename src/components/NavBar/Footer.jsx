import React from 'react';
import NavBar from './NavBar';

const Footer = () => {

  const year = new Date().getFullYear();
  const copy='©';


  return (
    <footer>
      <NavBar />
      <div className="display-flex flex-center copyright">{copy} Veronika Kolesnikova, {year}</div>
    </footer>
  )
}

export default Footer;