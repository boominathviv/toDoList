import { useState, useEffect } from "react";
//import moment from "moment";

const WheatherForeCast = () => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=Chennai&APPID=45e1d2f6623ae97f1167770d996d1cfe";
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((parseData) => {
        setForecastData(parseData);
      })
      .catch(console.log);
  }, [url]);

  if (!Object.entries(forecastData).length) return <div>Fetching Data..</div>;

  return (
    <div>
      <div className="main">
        <div className="main__top">
          <p className="header">{forecastData.name}</p>
        </div>
        <div className="main___content flex">
          <div className="day">
            Date:
            {new Date(forecastData.timezone * 1000).toLocaleDateString("en-IN")}
          </div>
          <div className="description">{forecastData.weather[0].main}</div>
        </div>
        <div className="flex">
          <div className="main__sun__properties">
            SunRise:
            {new Date(forecastData.sys.sunrise * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
          <div className="main__sun__properties">
            SunSet:
            {new Date(forecastData.sys.sunset * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </div>
        </div>
        <div className="main__climate__propertise flex">
          <div>Temperature: {forecastData.main.temp}</div>
          <div>Humitity: {forecastData.main.humidity}</div>
        </div>
      </div>
    </div>
  );
};

export default WheatherForeCast;
