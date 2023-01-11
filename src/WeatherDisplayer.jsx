import { useState, useEffect } from "react"
import WeatherLineChart from "./WeatherLineChart";

export default function WeatherDisplayer(props) {
  if (!props.data)
    return

  const precipitation = props?.data?.hourly?.precipitation
  const temperature = props?.data?.hourly?.temperature_2m
  const time = props?.data?.hourly?.time

  let temperatureData = []

  for (let index = 0; index < time.length; index++) {
    temperatureData.push({ x: time[index].slice(8, 13), y: temperature[index]})
  }

  return (
    <div>
      <WeatherLineChart data={temperatureData}/>
    </div>
  )
}
