// Write your JS code here
import './index.css'

const Header = () => (
  <div className="container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt=" website logo"
        className="logo"
      />
    </div>
    <ul className="row-wise">
      <li>Home</li>
      <li>Products</li>

      <li>Cart</li>
      <div>
        <button className="btn">Logout </button>
      </div>
    </ul>
  </div>
)

export default Header
