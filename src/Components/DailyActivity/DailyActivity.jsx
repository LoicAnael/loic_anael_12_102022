import './DailyActivity.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const DailyActivity = (props) => {
  let formatedProps = props.sessions?.map((item) => ({
    day: item.day.toString().slice(-1),
    kilogram: item.kilogram,
    calories: item.calories,
  }))

  return (
    <div className="barChart">
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={formatedProps}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              domain={['dataMin', 'dataMax']}
              tick={{ stroke: '#9B9EAC' }}
            />

            <YAxis
              orientation="right"
              tickCount={3}
              domain={['dataMin - 1', 'dataMax']}
              dataKey="kilogram"
              axisLine={false}
              tickLine={false}
              tickMargin={30}
              tick={{ stroke: '#9B9EAC' }}
            />
            <YAxis
              tickCount={6}
              domain={[0, 600]}
              dataKey="calories"
              axisLine={false}
              tickLine={false}
              tick={false}
              hide={true}
              yAxisId="cl"
            />
            <Tooltip cursor={{ fill: '#C4C4C4', opacity: '0.5' }} offset={35} />

            <Bar
              dataKey="kilogram"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              unit="kg"
              barSize={10}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              unit="kCal"
              yAxisId="cl"
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyActivity
