import axios from 'axios';

class API {
  constructor() {
    this.options = {
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2NiZTFiNDkwZjM3NTMyZTc4YjNkNzllZjEyOGE3NCIsInN1YiI6IjY1YTEzZmQ2ZjVjYjIxMDEzMmIxZWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KfWlao1JligBgbJD0A10A50OPdjfRLq7XPZcxU8WotY',
      },
    };
  }

  async fetchHomePage() {
    const options = {
      ...this.options,
      url: 'trending/all/day',
    };
    const response = await axios(options);
    return response.data;
  }

  async fetchByQuery(query) {
    const options = {
      ...this.options,
      url: 'search/movie',
      params: { query },
    };
    const response = await axios(options);
    return response.data;
  }
  async fetchById(id) {
    const options = {
      ...this.options,
      url: `movie/${id}`,
    };
    const response = await axios(options);
    return response.data;
  }
  async fetchCasts(id) {
    const options = {
      ...this.options,
      url: `movie/${id}/credits`,
    };
    const response = await axios(options);
    return response.data;
  }
  async fetchReviews(id) {
    const options = {
      ...this.options,
      url: `movie/${id}/reviews`,
    };
    const response = await axios(options);
    return response.data;
  }
}
export default new API();
// https://api.themoviedb.org/3/movie/movie_id/credits
// 'https://api.themoviedb.org/3/movie/872585/reviews';
