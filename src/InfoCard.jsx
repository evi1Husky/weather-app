import weatherMap from "./weatherMap"

export default function InfoCard(props) {
  const city = props.location.name
  const country = props.location.country
  const latitude = props.location.latitude
  const longitude = props.location.longitude
  const temperature = props.weather.current_weather.temperature
  let time = props.weather.current_weather.time
  time = time.split('')
  time[10] = ' '
  time = time.join('')
  const weatherCode = props.weather.current_weather.weathercode
  const tempUnits = props.weather.hourly_units.temperature_2m
  console.log(weatherMap[weatherCode])
  return (
    <div className="info-card">
      <div className="location">
        <p className="city">{city},</p>
        <p className="country">{country}</p>
      </div>
      <p className="coordinates">lat: {latitude} long: {longitude}</p>
      <div className="info-card-weather-container">
        <div className="info-card-wether-box-1">
          <p className="info-card-time">{time}</p>
          <p className="weather-code">light rain</p>
          <p className="info-card-temperature"
          >{temperature}<span className="info-card-temp-units">{tempUnits}</span></p>
        </div>
        <div className="info-card-wether-box-2">
          <img className='weather-icon-info-card' src={weatherMap[weatherCode]} />
        </div>
      </div>
    </div>
  )
}
