import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { addWord } from '../../../redux';

function AddVocabulary(props) {
  const { addWord } = props;
  const [word, setWord] = useState({vocabulary: '', type: '', definition: ''});

  // disptach actions to the store
  function handleSubmit(e) {
    e.preventDefault();
    // onInputItem(word);
    addWord(word);
    setWord({});
    e.currentTarget.reset();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} >
        <label>
          Input:
          <input name="vocabulary" type="text" placeholder="Add a new word here" onChange={(e) => setWord({...word, vocabulary: e.target.value})} required/> 
        </label>
        <br />
        <label>
          Type:
          <input name="type" type="text" onChange={(e) => setWord({...word, type: e.target.value})} required />
        </label>
        <br />
        <label>
          Definition:
          <textarea onChange={(e) => setWord({...word, definition: e.target.value})} />
        </label>
        <br />
        <Button type="submit" size="small" variant="contained" color="primary">Add</Button>
      </form>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addWord: (value) => dispatch(addWord(value))
  };
}

export default connect(null, mapDispatchToProps)(AddVocabulary);

// function handleChange(e) {
//   let name = e.target.name;
//   let value = e.target.value;
//   if(name === 'vocabulary') {
//     word.vocabulary = value;
//   } else if(name === 'type') {
//     word.type = value;
//   } else {
//     word.definition = value;
//   }
//   console.log(word);
// }