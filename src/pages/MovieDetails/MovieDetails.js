import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from './MovieDetails.module.css';

export const MovieDetails = () => {
  const [film, setFilm] = useState({
    genres: [],
    release_date: '',
  });
  const [filmId] = useState(useParams().movieId);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('init');
    API.fetchById(filmId)
      .then(response => {
        console.log(response);
        setFilm(response);
        setStatus('ok');
      })
      .catch(error => console.log(error));
  }, [filmId]);

  return (
    status === 'ok' && (
      <div>
        <div className={s.wrapper}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
            alt="sss"
          />
          <div>
            <h2>
              {(film.original_title || film.original_name) +
                ` (${film.release_date.slice(0, 4)})`}
            </h2>
            <p>User Score: {film.vote_average * 10}%</p>
            <h3>overview</h3>
            <p>{film.overview}</p>
            <h3>genres</h3>
            <p>{film.genres.map(el => el.name).join(', ')}</p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  );
};
