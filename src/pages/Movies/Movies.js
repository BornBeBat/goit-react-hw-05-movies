import { SearchForm } from 'components';
import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [filmList, setFilmList] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    API.fetchByQuery(query)
      .then(response => {
        setFilmList(response.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const getSearchQuery = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={getSearchQuery} />
      {filmList.length === 0 && (
        <p>We cant find anythin by your request: {query}</p>
      )}
      {filmList !== null && (
        <ul>
          {filmList.map(e => (
            <li key={e.id}>
              <Link to={`/movies/${e.id}`}>{e.name || e.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
