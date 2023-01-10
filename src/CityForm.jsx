import { useState } from "react"
import WeatherFetcher from "./WeatherFetcher"

export default function CityForm() {
  const [city, setCity] = useState('')
  const [cityProp, setCityProp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    let data = new FormData(event.target)
    data = ([...data.entries()])
    setCityProp(data[0][1])
  }

  const handleChange = (event) => {
    setCity(event.target.value)
    setCityProp(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>city</label>
        <input type="text" name="city" placeholder="....." value={city}
          onChange={handleChange} required />
        <button type="submit">get weather</button>
      </form>
      <WeatherFetcher city={cityProp} />
    </div>
  );
}