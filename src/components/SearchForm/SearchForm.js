import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" name="query" value={query} onChange={updateQuery} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
