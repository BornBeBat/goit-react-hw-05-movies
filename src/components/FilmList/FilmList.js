import { useLocation } from 'react-router-dom';
import { ListItem } from 'components';

export const FilmList = ({ filmList }) => {
  const location = useLocation();

  return (
    filmList?.length !== 0 && (
      <ul>
        {filmList?.map(element => (
          <ListItem key={element?.id} location={location} element={element} />
        ))}
      </ul>
    )
  );
};
