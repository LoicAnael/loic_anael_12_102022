import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../Components/API/mockData'
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
} from '../../Components/API/Api.js'

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

  const [dataUser, setDataUSer] = useState([])
  const [dataActivity, setDataActivity] = useState([])
  const [dataSession, setDataSession] = useState([])
  const [dataPerformance, setDataPerformance] = useState([])

  useEffect(() => {
    ///////data user info///////
    const getDataUser = async () => {
      try {
        const request = await getUserInfo(id)
        setDataUSer(request.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataUser()
    ///////data user acivity//////
    const getDataActivity = async () => {
      try {
        const request = await getUserActivity(userId)
        setDataActivity(request.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataActivity()
    //////data user average-sessions//////
    const getDataSessions = async () => {
      try {
        const request = await getUserAverage(userId)
        setDataSession(request.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataSessions()
    ////// data user perfomances//////
    const getDataPerfomance = async () => {
      try {
        const request = await getUserPerformance(userId)
        setDataPerformance(request.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDataPerfomance()
  }, [id, userId])
  console.log(dataUser)
  console.log(dataActivity)
  console.log(dataSession)
  console.log(dataPerformance)

  console.log(mockUserInfo)
  console.log(mockUserActivity)
  console.log(mockUserSession)
  console.log(mockUserPerformance)
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          <span>Bonjour</span>
          <span className="dashboard-title--color">
            {mockUserInfo?.userInfos?.firstName}
            {/* {dataUser?.userInfos?.firstName} */}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <div className="dashboard-container">
        <section className="dashboard-stats">
          <article className="stats-dailyActivity">
            <DailyActivity {...mockUserActivity} />
            {/* <DailyActivity {...dataActivity} /> */}
          </article>
          <article className="stats-dailyPerfomances">
            <div className="charts-sessionDuration">
              <div className="charts-sessionDuration__background"></div>
              <SessionDuration {...mockUserSession} />
              {/* <SessionDuration {...dataSession} /> */}
            </div>
            <div className="charts-typeOfPerformance">
              <TypeOfPerformance {...mockUserPerformance} />
              {/* <TypeOfPerformance {...dataPerformance} /> */}
            </div>
            <div className="charts-averageScore">
              <AverageScore scorePercent={mockUserInfo.todayScore} />
              {/* <AverageScore scorePercent={dataUser.todayScore} /> */}
            </div>
          </article>
        </section>
        <section className="dashboard-keyFigures">
          <KeyFigures {...mockUserInfo} />
          {/* <KeyFigures dataUser {...dataUser} /> */}
        </section>
      </div>
    </main>
  )
}
export default Dashboard
