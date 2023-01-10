import WeatherDisplayer from "./WeatherDisplayer"
import { useState, useEffect } from "react"

export default function WeatherFetcher(props) {
  const [weatherData, setWeatherData] = useState("")

  useEffect(() => {
    if (props.city) {
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${props.city}`)
        .then(result => result.json()).then((result) => {
          fetch('https://api.open-meteo.com/v1/forecast?' +
            `latitude=${result.results[0].latitude}&` + 
            `longitude=${result.results[0].longitude}` +
            '&hourly=temperature_2m&daily=weathercode,temperature_2m_max,' +
            `temperature_2m_min,precipitation_sum&timezone=${result.results[0].timezone}`)
            .then(result => result.json()).then((result) => {
              setWeatherData(result)
            })
        })
    }
  }, [props.city])

  return (
    <div>
      <WeatherDisplayer data={weatherData} />
    </div>
  )
}
