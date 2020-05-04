import React from 'react';

function inputField(props) {
  const { onInputItem } = props;
  // use hooks eg useState
  let dictionary = {
    vocabulary: '',
    type: '',
    definition: '',
  };

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'vocabulary') {
      dictionary.vocabulary = value;
    } else if(name === 'type') {
      dictionary.type = value;
    } else {
      dictionary.definition = value;
    }
    console.log(dictionary)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onInputItem(dictionary);

    // insertToLocalStorage();

    dictionary = {};
    e.currentTarget.reset();
  }

  // TODO: modify the existing object if found, instead of append a new one => checked
  // function insertToLocalStorage() {
  //   const webStorage = JSON.parse(localStorage.getItem('dictionary'));
  //   const word = {vocabulary: dictionary.vocabulary, type: dictionary.type, definition: dictionary.definition};
  //   let index = webStorage.findIndex(item => item.vocabulary === dictionary.vocabulary);

  //   if(index > -1) {
  //     webStorage[index] = word;
  //   } else {
  //     webStorage.push(word);
  //   }

  //   // obj.toString() => [object Object]
  //   localStorage.setItem("dictionary", JSON.stringify(webStorage));
  // }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} >
        <label>
          Input:
          <input name="vocabulary" type="text" placeholder="Add a new word here" onChange={handleChange} required/> 
        </label>
        <br />
        <label>
          Type:
          <input name="type" type="text" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Definition:
          <textarea onChange={handleChange} />
        </label>
        <br />
        <button type="Submit">Add</button>
      </form>
    </React.Fragment>
  );
}

export default inputField;