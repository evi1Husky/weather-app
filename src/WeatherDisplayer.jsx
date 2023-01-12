import { useState, useEffect } from 'react'
import WeatherLineChart from './WeatherLineChart'
import WeatherCard from './WeatherCard'

export default function WeatherDisplayer(props) {
  const precipitation = props?.data?.hourly?.precipitation
  const temperature = props?.data?.hourly?.temperature_2m
  const time = props?.data?.hourly?.time
  const length = props?.data?.hourly?.time?.length

  let temperatureData = []
  let precipitationData = []

  for (let index = 0; index < length; index++) {
    temperatureData.push({ x: time[index].slice(8, 13), y: temperature[index] })
    precipitationData.push({ x: time[index].slice(8, 13), y: precipitation[index] })
  }

  return (
    <div className='weather-data'>
      <div className='weather-cards'>
        <WeatherCard data={props.data} day={0} />
        <WeatherCard data={props.data} day={1} />
        <WeatherCard data={props.data} day={2} />
        <WeatherCard data={props.data} day={3} />
        <WeatherCard data={props.data} day={4} />
        <WeatherCard data={props.data} day={5} />
        <WeatherCard data={props.data} day={6} />
      </div>
      <WeatherLineChart data={temperatureData} />
      <WeatherLineChart data={precipitationData} />
    </div>
  )
}
