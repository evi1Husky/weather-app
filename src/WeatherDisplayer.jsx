import { useState, useEffect } from 'react'
import WeatherLineChart from './WeatherLineChart'
import WeatherCard from './WeatherCard'

export default function WeatherDisplayer(props) {
  console.log(props.data)
  const precipitation = props?.data?.hourly?.precipitation
  const temperature = props?.data?.hourly?.temperature_2m
  const time = props?.data?.hourly?.time
  const length = props?.data?.hourly?.time?.length

  let temperatureData = []
  let precipitationData = []

  const [temperatureProp, setTemperatureProp] = useState([])
  const [precipitationProp, setPrecipitationProp] = useState([])

  for (let index = 0; index < length; index++) {
    temperatureData.push({ x: time[index].slice(8, 13), y: temperature[index] })
    precipitationData.push({ x: time[index].slice(8, 13), y: precipitation[index] })
  }

  const cardClick = (starHour, endHour) => (e) => {
    temperatureData = []
    precipitationData = []

    for (let index = starHour; index < endHour; index++) {
      temperatureData.push({ x: time[index].slice(8, 13), y: temperature[index] })
      precipitationData.push({ x: time[index].slice(8, 13), y: precipitation[index] })
    }
    setTemperatureProp(temperatureData)
    setPrecipitationProp(precipitationData)
  }

  useEffect(() => {
    setTemperatureProp(temperatureData)
    setPrecipitationProp(precipitationData)
  }, [props.data])

  if (!props.data || !props.city)
    return

  return (
    <div className='weather-data'>
      <div className='weather-cards' >
        <div onClick={cardClick(0, 24)}>
          <WeatherCard data={props.data} day={0} />
        </div>
        <div onClick={cardClick(24, 48)}>
          <WeatherCard data={props.data} day={1} />
        </div>
        <div onClick={cardClick(48, 72)}>
          <WeatherCard data={props.data} day={2} />
        </div>
        <div onClick={cardClick(72, 96)}>
          <WeatherCard data={props.data} day={3} />
        </div>
        <div onClick={cardClick(96, 120)}>
          <WeatherCard data={props.data} day={4} />
        </div>
        <div onClick={cardClick(120, 144)}>
          <WeatherCard data={props.data} day={5} />
        </div>
        <div onClick={cardClick(144, 168)}>
          <WeatherCard data={props.data} day={6} />
        </div>
      </div>
      <WeatherLineChart data={temperatureProp} />
      <WeatherLineChart data={precipitationProp} />
    </div>
  )
}
