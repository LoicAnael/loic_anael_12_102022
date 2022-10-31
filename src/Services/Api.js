import User from '../Models/User'
import Performance from '../Models/Performance'
import Activity from '../Models/Activity'
import Session from '../Models/Session'

const getUserInfo = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}`)
  const datas = await response.json()
  if (datas.data.todayScore === undefined)
    datas.data.todayScore = datas.data.score
  return new User(datas.data)
}

const getUserPerformance = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  )
  const datas = await response.json()
  return new Performance(datas.data)
}

const getUserActivity = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
  const datas = await response.json()
  return new Activity(datas.data)
}

const getUserAverage = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  )
  const datas = await response.json()
  return new Session(datas.data)
}

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage }
