import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from 'filmAPI/API';
import s from './Home.module.css';
import { ListItem } from 'components/ListItem/ListItem';

export const Home = () => {
  const [filmList, setFilmList] = useState();
  const location = useLocation();

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
      <ul>
        {filmList?.map(element => (
          <ListItem key={element?.id} location={location} element={element} />
        ))}
      </ul>
    </section>
  );
};
