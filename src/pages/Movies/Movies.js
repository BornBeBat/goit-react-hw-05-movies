import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';
import { ListItem } from 'components/ListItem/ListItem';

export const Movies = () => {
  const [filmList, setFilmList] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const location = useLocation();

  useEffect(() => {
    API.fetchByQuery(query)
      .then(response => {
        setFilmList(response.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const getSearchQuery = e => {
    e.preventDefault();
    const searchKey = e.target.children.query.value;
    if (searchKey === '') {
      alert('inter your film');
      return;
    }
    setSearchParams({ q: searchKey });
    e.target.reset();
  };
  return (
    <section className={s.section}>
      <form onSubmit={getSearchQuery}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {filmList?.map(element => (
          <ListItem key={element?.id} location={location} element={element} />
        ))}
      </ul>
    </section>
  );
};
