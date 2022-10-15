import { USER_MAIN_DATA } from '../../Components/API/mockData'
import './Dashboard.css'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
  let { id } = useParams()
  let userId = parseInt(id)

  const userInfo = USER_MAIN_DATA.find((item) => item.id === userId)

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
    </div>
  )
}
export default Dashboard
