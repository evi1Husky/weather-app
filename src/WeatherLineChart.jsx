import {
  AnimatedAxis,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  buildChartTheme,
  AnimatedAreaSeries,
} from '@visx/xychart';
import { curveLinear, curveStep, curveCardinal } from '@visx/curve'

const customTheme = buildChartTheme({
  backgroundColor: 'black',
  colors: ['rgb(219, 231, 255)'],
  svgLabelBig: { fill: 'rgb(219, 231, 255)' },
  svgLabelSmall: { fill: 'rgb(219, 231, 255)' },
  tickLength: 12,
});

export default function WeatherLineChart(props) {
  const accessors = {
    xAccessor: (d) => d.x,
    yAccessor: (d) => d.y,
  };

  const renderChart = (
    <XYChart height={window.innerHeight / 3} width={window.innerWidth}
      xScale={{ type: 'band' }} yScale={{ type: 'linear' }} theme={customTheme}>
      <AnimatedAxis hideAxisLine hideTicks orientation="left" />
      <AnimatedAxis hideAxisLine hideTicks orientation="bottom" numTicks={7} />
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