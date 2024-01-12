import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  //   useParams();
  return (
    <div>
      <h2>MovieDetails</h2>
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
  );
};
