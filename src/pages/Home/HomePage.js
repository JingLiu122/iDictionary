import React, { useState, useEffect } from 'react';

import { AddVocabulary, DisplayField, SearchField, ResultField } from './features';

// use Redux
export function HomePage() {
  const initialDictionary = () => JSON.parse(localStorage.getItem('dictionary')) || [];
  // declare local state variables
  const [dictionary, setDictionary] = useState(initialDictionary);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // obj.toString() => [object Object]
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  }, [dictionary]);

  function handleInputItem(dict) {
    let index = dictionary.findIndex(item => item.vocabulary === dict.vocabulary);
    const word = {vocabulary: dict.vocabulary, type: dict.type, definition: dict.definition};
    if(index > -1) {
      const list = [...dictionary];
      list[index] = word
      setDictionary(list);
    } else {
      setDictionary([...dictionary, word]);  
    }
  }

  const handleDeleteItem = (value) => {
    const filteredDictionary = dictionary.filter((item) => item.vocabulary !== value);
    setDictionary(filteredDictionary);
  }

  const handleSearchItem = (word) => {
    setSearch(word);
  }

  const style = {
    Paper: { marginTop: 20, marginBottom: 10}
  }

  return (
    <div className="App">
      <header className="App-header">  
        <AddVocabulary onInputItem={handleInputItem} />
        <br />
        <DisplayField dictionary={dictionary} onDeleteItem={handleDeleteItem}/>

        <SearchField onSearchItem={handleSearchItem} />
        <ResultField dictionary={dictionary} search={search} />
      </header>
    </div>
  );
}