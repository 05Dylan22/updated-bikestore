import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"

const LargeHeader = ({fillHeart, emptyHeart, heartHover}) => {
  imagesIcons.heartOutline = heartHover



  return (
    <header className="large-header">
      <img onClick={handleIconClick} alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      <MiddleHeader/>
      <img onClick={handleIconClick} alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={handleIconClick} onMouseLeave={emptyHeart} onMouseOver={fillHeart} alt="heart icon outline" className="large-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img onClick={handleIconClick} alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={handleIconClick} alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default LargeHeader