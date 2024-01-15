import React from 'react';
import { Link } from 'react-router-dom';

export const ListItem = ({ element, location }) => {
  return (
    <li>
      <Link to={`/movies/${element?.id}`} state={{ from: location }}>
        {element?.name || element?.title}
      </Link>
    </li>
  );
};
