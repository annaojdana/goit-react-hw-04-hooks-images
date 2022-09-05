import axios from 'axios';

const getImages = async (query, page) => {
  const apiKey = '2517208-093ee8e26dcc8dc903fe58900';
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
  });
  try {
    const response = await axios.get(`https://pixabay.com/api/?${params}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;

