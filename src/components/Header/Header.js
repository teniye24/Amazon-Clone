import React from 'react'
import "./Header.css"
import logo from "./AMZN_BIG.D-8fb0be81.png"
import SearchIcon from "@mui/icons-material/Search"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import flagLogo from "./2560px-Flag_of_the_United_States.svg.png"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from "../Firebase"
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



function Header() {
  const [{cart, user}, dispach] = useStateValue()
  const handleAuthentication = () =>{
    if  (user) (
      auth.signOut()
    )
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="amazon-logo" />
      </Link>
      <div>
        <LocationOnIcon className="header_locationIcon" />
      </div>
      <Link>
        <div className="header_locationWrapper" >
          <span className="header_locatonWrapperOne">Delivering to</span>
          <br />

          <span className="header_locationWrapperTwo">Choose location</span>
        </div>
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_SearchIcon" />
      </div>
      <div className="header_Language">
        <div>
          <img className="flag-logo" src={flagLogo} alt="usFlag" />
        </div>
        <div className="language">EN</div>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header__clearlink">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello, {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionCart">
            <ShoppingCartIcon className="shopping_cartIcon" />
            <span className="header_optionLineTwo header_cartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header