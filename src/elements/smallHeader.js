import HamburgerMenu from "./hamburgerMenu"
import { imagesIcons } from "../App"
import SearchPage from "./searchPage"
import Wishlist from "./wishlist"
import Profile from "./profile"
import Cart from "./cart"

const SmallHeader = ({dispatch}) => {
  return (
    <header className="small-header">
      <HamburgerMenu dispatch={dispatch}/>
      <img onClick={() => {dispatch({payload: {identifier: "WISHLIST", component: <Wishlist items={[]} />}})}} alt="heart icon outline" className="small-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img alt="business logo" className="small-logo" src={imagesIcons.logo}/>
      <img onClick={() => {dispatch({payload: {identifier: "SEARCH", component: <SearchPage/>}})}} alt="search icon" className="small-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => {dispatch({payload: {identifier: "PROFILE", component: <Profile dispatch={dispatch}/>}})}} alt="profile icon" className="small-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => {dispatch({payload: {identifier: "CART", component: <Cart items={[]} />}})}} alt="cart icon" className="small-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default SmallHeader