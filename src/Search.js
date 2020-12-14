import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState("");

  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "1768d882e21eece70a5c2f0f1301e790";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
  }

  function displayForecast(repsonse) {
    setTemperature(repsonse.data.main.temp);
    setDescription(repsonse.data.weather[0].description);
    setHumidity(repsonse.data.main.humidity);
    setWind(repsonse.data.wind.speed);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (description) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  onSubmit={handleSubmit}
                  onChange={updateCity}
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
        <ul className="Forecast">
          <li>City: {city}</li>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a city" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
