import { useState, useEffect } from "react"
import WeatherFetcher from "./WeatherFetcher"

export default function CityForm() {
  const [city, setCity] = useState('')
  const [cityProp, setCityProp] = useState('')
  const [units, setUnits] = useState('')

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

  const handleUnitsButton = () => {
    const val = localStorage.getItem('units')
    switch (val) {
      case '°C':
        localStorage.setItem('units', '°F')
        setUnits('°F')
        break;
      case '°F':
        localStorage.setItem('units', '°C')
        setUnits('°C')
        break;
    }
  }

  useEffect(() => {
    if (localStorage.length == 0) {
      localStorage.setItem('units', '°C')
      setUnits('°C')
      return
    } else {
      setCityProp(localStorage.getItem('city'))
      setUnits(localStorage.getItem('units'))
    }
  }, [])

  return (
    <div>
      <button className="units-button" value={units} 
        onClick={handleUnitsButton}>units:{units}</button>
      <form className="cityForm" onSubmit={handleSubmit}>
        <input className="formInput" type="text" name="city"
          placeholder="City or zip code..." value={city}
          onChange={handleChange} required />
        <button className="submitButton" type="submit">get weather</button>
        <WeatherFetcher units={units} city={cityProp} />
      </form>
    </div>
  );
}