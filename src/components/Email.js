import React, { useState } from 'react'
import "./Email.css"

export function Email({ formData, setFormData }) {
  // function InputField() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  };
  const backgroundColor = inputValue ? inputValue : '#464646';


  return (
    <div>
      <div className="mailContainer">
        <h2>TELL US A LITTLE ABOUT YOURSELF.</h2>
 
         <input type="text" placeholder='first name' value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} /><br /><br />
          <input type="text" placeholder='Last name' value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} /> 
          <br /><br />
          {/* <input type="text" placeholder='color' value={formData.color}  onChange={(event) => setFormData({...formData, color: event.target.value})}/>  */}
        <input type="text" placeholder='color' onChange={handleInputChange} value={inputValue}
          style={{ backgroundColor }} />
        <br /><br />
      </div>
    </div>
  )
}

