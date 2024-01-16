import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'filmAPI/API';
import s from './Movies.module.css';
import { SearchForm, FilmList } from 'components';

export const Movies = () => {
  const [filmList, setFilmList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

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

      {filmList && <FilmList filmList={filmList} />}
    </section>
  );
};
