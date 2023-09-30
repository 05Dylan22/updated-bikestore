import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"

const LargeHeader = ({fillHeart, emptyHeart, heartHover, openCloseWishlist}) => {
  imagesIcons.heartOutline = heartHover



  return (
    <header className="large-header">
      <img alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      <MiddleHeader/>
      <img alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={openCloseWishlist} onMouseLeave={emptyHeart} onMouseOver={fillHeart} alt="heart icon outline" className="large-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default LargeHeader