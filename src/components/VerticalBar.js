import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function VerticalBar({ weatherData }) {
  useEffect(() => {
    console.log(weatherData);
    console.log(weatherData.found)
  }, [weatherData])

  return (
    // Check if town exist or was selected
    weatherData.length ? (
      <BarChart width={200} height={300} data={weatherData}>
        <CartesianGrid/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="main.temp" label name="temperature" fill="#8884d8" />
      </BarChart>
    ) : (
      <h1>{weatherData.error !== undefined ? weatherData.error : 'Please select a town first'}</h1>
    )
  );
}

export default VerticalBar;
