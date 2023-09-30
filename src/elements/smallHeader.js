import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"

const SmallHeader = () => {
  return (
    <header className="small-header">
      <HamburgerMenu/>
      <img alt="heart icon outline" className="small-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      <img alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <img alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default SmallHeader