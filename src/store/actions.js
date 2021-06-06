import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    town: '',
    weatherData: [],
  },
  reducers: {
    getWeather: (state) => {
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${state.town}&units=metric&APPID=b0150d0c9edf7c3f05dd0226a46ed644`
        const axios = require('axios');

        if (state.town !== '') {
            try {
              const response = axios.get(API_URL);
              state.setWeatherData([response.data]);
            } catch (error) {
              alert ('Choose town');
            }
        }
    },
    setTown: (state) => {
      state.town = state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getWeather, setTown } = counterSlice.actions

export default counterSlice.reducer