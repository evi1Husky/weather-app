import weatherMap from './weatherMap'

export default function WeatherCard(props) {
  const day = props?.data?.daily?.time[props.day].slice(8, 10)
  const weathercode = props?.data?.daily?.weathercode[props.day]
  const temperatureMin = props?.data?.daily?.temperature_2m_min[props.day] + '°'
  const temperatureMax = props?.data?.daily?.temperature_2m_max[props.day] + '°'

  return (
    <div className="weather-card">
      <p>{day}</p>
      <img className='weather-icon' src={weatherMap[weathercode][0]} />
      <p>{temperatureMin} {temperatureMax}</p>
    </div>
  )
}
