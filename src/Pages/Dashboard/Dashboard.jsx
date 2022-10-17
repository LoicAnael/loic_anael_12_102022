import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../Components/API/mockData'
import './Dashboard.css'
import { useParams } from 'react-router-dom'
import DailyActivity from '../../Components/DailyActivity/DailyActivity'

import SessionDuration from '../../Components/SessionDuration/SessionDuration'

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
    <main className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          <span>Bonjour</span>
          <span className="dashboard-title--color">
            {userInfo?.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <section className="dashboard-stats">
        <article className="stats-dailyActivity">
          <DailyActivity {...userActivity} />
        </article>
        <article>
          <div className="charts-sessionDuration">
            <div className="charts-sessionDuration__background"></div>
            <SessionDuration {...userSession} />
          </div>
        </article>
      </section>
    </main>
  )
}
export default Dashboard
