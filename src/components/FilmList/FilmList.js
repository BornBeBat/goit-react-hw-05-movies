import { ListItem } from 'components';

export const FilmList = ({ filmList }) => {
  return (
    <ul>
      {filmList?.map(element => (
        <ListItem key={element?.id} element={element} />
      ))}
    </ul>
  );
};
