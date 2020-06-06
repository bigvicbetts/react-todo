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
      <h2>Done List:</h2>
      <ul>
      {props.done.map((item, i) => (
        <li key={i} style={{textDecoration: 'line-through'}}>
          {item}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ListItem;

