import { NavLink } from 'react-router-dom'
import { LINKS } from '../../../constants'

import './NavBar.css'
export const NavBar: React.FC = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='navbar-ul'>
          {
            LINKS.map(link => (
              <li key={link}>
                <NavLink
                  to={'/'.concat(link.toLowerCase())}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
