import { useState, useEffect } from "react"
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  buildChartTheme,
  AnimatedAreaSeries,
  AnnotationLabel,
  ParentSize
} from '@visx/xychart';
import { curveLinear, curveStep, curveCardinal } from '@visx/curve'
import { lightTheme, darkTheme, XYChartTheme } from '@visx/xychart';

const customTheme = buildChartTheme({
  backgroundColor: 'black',
  colors: ['lightBlue'],
  svgLabelBig: { fill: '#d6e0f0' },
  svgLabelSmall: { fill: '#d6e0f0' },
  tickLength: 12,
});

export default function WeatherLineChart(props) {
  const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
  };

  const renderChart = (
    <XYChart height={window.innerHeight/3} width={window.innerWidth} 
      xScale={{ type: 'band' }} yScale={{ type: 'linear' }} theme={customTheme}>
      <AnimatedAxis hideAxisLine hideTicks orientation="left" />
      <AnimatedAxis hideAxisLine hideTicks orientation="bottom" />
      <AnimatedLineSeries fillOpacity={0.4} curve={curveCardinal} 
        dataKey="Line 1" data={props.data} {...accessors} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </XYChart>
  );

  return (
    renderChart
  )
}