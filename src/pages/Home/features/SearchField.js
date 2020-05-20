import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchWord } from '../../../redux';

function SearchField(props) {
  const { searchWord } = props;
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    searchWord(search);
    setSearch('');
    e.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name="vocabulary" type="text" placeholder="Search a word" onChange={(e) => setSearch(e.target.value)} required />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    searchWord: (value) => dispatch(searchWord(value))
  }
}

export default connect(null, mapDispatchToProps)(SearchField);