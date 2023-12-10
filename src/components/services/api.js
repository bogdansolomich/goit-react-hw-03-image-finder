import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImagesByQuery(query, page) {
  const params = new URLSearchParams({
    key: '40313273-9433ac10f667717a01a17bc3b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });
  const response = await axios.get(`?${params}`);
  return response.data;
}
