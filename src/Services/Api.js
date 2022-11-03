import User from '../Models/User'
import Performance from '../Models/Performance'
import Activity from '../Models/Activity'
import Session from '../Models/Session'

/**
 * @description gets the user information (depends on id)
 * @param {number} id of the user
 * @returns A promise with the User model object of this user
 */
const getUserInfo = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}`)
  const datas = await response.json()
  if (datas.data.todayScore === undefined)
    datas.data.todayScore = datas.data.score
  return new User(datas.data)
}

/**
 * @description gets the user performance data (depends on userID)
 * @param {number} userId of the user
 * @returns A promise with the Performance of this user
 */
const getUserPerformance = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  )
  const datas = await response.json()
  return new Performance(datas.data)
}

/**
 * @description gets the user activity data (depends on userID)
 * @param {number} userId of the user
 * @returns A promise with the Activity of this user
 */
const getUserActivity = async (userId) => {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
  const datas = await response.json()
  return new Activity(datas.data)
}

/**
 * @description gets the user average session data (depends on userID)
 * @param {number} userId id the user
 * @returns  A promise with the Average sessions of this user
 */
const getUserAverage = async (userId) => {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  )
  const datas = await response.json()
  return new Session(datas.data)
}

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage }
