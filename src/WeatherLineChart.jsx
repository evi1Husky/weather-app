import {
  AnimatedAxis,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  buildChartTheme,
  AnimatedAreaSeries,
  BarSeries
} from '@visx/xychart';
import { curveLinear, curveStep, curveCardinal } from '@visx/curve'

const customTheme = buildChartTheme({
  backgroundColor: 'black',
  colors: ['rgb(219, 231, 255)'],
  svgLabelBig: { fill: 'rgb(219, 231, 255)' },
  svgLabelSmall: { fill: 'rgb(219, 231, 255)', fontSize: 9, fontWeight: 350},
  tickLength: 16,
});

export default function WeatherLineChart(props) {
  const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
  };

  let width = window.innerWidth
  let height = window.innerHeight

  if (window.innerWidth < 460)
    width += 25

  const renderChart = (
    <XYChart height={height / 3.5} width={width}
      xScale={{ type: 'band' }} yScale={{ type: 'linear' }} theme={customTheme}>
      <AnimatedAxis hideAxisLine hideTicks orientation="left" numTicks={7} />
      <AnimatedAxis hideAxisLine hideTicks orientation="bottom" numTicks={7} />
      <AnimatedAreaSeries fillOpacity={0.4} curve={curveCardinal}
        dataKey="Line 1" data={props.data} {...accessors} />
      {/* <BarSeries
        dataKey="Line 1" data={props.data} {...accessors} /> */}
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