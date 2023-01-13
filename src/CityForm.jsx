import { useState, useEffect } from "react"
import WeatherFetcher from "./WeatherFetcher"

export default function CityForm() {
  const [city, setCity] = useState('')
  const [cityProp, setCityProp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    data = ([...data.entries()])
    setCityProp(data[0][1])
    localStorage.setItem('city', data[0][1])
  }

  const handleChange = (event) => {
    setCity(event.target.value)
    setCityProp(0)
  }

  useEffect(() => {
    if (localStorage.length == 0) {
      return
    } else {
      setCityProp(localStorage.getItem('city'))
    }
  }, [])

  return (
    <form className="cityForm" onSubmit={handleSubmit}>
      <input className="formInput" type="text" name="city"
        placeholder="City or zip code..." value={city}
        onChange={handleChange} required />
      <button className="submitButton" type="submit">get weather</button>
        <WeatherFetcher city={cityProp} />
    </form>
  );
}