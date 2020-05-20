import React from 'react';
import { connect } from 'react-redux';

import { deleteWord } from '../../../redux';

function DisplayField({dictionary = [], deleteWord}) {  
  function handleDelete(e) {
    // onDeleteItem(e.target.name);
    deleteWord(e.target.name);
  }

  const listItems = dictionary.map((item, index) => 
    <li key={`${index}${item.vocabulary}`}>{`${item.vocabulary}: ${item.type} | ${item.definition}`}
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

// read state data from store
const mapStateToProps = state => {
  const { dictionary } = state;
  return { dictionary };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteWord: (value) => dispatch(deleteWord(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayField);