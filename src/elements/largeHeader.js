import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"
import { Link } from "react-router-dom"

const LargeHeader = ({fillHeart, emptyHeart, heartHover, handleIconClick}) => {
  imagesIcons.heartOutline = heartHover

  return (
    <header className="large-header">
      <Link to="/">
        <img alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      </Link>
      <MiddleHeader/>
      <img onClick={() => handleIconClick("search")} alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => handleIconClick("wishlist")} onMouseLeave={emptyHeart} onMouseOver={fillHeart} alt="heart icon outline" className="large-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img onClick={() => handleIconClick("profile")} alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => handleIconClick("cart")} alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default LargeHeader