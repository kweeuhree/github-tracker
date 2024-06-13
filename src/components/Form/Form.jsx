import React from 'react';
import { useState } from 'react';

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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
          type="text" 
          name='userForm' 
          placeholder='enter username' 
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;