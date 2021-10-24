import './Header.scss';
import { Login } from './login/Login';

export function Header() {
  return (
    <div className="header">
      <div className="header_logo">Professor Responde</div>

      <nav className="header_nav">
        <ul className="header_nav_list">
          <li className="header_nav_list_item">
            Home
          </li>
          <li className="header_nav_list_item">
            Conheça o Professor
          </li>
          <li className="header_nav_list_item header_nav_list_item_cta">
            <span className="header_nav_list_item_cta_visible">Perguntar</span>
            <span className="header_nav_list_item_cta_invisible">Quero saber...</span>
          </li>
        </ul>
      </nav>

      <Login></Login>

    </div>
  )
}