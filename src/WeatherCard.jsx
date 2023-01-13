import clearDay from "./icons/clear-day.svg";

export default function WeatherCard(props) {
  const day = props?.data?.daily?.time[props.day].slice(8, 10)
  const weathercode = props?.data?.daily?.weathercode[props.day]
  const units = props?.data?.daily_units?.temperature_2m_max[0]
  const temperatureMin = props?.data?.daily?.temperature_2m_min[props.day] + units
  const temperatureMax = props?.data?.daily?.temperature_2m_max[props.day] + units
  let weatherIcon = null
  console.log(weathercode)
  if (weathercode === 0) {
    weatherIcon = clearDay
  }
  return (
    <div className="weather-card">
      <p>{day}</p>
      <img className='weather-icon' src={weatherIcon} />
      <p>{temperatureMin} {temperatureMax}</p>
    </div>
  )
}
