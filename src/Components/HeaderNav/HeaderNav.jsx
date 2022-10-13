import { NavLink } from 'react-router-dom'

function HeaderNav() {
  return (
    <nav className="nav-header">
      <li>
        <NavLink activeclassname="active" end to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" end to="/profile">
          Profil
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" end to="/settings">
          Réglage
        </NavLink>
      </li>
      <li>
        <NavLink activeclassname="active" end to="/network">
          Communauté
        </NavLink>
      </li>
    </nav>
  )
}

export default HeaderNav
