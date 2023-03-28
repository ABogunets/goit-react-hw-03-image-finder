const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33341846-2d80dabb5272f7d922b758ae2';
// const API_KEY = '33341846';

export const getPics = (searchQuery, nextPage) => {
  const searchParams = new URLSearchParams({
    queryPerPage: 40,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${nextPage}&?${searchParams}`;

  // const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&page=${this.queryPage}&per_page=${this.queryPerPage}&image_type=${this.image_type}&orientation=${this.orientation}&safesearch=${this.safesearch}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Sorry, no pics on query "${searchQuery}"`)
    );
  });
};
