import React, {useState, useEffect} from 'react'


const Card = ({ user }) => {

console.log(user);
  const loaded = () => {
    return <div>loaded</div>;
  };

  const loading = () => {
    return <div>loading</div>;
  };

  return user ? loaded() : loading(); 
}

export default Card;
