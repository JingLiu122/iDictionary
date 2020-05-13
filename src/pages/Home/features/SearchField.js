import React from 'react';

export function SearchField(props) {
  const { onSearchItem } = props;
  let search = '';

  function handleChange(e) {
    search = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchItem(search);
    search = '';
    e.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name="vocabulary" type="text" placeholder="Search a word" onChange={handleChange} required />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

