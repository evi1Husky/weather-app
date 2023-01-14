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
import rainShowers from './icons/partly-cloudy-day-rain.svg'
import heavyRainShowers from './icons/extreme-day-rain.svg'
import snowShowers from './icons/partly-cloudy-day-snow.svg'
import heavySnowShowers from './icons/extreme-day-snow.svg'

const weatherMap = {
  0: [clearDay, 'clear sky'],
  1: [clearDay, 'mainly clear'],
  2: [partlyCloudy, 'partly cloudy'],
  3: [overcast, 'overcast'],
  45: [fog, 'fog'],
  48: [fog,  'depositing rime fog'],
  51: [drizzle, 'light dirzzle'],
  53: [heavyDrizzle, 'moderate drizzle'],
  55: [heavyDrizzle, 'dense drizzle'],
  56: [drizzle, 'light freezing drizzle'],
  57: [heavyDrizzle, 'dense freezing drizzle'],
  61: [rain, 'light rain'],
  63: [heavyRain, 'moderate rain'],
  65: [heavyRain, 'heavy rain'],
  66: [rain, 'light freezing rain'],
  67: [heavyRain, 'heavy freezing rain'],
  71: [snow, 'light snow'],
  73: [heavySnow, 'moderate snow'],
  75: [heavySnow, 'heavy snow'],
  77: [snowGrains, 'snow grains'],
  80: [rainShowers, 'light rain showers'],
  81: [heavyRainShowers, 'moderate rain showers'],
  82: [heavyRainShowers, 'heavy rain showers'],
  85: [snowShowers, 'light snow showers'],
  86: [heavySnowShowers, 'heavy snow showers'],
  95: [thunderStorm, 'thunderstorm'],
  96: [thunderStormSnow, 'thunderstorm with hail'],
  99: [thunderStormSnow, 'thunderstorm with heavy hail']
}

export default weatherMap