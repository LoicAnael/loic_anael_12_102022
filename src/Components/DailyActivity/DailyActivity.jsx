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
import PropTypes from 'prop-types'

/**
 * @description creation of a graphic charter to display the daily activity of users
 * @param {array[]} sessions of the user
 * @param {number} sessions[].day
 * @param {number} sessions[].kilogram
 * @param {number} sessions[].calories
 * @return {HTMLElement}
 */

const DailyActivity = ({ sessions }) => {
  let formatedProps = sessions?.map((item) => ({
    day: item.day.toString().slice(-1),
    kilogram: item.kilogram,
    calories: item.calories,
  }))

  /**
   * @param {boolean} active
   * @param {array} payload
   * @returns
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p>{payload[0].value + 'kg'}</p>
          <p>{payload[1].value + 'Kcal'}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="barChart">
      <div className="barChart-title">
        <p className="barChart-title__name">Activité quotidienne</p>
        <div className="barChart-legend">
          <div className="legend-kilogram">
            <div className="legend-kilogram--blackRound"></div>
            <span>Poids (kg)</span>
          </div>
          <div className="legend-calories">
            <div className="legend-calorie--redRound"></div>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>

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
              domain={[0, 600]}
              dataKey="calories"
              axisLine={false}
              tickLine={false}
              tick={false}
              hide={true}
              yAxisId="cl"
            />
            <Tooltip content={CustomTooltip} />

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
DailyActivity.propTypes = {
  sessions: PropTypes.array,
}

export default DailyActivity
