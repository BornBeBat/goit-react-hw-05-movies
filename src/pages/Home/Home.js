import { useEffect, useState } from 'react';
import API from 'filmAPI/API';
import s from './Home.module.css';
import { FilmList } from 'components';

export const Home = () => {
  const [filmList, setFilmList] = useState(null);

  useEffect(() => {
    API.fetchHomePage()
      .then(response => {
        setFilmList(response.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className={s.section}>
      <h2>Trending today</h2>
      {filmList && <FilmList filmList={filmList} />}
    </section>
  );
};
