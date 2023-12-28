import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"
import { handleIcons } from "../redux/handleIcons"
import { useDispatch, useSelector } from "react-redux"
import { clickedHeart, leftHeart, overHeart } from "../redux/headerHearts"
import { Link } from "react-router-dom"

const SmallHeader = () => {
  const displayIconEl = useSelector((state) => state.handleIcons.displayIconEl)
  const heart = useSelector((state) => state.handleHearts.heart)
  const dispatch = useDispatch()

  function clickedHeartIcon() {
    dispatch(handleIcons({identifier: "WISHLIST"}))
    dispatch(clickedHeart())
  }

  return (
    <header className="small-header">
      <HamburgerMenu/>
      <img onMouseLeave={() => dispatch(leftHeart())} onMouseEnter={() => dispatch(overHeart())} onClick={() => clickedHeartIcon()} alt="heart icon outline" className="small-wishlist-icon" src={heart}/>
      <Link className="link-logo" to={"/"}>
        <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      </Link>
      <img onClick={() => {dispatch(handleIcons({identifier: "SEARCH"}))}} alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "PROFILE"}))}} alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "CART"}))}} alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
      {displayIconEl}
    </header>
  )
}

export default SmallHeader