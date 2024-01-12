import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from 'filmAPI/API';

export const Home = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    API.fetchHomePage()
      .then(response => {
        console.log(response.results);
        setFilmList(response.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {filmList.map(e => (
          <li key={e.id}>
            <Link to={`/movies/${e.id}`}>
              {e.original_name || e.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
