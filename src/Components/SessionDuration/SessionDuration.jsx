import './SessionDuration.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

let days = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
}

const SessionDuration = (props) => {
  let formatedProps = props.sessions?.map((item) => ({
    day: days[item.day],
    sessionLength: item.sessionLength,
  }))

  return (
    <div className="session">
      <ResponsiveContainer>
        <LineChart
          data={formatedProps}
          width={600}
          height={300}
          margin={{ top: 80, right: 15, left: 15, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="#FFFF"
            domain={[0, 0]}
            tick={{ fontSize: 12 }}
            minTickGap={3}
            interval={'preserveStartEnd'}
          />
          <YAxis
            hide={true}
            domain={['dataMin - 40', 'dataMax + 30']}
            dataKey="sessionLength"
            tickLine={false}
          />
          <Tooltip />
          <Line
            dataKey="sessionLength"
            type="natural"
            dot={false}
            stroke="#FFFF"
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.5)',
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SessionDuration
