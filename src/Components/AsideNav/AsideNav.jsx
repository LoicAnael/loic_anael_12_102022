import bike from '../../Assets/bike-icon.svg'
import yoga from '../../Assets/yoga-icon.svg'
import fitness from '../../Assets/fitness-icon.svg'
import swim from '../../Assets/swim-icon.svg'

function AsideNav() {
  return (
    <ul className="side-icons">
      <li>
        <img src={yoga} alt="yoga" />
      </li>
      <li>
        <img src={swim} alt="swim" />
      </li>
      <li>
        <img src={bike} alt="bike" />
      </li>
      <li>
        <img src={fitness} alt="fitness" />
      </li>
    </ul>
  )
}

export default AsideNav
