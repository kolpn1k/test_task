// import components and weather reducer
import CitySearch from './components/CitySearch';
import VerticalBar from './components/VerticalBar';
import GetUserLocation from './components/GetUserLocation';
import { getWeather as getWeatherAction } from './store/modules/weather';
import { getWeatherCords as getWeatherCordsAction } from './store/modules/weather';

import { connect } from 'react-redux';
 
function App({ weatherData, getWeather, getWeatherCords }) {
  return (
    <>
      <GetUserLocation getWeatherCords={getWeatherCords}/>
      <CitySearch getWeather={getWeather}/>
      <VerticalBar weatherData={weatherData}/>
    </>
  );
}

// connect mapStateToProps and mapDispatchToProps to App component
export default connect(
  weatherData => weatherData,
  {
    getWeather: getWeatherAction,
    getWeatherCords: getWeatherCordsAction
  }
)(App);
