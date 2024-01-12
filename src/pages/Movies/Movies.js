import { SearchForm } from 'components';
import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [filmList, setFilmList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    API.fetchByQuery(query)
      .then(response => {
        console.log(response);
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
      <ul>
        {filmList.map(e => (
          <li key={e.id}>
            <Link to={`/movies/${e.id}`}>{e.name || e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
