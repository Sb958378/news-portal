import axios from 'axios';

const API_KEY = '335163870f74471dae41f91c0a909786';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = '', page = 1) => {
  const url = `${BASE_URL}/top-headlines?country=us${category ? `&category=${category}` : ''}&page=${page}&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};


