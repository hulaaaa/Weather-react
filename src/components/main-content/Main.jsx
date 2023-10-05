import { useState, useEffect } from 'react'
import './Main.css'

const Main = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    setData(props.dataWeather);
  }, [props.dataWeather]);
  let weatherDescription = data && data.weather && data.weather[0] ? data.weather[0].main : '';
  let weatherTemp = data && data.main ? data.main.temp : '';
  let weatherCity = data && data.name ?  data.name : '';
  let weatherCountry = data && data.sys ? data.sys.country : '';
  let weatherHum = data && data.main ? data.main.humidity : '';
  let weatherFeelLike = data && data.main ? data.main.feels_like : '';

  // const weatherDescription = data && data.weather && data.weather[0] ? data.weather[0].description : '';
  // const weatherTemp = data && data.weather && data.weather[0] ? data.weather[0].description : '';

  return (
    weatherDescription &&  weatherTemp && weatherCity &&  weatherCountry && weatherHum && weatherFeelLike
    ? 
      <div 
        className="card bg-base-100 shadow-xl"
        style={{
          width: '500px',
          height: '500px'
        }}
      >
        <div className="card-body">
          <div id="header">
            <h2 id="city">{weatherCity}, {weatherCountry}</h2>
          </div>

          <div className="centerApp" id="mainCenter">
              <div id="temp">
                  <span id="tempMain" style={{ fontSize: '5em' }} >{parseInt(weatherTemp)}</span>
                  <span id="symbTemp" style={{ fontSize: '2em' }} >°C</span>
              </div>
              <p id="descript">{weatherDescription}</p>
          </div>

          <div className="footerApp" id="bottom">
              <div className="subDiv" id="one">
                  <div className="subDiv-p" id="visibility">
                      <p className="p2">
                        <b>Humidity:</b> {weatherHum}%
                      </p>
                      <p className="pDiv" id="visDiv"></p>
                  </div>

                  <div className="subDiv-p" id="feellike">
                      <p className="p2">
                        <b>Feels like:</b> {weatherFeelLike}°C
                      </p>
                      <p className="pDiv" id="fellDiv"></p>
                  </div>
              </div>
          </div>
        </div>
      </div> 
    : ""
  )
  
}

export default Main