import React from 'react';

function ListItem(props) {

  return (
    <div>
      <ul>
      {props.listItem.map((item, i) => (
        <li key={i}>
          {item}
          <button onClick={() => props.completeItem(i)}>Complete</button>
          <button onClick={() => props.clearItem(i)}>Delete</button>
        </li>
      ))}
      </ul>
      <h1>Done List:</h1>
      {props.done.map((item, i) => (
        <li key={i}>
          {item}
        </li>
      ))}
    </div>
  );
}

export default ListItem;

