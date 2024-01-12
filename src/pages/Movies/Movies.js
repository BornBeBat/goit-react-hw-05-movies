import { Link } from 'react-router-dom';

export const Movies = () => {
  const list = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5'];
  return (
    <>
      <h2>Movies list</h2>
      <ul>
        {list.map(e => (
          <li key={e}>
            <Link to={`/movies/${e}`}>{e}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
