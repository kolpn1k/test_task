import { useState } from 'react';

function CitySearch({ getWeather }) {
  const [town, setTown] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setTown(e.target.value)} />
      <button type="button" onClick={() => getWeather(town)}>Get weather!</button>
    </div>
  );
}

export default CitySearch;
