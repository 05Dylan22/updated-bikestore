import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleIcons } from "../redux/handleIcons"
import { clickedHeart, overHeart, leftHeart } from "../redux/headerHearts"


const LargeHeader = () => {
  const { displayIconEl } = useSelector((state) => state.handleIcons)
  const heart = useSelector((state) => state.handleHearts.heart)
  const dispatch = useDispatch()

  function clickedHeartIcon() {
    dispatch(handleIcons({identifier: "WISHLIST"}))
    dispatch(clickedHeart())
  }

  return (
    <header className="large-header">
      <Link to="/">
        <img alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      </Link>
      <MiddleHeader/>
      <img onClick={() => dispatch(handleIcons({identifier: "SEARCH"}))} alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onMouseLeave={() => dispatch(leftHeart())} onMouseEnter={() => dispatch(overHeart())} onClick={() => clickedHeartIcon()} alt="heart icon outline" className="large-wishlist-icon" src={heart}/>
      <img onClick={() => dispatch(handleIcons({identifier: "PROFILE"}))} alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => dispatch(handleIcons({identifier: "CART"}))} alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
      {displayIconEl}
    </header>
  )
}

export default LargeHeader