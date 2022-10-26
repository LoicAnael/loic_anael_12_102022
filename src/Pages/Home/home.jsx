import './Home.css'
import { Link } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../Services/mockData'
const Home = () => (
  <div>
    <div className="home">
      <h1>Users Name</h1>
      <div className="name-container">
        {USER_MAIN_DATA.map((user, index) => (
          <Link to={'user/' + user.id} className="name" key={index}>
            {user.userInfos.firstName} {user.userInfos.lastName}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Home
