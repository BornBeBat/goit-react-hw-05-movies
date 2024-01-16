import API from 'filmAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placeholder from 'image/Placeholder.png';

export const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    API.fetchCasts(movieId)
      .then(response => {
        setData(response.cast);
      })
      .catch(error => console.log(error));
    return () => {};
  }, [movieId]);

  return (
    <>
      {data?.length === 0 && (
        <p>sorry, we don't have any casts for this movie.</p>
      )}
      {data?.length !== 0 && (
        <ul>
          {data?.map(element => (
            <li key={element?.id}>
              <img
                width={150}
                src={
                  element?.profile_path
                    ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element?.profile_path}`
                    : placeholder
                }
                alt={element?.original_name}
              />
              <p>{element?.original_name}</p>
              <p>Character: {element?.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
