import { Route, Routes } from 'react-router-dom';
import { Home, MovieDetails, Movies } from 'pages';
import { Layout } from 'components';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
