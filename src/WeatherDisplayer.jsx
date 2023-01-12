import { useState, useEffect } from "react"
import WeatherLineChart from "./WeatherLineChart";

export default function WeatherDisplayer(props) {
  const precipitation = props?.data?.hourly?.precipitation
  const temperature = props?.data?.hourly?.temperature_2m
  const time = props?.data?.hourly?.time
  const length = props?.data?.hourly?.time?.length

  let temperatureData = []
  let precipitationData = []
  console.log(props.data)
  for (let index = 0; index < length; index++) {
    temperatureData.push({ x: time[index].slice(8, 13), y: temperature[index] })
    precipitationData.push({ x: time[index].slice(8, 13), y: precipitation[index] })
  }

  return (
    <div>
      <WeatherLineChart data={temperatureData} />
      <WeatherLineChart data={precipitationData} />
    </div>
  )
}
