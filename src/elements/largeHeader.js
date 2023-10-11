import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"
import { Link } from "react-router-dom"
import { useContext } from "react"
import SearchPage from "./searchPage"
import Wishlist from "./wishlist"
import Profile from "./profile"
import Cart from "./cart"
import DataContext from "../context/DataContext"

const LargeHeader = ({fillHeart, emptyHeart, heartHover}) => {
  imagesIcons.heartOutline = heartHover
  const {dispatch, state} = useContext(DataContext)

  return (
    <header className="large-header">
      <Link to="/">
        <img alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      </Link>
      <MiddleHeader/>
      <img onClick={() => dispatch({payload: {identifier: "SEARCH", component: <SearchPage/>}})} alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => dispatch({payload: {identifier: "WISHLIST", component: <Wishlist items={[]}/>}})} onMouseLeave={emptyHeart} onMouseOver={fillHeart} alt="heart icon outline" className="large-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img onClick={() => dispatch({payload: {identifier: "PROFILE", component: <Profile/>}})} alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => dispatch({payload: {identifier: "CART", component: <Cart items={[]}/>}})} alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
      {state.displayIconEl}
    </header>
  )
}

export default LargeHeader