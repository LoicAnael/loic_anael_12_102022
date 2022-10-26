import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../Services/mockData'
import './Dashboard.css'
import { useParams } from 'react-router-dom'
import DailyActivity from '../../Components/DailyActivity/DailyActivity'
import TypeOfPerformance from '../../Components/TypeOfPerformance/TypeOfPerformance'
import SessionDuration from '../../Components/SessionDuration/SessionDuration'
import AverageScore from '../../Components/AverageScore/AverageScore'
import KeyFigures from '../../Components/KeyFigures/KeyFigures'
import {
  getUserInfo,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
} from '../../Services/Api.js'

import { useState, useEffect } from 'react'

const Dashboard = () => {
  let { id } = useParams()
  let userId = parseInt(id)
  const mockUserInfo = USER_MAIN_DATA.find((item) => item.id === userId)
  const mockUserActivity = USER_ACTIVITY.find((item) => item.userId === userId)
  const mockUserSession = USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === userId
  )
  const mockUserPerformance = USER_PERFORMANCE.find(
    (item) => item.userId === userId
  )

  const [dataUser, setDataUSer] = useState(null)
  const [dataActivity, setDataActivity] = useState(null)
  const [dataSession, setDataSession] = useState(null)
  const [dataPerformance, setDataPerformance] = useState(null)
  const [isMockData, setIsMocData] = useState(true)

  useEffect(() => {
    ///////data user info///////
    getUserInfo(id)
      .then((infos) => setDataUSer(infos.data), setIsMocData(false))
      .catch((error) => console.log(error))

    ///////data user acivity//////
    getUserActivity(userId)
      .then((infos) => setDataActivity(infos.data))
      .catch((error) => console.log(error))

    //////data user average-sessions//////
    getUserAverage(userId)
      .then((infos) => setDataSession(infos.data))
      .catch((error) => console.log(error))

    ////// data user perfomances//////
    getUserPerformance(userId)
      .then((infos) => setDataPerformance(infos.data))
      .catch((error) => console.log(error))
  }, [id, userId])
  console.log(isMockData)
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          <span>Bonjour</span>
          <span className="dashboard-title--color">
            {isMockData
              ? mockUserInfo?.userInfos?.firstName
              : dataUser?.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <div className="dashboard-container">
        <section className="dashboard-stats">
          <article className="stats-dailyActivity">
            {isMockData ? (
              <DailyActivity sessions={mockUserActivity?.sessions} />
            ) : (
              <DailyActivity sessions={dataActivity?.sessions} />
            )}
          </article>
          <article className="stats-dailyPerfomances">
            <div className="charts-sessionDuration">
              <div className="charts-sessionDuration__background"></div>
              {isMockData ? (
                <SessionDuration sessions={mockUserSession?.sessions} />
              ) : (
                <SessionDuration sessions={dataSession?.sessions} />
              )}
            </div>
            <div className="charts-typeOfPerformance">
              {isMockData ? (
                <TypeOfPerformance props={mockUserPerformance} />
              ) : (
                <TypeOfPerformance props={dataPerformance} />
              )}
            </div>
            <div className="charts-averageScore">
              {isMockData ? (
                <AverageScore todayScore={mockUserInfo?.todayScore} />
              ) : (
                <AverageScore todayScore={dataUser?.todayScore} />
              )}
            </div>
          </article>
        </section>
        <section className="dashboard-keyFigures">
          {isMockData ? (
            <KeyFigures keyData={mockUserInfo?.keyData} />
          ) : (
            <KeyFigures keyData={dataUser?.keyData} />
          )}
        </section>
      </div>
    </main>
  )
}
export default Dashboard
