import { Link, useLocation } from 'react-router-dom';

export const ListItem = ({ element }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${element?.id}`} state={{ from: location }}>
        {element?.name || element?.title}
      </Link>
    </li>
  );
};
