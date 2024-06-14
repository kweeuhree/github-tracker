import React from 'react';
import './ImageContainerStyle.css';

const ImageContainer = ({ src, alt, thisClass }) => {
  return (
    <div className='image-container'>
        <img className={thisClass} src={src} alt={alt} />
    </div>
  )
}

export default ImageContainer;