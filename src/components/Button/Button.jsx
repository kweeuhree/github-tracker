import React from 'react';

const Button = ({ action, type }) => {
  return (
    <button onClick={()=> action()}>{type}</button>
  )
}

export default Button;