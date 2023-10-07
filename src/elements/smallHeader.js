import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"

const SmallHeader = ({handleIconClick}) => {
  return (
    <header className="small-header">
      <HamburgerMenu/>
      <img onClick={() => {handleIconClick("wishlist")}} alt="heart icon outline" className="small-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      <img onClick={() => {handleIconClick("search")}} alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => {handleIconClick("profile")}} alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => {handleIconClick("cart")}} alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default SmallHeader