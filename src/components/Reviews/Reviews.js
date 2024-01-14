import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchReviews(movieId)
      .then(response => {
        setData(response.results);
      })
      .catch(error => console.log(error));
    return () => {};
  }, [movieId]);

  return (
    <>
      {data !== null && data.length === 0 && (
        <p>sorry, we don't have any reviews for this movie.</p>
      )}
      {data !== null && (
        <ul>
          {data.map(el => (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
