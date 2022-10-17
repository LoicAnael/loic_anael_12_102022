import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../Components/API/mockData'
import './Dashboard.css'
import { useParams } from 'react-router-dom'
import DailyActivity from '../../Components/DailyActivity/DailyActivity'
const Dashboard = () => {
  let { id } = useParams()
  let userId = parseInt(id)

  const userInfo = USER_MAIN_DATA.find((item) => item.id === userId)
  const userActivity = USER_ACTIVITY.find((item) => item.userId === userId)
  const userSession = USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === userId
  )
  const userPerformance = USER_PERFORMANCE.find(
    (item) => item.userId === userId
  )

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          <span>Bonjour</span>
          <span className="dashboard-title--color">
            {userInfo?.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <section className="dashboard-stats">
        <article className="stats-dailyActivity">
          <DailyActivity {...userActivity} />
        </article>
      </section>
    </div>
  )
}
export default Dashboard
