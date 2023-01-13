import clearDay from './icons/clear-day.svg'
import snow from './icons/overcast-snow.svg'
import heavySnow from './icons/extreme-snow.svg'
import overcast from './icons/overcast.svg'
import partlyCloudy from './icons/partly-cloudy-day.svg'
import drizzle from './icons/overcast-drizzle.svg'
import heavyDrizzle from './icons/extreme-drizzle.svg'
import rain from './icons/overcast-rain.svg'
import heavyRain from './icons/extreme-rain.svg'
import fog from './icons/mist.svg'
import snowGrains from './icons/hail.svg'
import thunderStorm from './icons/thunderstorms-extreme-rain.svg'
import thunderStormSnow from './icons/thunderstorms-extreme-snow.svg'

export default function WeatherCard(props) {
  const day = props?.data?.daily?.time[props.day].slice(8, 10)
  const weathercode = props?.data?.daily?.weathercode[props.day]
  const units = props?.data?.daily_units?.temperature_2m_max[0]
  const temperatureMin = props?.data?.daily?.temperature_2m_min[props.day] + units
  const temperatureMax = props?.data?.daily?.temperature_2m_max[props.day] + units

  const weatherMap = {
    0: clearDay,
    1: clearDay,
    2: partlyCloudy,
    3: overcast,
    45: fog,
    48: fog,
    51: drizzle,
    53: heavyDrizzle,
    55: heavyDrizzle,
    56: drizzle,
    57: heavyDrizzle,
    61: rain,
    63: heavyRain,
    65: heavyRain,
    66: rain,
    67: heavyRain,
    71: snow,
    73: heavySnow,
    75: heavySnow,
    77: snowGrains,
    80: rain,
    81: heavyRain,
    82: heavyRain,
    85: snow,
    86: heavySnow,
    95: thunderStorm,
    96: thunderStormSnow,
    99: thunderStormSnow
  }

  return (
    <div className="weather-card">
      <p>{day}</p>
      <img className='weather-icon' src={weatherMap[weathercode]} />
      <p>{temperatureMin} {temperatureMax}</p>
    </div>
  )
}
