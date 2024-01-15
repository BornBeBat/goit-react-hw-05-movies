import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import API from 'filmAPI/API';
import s from './Movies.module.css';
import { SearchForm, ListItem } from 'components';

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

  const getSearchQuery = searchQuery => {
    setSearchParams({ q: searchQuery });
  };
  return (
    <section className={s.section}>
      <SearchForm getSearchQuery={getSearchQuery} />

      <ul>
        {filmList?.map(element => (
          <ListItem key={element?.id} location={location} element={element} />
        ))}
      </ul>
    </section>
  );
};
