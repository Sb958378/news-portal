import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '335163870f74471dae41f91c0a909786'; // Replace with your News API key
const BASE_URL = 'https://newsapi.org/v2';

// Async thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page }, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/top-headlines?country=us${category ? `&category=${category}` : ''}&page=${page}&apiKey=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.articles;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: '',
    page: 1,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCategory, setPage } = articlesSlice.actions;
export default articlesSlice.reducer;

