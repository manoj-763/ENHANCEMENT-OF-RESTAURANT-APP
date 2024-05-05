import './index.css'
import {IoCartOutline} from 'react-icons/io5'

const Header = () => (
  
    <div className="nav-bar">
      <nav className="nav-heading">
        <h1>UNI Resto Cafe</h1>
        <ul className="list-items">
          <li>My Order</li>
          <div className="cart-logo">
            <IoCartOutline size={30} />
          </div>
          <div className="nav-cart-count">0</div>
        </ul>
      </nav>
    </div>
)
export default Header
