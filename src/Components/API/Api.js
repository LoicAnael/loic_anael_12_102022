const getUserInfo = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}`)
  const data = await response.json()

  return data
}

const getUserPerformance = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}/performance`)
  const data = await response.json()

  return data
}

const getUserActivity = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}/activity`)
  const data = await response.json()

  return data
}

const getUserAverage = async (id) => {
  const response = await fetch(
    `http://localhost:3000/user/${id}/average-sessions`
  )
  const data = await response.json()

  return data
}

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage }
