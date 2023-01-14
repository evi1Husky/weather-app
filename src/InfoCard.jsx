import weatherMap from "./weatherMap"

export default function InfoCard(props) {
  const city = props.location.name
  const country = props.location.country
  const latitude = props.location.latitude
  const longitude = props.location.longitude
  const temperature = props.weather.current_weather.temperature
  const time = props.weather.current_weather.time
  const weatherCode = props.weather.current_weather.weathercode
  console.log(weatherCode)
  return (
    <div className="info-card">
      <div className="location">
        <p className="city">{city},</p>
        <p className="country">{country}</p>
      </div>
      <p className="coordinates">lat: {latitude} long: {longitude}</p>
    </div>
  )
}
