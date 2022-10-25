import './AverageScore.css'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

const chartMargin = { top: 30, right: 30, bottom: 30, left: 30 }

const AverageScore = ({ todayScore }) => (
  <div className="score">
    <h2 className="score-title">Score</h2>
    <div className="score-content">
      <h3>{todayScore * 100}%</h3>
      <p>
        de votre <br /> objectif
      </p>
    </div>

    <ResponsiveContainer className="score__container">
      <RadialBarChart
        data={[{ name: 'Score', value: todayScore }]}
        innerRadius="100%"
        barSize={10}
        startAngle={90}
        endAngle={450}
        margin={chartMargin}
      >
        <PolarAngleAxis tick={false} type="number" domain={[0, 1]} />
        <RadialBar fill="#e60000" cornerRadius={99} dataKey={'value'} />
      </RadialBarChart>
    </ResponsiveContainer>
  </div>
)

AverageScore.propTypes = {
  todayScore: PropTypes.number,
}

export default AverageScore
