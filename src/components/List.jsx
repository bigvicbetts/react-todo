import React, { useState } from 'react';
import ListItem from './ListItem';
import Actions from './Actions';

function List() {
  const [item, setItem] = useState([]);
  const [done, setDone] = useState([]);

  const addItem = (itemList) => {
    setItem([ ...item, itemList]);
  };

  const clearList = () => {
    setItem([]);
    setDone([]);
  };

  const clearItem = (index) => {
    const notDeleted = item.filter((val, ind) => ind !== index);
    setItem(notDeleted);
  };

  const completeItem = (index) => {
    const doneItem = item.splice(index, 1);
    setItem(item);
    setDone([doneItem[0], ...done]);
  }

  return (
    <div>
      <Actions field={addItem} clearAll={clearList} />
      <ListItem listItem={item} done={done} clearItem={clearItem} completeItem={completeItem} />
    </div>
  );
}

export default List;
