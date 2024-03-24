import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65742b4af941bda3f2af6ecf.mockapi.io/';

export const fetchTrailers = createAsyncThunk(
  'trailers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);