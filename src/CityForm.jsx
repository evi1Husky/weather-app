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
    <form className="cityForm"  onSubmit={handleSubmit}>
      <input className="formInput" type="text" name="city"
        placeholder="your city..." value={city}
        onChange={handleChange} required />
      <button className="submitButton" type="submit">get weather</button>
      {/* <WeatherFetcher city={cityProp} /> */}
      <WeatherFetcher city='tokyo' />
    </form>
  );
}