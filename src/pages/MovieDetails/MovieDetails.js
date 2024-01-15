import API from 'filmAPI/API';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import s from './MovieDetails.module.css';
import plaseholder from 'image/Placeholder.png';

export const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const variable = useLocation();
  const location = useRef(variable);

  useEffect(() => {
    API.fetchById(movieId)
      .then(response => {
        setFilm(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    <section className={s.section}>
      <Link className={s.backBtn} to={location.current.state?.from ?? '/'}>
        back
      </Link>
      {film && (
        <div className={s.wrapper}>
          <img
            src={
              film?.poster_path
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${film?.poster_path}`
                : plaseholder
            }
            width={250}
            alt="poster "
          />
          <div>
            <h2>
              {(film?.original_title || film?.original_name || '') +
                ` (${film?.release_date?.slice(0, 4) || ''})`}
            </h2>
            <p>User Score: {(film?.vote_average * 10).toFixed(2)}%</p>
            <h3>overview</h3>
            <p>{film?.overview}</p>
            <h3>genres</h3>
            <p>{film?.genres.map(el => el.name).join(', ')}</p>
          </div>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
