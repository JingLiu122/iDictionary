import React from 'react';

export function DisplayField(props) {
  const { dictionary, onDeleteItem } = props;
  
  function handleDelete(e) {
    onDeleteItem(e.target.name);
  }

  const listItems = dictionary.map((item) => 
    <li key=
      {item.vocabulary}>{`${item.vocabulary}: ${item.type} | ${item.definition}`}
      <button name={item.vocabulary} onClick={handleDelete}>Delete</button>
    </li>
  );

  return (
    <div>
      Vocabularies
      <ul>{listItems}</ul>
    </div>
  );
}