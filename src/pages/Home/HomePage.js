import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import { AddVocabulary, DisplayField, SearchField, ResultField } from './features';
import AddVocabulary from './features/AddVocabulary';
import DisplayField from './features/DisplayField';
import SearchField from './features/SearchField';
import ResultField from './features/ResultField';

export function HomePage() {
  const initialDictionary = () => JSON.parse(localStorage.getItem('dictionary')) || [];
  // declare local state variables
  const [d, setDictionary] = useState(initialDictionary);
  const [search, setSearch] = useState('');

  // side-effect hooks
  useEffect(() => {
    // obj.toString() => [object Object]
    localStorage.setItem("dictionary", JSON.stringify(d));
  }, [d]);

  function handleInputItem(dict) {
    let index = d.findIndex(item => item.vocabulary === dict.vocabulary);
    const word = {vocabulary: dict.vocabulary, type: dict.type, definition: dict.definition};
    if(index > -1) {
      const list = [...d];
      list[index] = word
      setDictionary(list);
    } else {
      setDictionary([...d, word]);  
    }
  }

  const handleDeleteItem = (value) => {
    const filteredDictionary = d.filter((item) => item.vocabulary !== value);
    setDictionary(filteredDictionary);
  }

  const handleSearchItem = (word) => {
    setSearch(word);
  }

  return (
    <div className="App">
      <header className="App-header">          
        <AddVocabulary onInputItem={handleInputItem}/>
        <br />
        <DisplayField onDeleteItem={handleDeleteItem}/>

        <SearchField onSearchItem={handleSearchItem} />
        <ResultField />
      </header>
    </div>
  );
}

// export default connect(mapStateToProps)(HomePage);