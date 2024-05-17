import React from 'react';
import { useState } from 'react';

const Form = (props) => {

  const [formData, setFormData] = useState({
    searchTerm:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = event.target.elements.userFrom.value;
    setFormData(user);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name='userForm' placeholder='enter username' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;