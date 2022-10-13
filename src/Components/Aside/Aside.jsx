import AsideNav from '../AsideNav/AsideNav'
import './Aside.css'

function Aside() {
  return (
    <div className="sidebar">
      <AsideNav />
      <div className="copyright">
        <p>Copyright, SportSee 2022</p>
      </div>
    </div>
  )
}

export default Aside
