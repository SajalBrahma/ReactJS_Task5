import React, { useState } from 'react';

function AgeCalc() {
  const [dob, setdob] = useState('');
  const [current, setcurrent] = useState(null);

  const calculator = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const agediff = new Date(currentDate - birthDate);
    const calculatedage = Math.abs(agediff.getUTCFullYear() - 1970);
    setcurrent(calculatedage);
  };

  const divstyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0px',
    padding: '0px',
  };

  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '300px',
  };

  const labelStyle = {
    marginBottom: '10px', 
  };

  const inputStyle = {
    width: '100%',
    padding: 'auto', 
    marginBottom: '10px', 
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '10px',
    padding: '12px 20px',
  };

  return (
    <div style={divstyle}>
      <div style={containerStyle}>
        <h1>Age Calculator</h1>
        <label style={labelStyle}>Enter your date of birth:</label>
        <br />
        <input
          type="date"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button onClick={calculator} style={buttonStyle}>
          Calculate Age
        </button>
        {current !== null && <p>Your age is {current} years.</p>}
      </div>
    </div>
  );
}

export default AgeCalc;