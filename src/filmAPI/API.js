import axios from 'axios';

class API {
  constructor() {
    this.options = {
      method: 'GET',
      baseURL: 'https://api.themoviedb.org/',
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
      url: '3/trending/all/day',
    };
    const response = await axios(options);
    return response.data;
  }

  async fetchByQuery(query) {
    const options = {
      ...this.options,
      url: '3/search/movie',
      params: { query },
    };
    const response = await axios(options);
    return response.data;
  }
}

export default new API();
