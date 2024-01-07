import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"
import { handleIcons } from "../redux/handleIcons"
import { useDispatch, useSelector } from "react-redux"
import { clickedHeart, leftHeart, overHeart } from "../redux/headerHearts"
import { Link } from "react-router-dom"

const SmallHeader = () => {
  const displayIconEl = useSelector((state) => state.handleIcons.displayIconEl)
  const wishlistContents = useSelector((state) => state.handleWishlist.wishlistContents)
  const cartContents = useSelector((state) => state.handleCart.cartContents)
  const heart = useSelector((state) => state.handleHearts.heart)
  const dispatch = useDispatch()

  function clickedHeartIcon() {
    dispatch(handleIcons({identifier: "WISHLIST"}))
    dispatch(clickedHeart())
  }

  return (
    <header className="small-header">
      <HamburgerMenu/>
      <div className="heart-cart-container-s">
        {Object.keys(wishlistContents).length > 0 && <p className="heart-cart-counter-s">{Object.keys(wishlistContents).length}</p>}
        <img onMouseLeave={() => dispatch(leftHeart())} onMouseEnter={() => dispatch(overHeart())} onClick={() => clickedHeartIcon()} alt="heart icon outline" className="small-wishlist-icon" src={heart}/>
      </div>
      <Link className="link-logo" to={"/"}>
        <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      </Link>
      <img onClick={() => {dispatch(handleIcons({identifier: "SEARCH"}))}} alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => {dispatch(handleIcons({identifier: "PROFILE"}))}} alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <div className="heart-cart-container-s">
        {Object.keys(cartContents).length > 0 && <p className="heart-cart-counter-s">{Object.keys(cartContents).length}</p>}
        <img onClick={() => {dispatch(handleIcons({identifier: "CART"}))}} alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
      </div>
      {displayIconEl}
    </header>
  )
}

export default SmallHeader