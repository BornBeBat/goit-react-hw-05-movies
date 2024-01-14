import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [filmList, setFilmList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    API.fetchByQuery(query)
      .then(response => {
        setFilmList(response.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const getSearchQuery = e => {
    e.preventDefault();
    const { value } = e.target.children.query;
    setSearchParams({ q: value });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={getSearchQuery}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {filmList.length !== 0 && (
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
