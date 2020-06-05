import React, { useState } from 'react';

const Action = (props) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    props.field(inputValue);
    setInputValue('');
  };
  

  return (
    <div>
      <input type='text' value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={handleButtonClick}>Add ToDo</button>
      <button onClick={props.clearAll}>Clear All</button>
    </div>
  );
};

export default Action;
