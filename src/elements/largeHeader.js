import { useState } from "react"
import { imagesIcons } from "../App"
import MiddleHeader from "./middleHeader"
import { Link } from "react-router-dom"

const LargeHeader = ({fillHeart, emptyHeart, heartHover, openIcon, closeIconDisplay}) => {
  imagesIcons.heartOutline = heartHover
  const [open, setOpen] = useState(false)
  const [currentOpen, setCurrentOpen] = useState(null)

  function handleIconClick (icon) {
    if (!open) {
      openIcon(icon)
      setOpen(true)
      setCurrentOpen(icon)
    }
    if (open && icon === currentOpen) {
      closeIconDisplay()
      setOpen(false)
      setCurrentOpen(null)
    }
    if (open && icon !== currentOpen) {
      setCurrentOpen(icon)
      openIcon(icon)
    }
  }

  return (
    <header className="large-header">
      <Link to="/">
        <img alt="business logo" className="large-logo" src={imagesIcons.logo}/>
      </Link>
      <MiddleHeader/>
      <img onClick={() => handleIconClick("search")} alt="search icon" className="large-search-icon" src={imagesIcons.searchIcon}/>
      <img onClick={() => handleIconClick("wishlist")} onMouseLeave={emptyHeart} onMouseOver={fillHeart} alt="heart icon outline" className="large-wishlist-icon" src={imagesIcons.heartOutline}/>
      <img onClick={() => handleIconClick("profile")} alt="profile icon" className="large-profile-icon" src={imagesIcons.profileIcon}/>
      <img onClick={() => handleIconClick("cart")} alt="cart icon" className="large-cart-icon" src={imagesIcons.cartIcon}/>
    </header>
  )
}

export default LargeHeader