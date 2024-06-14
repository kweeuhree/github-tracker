import React from 'react';
import { useState } from 'react';
import './FormStyle.css';

const Form = (props) => {

  const [formData, setFormData] = useState({
    searchTerm:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.userSearch(formData.searchTerm);
    event.target.reset();
    
  };

  const handleChange = (event) => {
    setFormData({...formData, searchTerm: event.target.value});
  };

  return (
    <div className='display-flex form-container'>
      <form className='display-flex flex-center flex-around' onSubmit={handleSubmit}>
        
        <input type="submit" value="Submit" />

        <input 
          onChange={handleChange} 
          type="text" 
          name='userForm' 
          placeholder='enter username' 
        />
       
      </form>
    </div>
  );
};

export default Form;