import { useState, useEffect } from "react"
export default function WeatherDisplayer(props) {
  useEffect(() => {
    if (!props.data)
      return

    const precipitation = props?.data?.hourly?.precipitation
    const temperature = props?.data?.hourly?.temperature_2m
    const wind = props?.data?.hourly?.windspeed_10m
    const time = props?.data?.hourly?.time

    console.log(temperature)

    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d");
    context.moveTo(0, 0)
    context.lineTo(500, 300)
    context.stroke()

  }, [props.data])

  return (
    <div>
      <canvas
        id="myCanvas"
        width="500"
        height="300">
      </canvas>
    </div>
  );
}
