import React from "react";

const GetUserLocation = ({ getWeatherCords }) => {
    const showLocation = (currentLocation) => {
        const pos = {
            lat : parseInt(currentLocation.coords.latitude, 10),
            long : parseInt(currentLocation.coords.longitude, 10)
        };
        getWeatherCords(pos);
    }

  return (
    <div>
      <p
        onClick={() => {
          navigator.geolocation.getCurrentPosition(showLocation);
        }}
      >
        Get your location
      </p>
    </div>
  );
};

export default GetUserLocation;
