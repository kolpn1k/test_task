const moduleName = 'weather';
const axios = require('axios');

// set dispatch cases as a const 
const GET_WEATHER = `${moduleName}/GET_WEATHER`;
const CLEAR_WEATHER_STATE = `${moduleName}/CLEAR_WEATHER_STATE`;

const defaultState = {
    weatherData: [],
};

export const weatherData = (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_WEATHER:
            return payload;
        case CLEAR_WEATHER_STATE: 
            return { defaultState };
        default:
            return state;
    }
};

// get a weather forecast for a custom town from server API
export const getWeather = (town) => async (dispatch) => {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${town}&units=Metric&appid=b0150d0c9edf7c3f05dd0226a46ed644`

    try {
        const response = await axios.get(API_URL);
        dispatch({ type: GET_WEATHER, payload: [response.data] });
    } catch (error) {
        dispatch({ type: GET_WEATHER, payload: {error: 'Town not found'} })
    }
}