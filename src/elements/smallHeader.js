import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"
import { handleIcons } from "../redux/handleIcons"
import { useDispatch, useSelector } from "react-redux"

const SmallHeader = () => {
  const displayIconEl = useSelector((state) => state.handleIcons.displayIconEl)
  const dispatch = useDispatch()

  return (
    <header className="small-header">
      <HamburgerMenu/>
      <img onClick={() => {dispatch(handleIcons({identifier: "WISHLIST"}))}} alt="heart icon outline" className="small-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "SEARCH"}))}} alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "PROFILE"}))}} alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "CART"}))}} alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
      {displayIconEl}
    </header>
  )
}

export default SmallHeader