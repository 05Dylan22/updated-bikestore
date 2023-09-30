import HamburgerMenu from "../elements/hamburgerMenu"


const Header = () => {
  const imagesIcons = {
    heartOutline: require("../images+icons/heart.png"),
    solidHeart: require("../images+icons/like-solid-heart-black-symbol-for-interface.png"),
    profileIcon: require("../images+icons/user.png"),
    searchIcon: require("../images+icons/search.png"),
    cartIcon: require("../images+icons/trolley.png")
  }

  return (
    <header className="header">
          <div className="movable-header">
      <div className="left-section">
        {/* <HamburgerMenu/> */}
        <div className="wishlist-div">
          <img alt="heart icon outline" className="wishlist-icon" src={imagesIcons.heartOutline}/>
        </div>
        <div className="logo-div">
          <img alt="business logo" className="logo-img-laptop" src="/images/Black & White Minimalist Business Logo.png"/>
        </div>
      </div>
      <div className="middle-section">
        <div className="logo-div">
          <img alt="business logo" className="logo-img" src="/images/Black & White Minimalist Business Logo.png"/>
        </div>
        <p className="header-links">Mountain</p>
        <p className="header-links">Road</p>
        <p className="header-links">Electric</p>
        <p className="header-links">BMX</p>
        <p className="header-links">Parts</p>
        <p className="header-links">Accessories</p>
        <p className="header-links">Apparel</p>
      </div>
      <div className="right-section">    
        <div className="profile-div">
          <img alt="search icon, credit: Muhammad Usman" className="profile-icon" src={imagesIcons.heartOutline}/>
        </div>
        <div className="search-icon-div">
          <img alt="search icon" className="search-icon" src={imagesIcons.searchIcon}/>
        </div>
        <div className="cart-div">
          <img alt="cart icon" className="cart-icon" src={imagesIcons.cartIcon}/>
        </div>
        <div>
          <input className="search-bar" type="search" placeholder="Search..."/>
        </div>
        <div>
          <img alt="profile icon" className="profile-icon-laptop" src={imagesIcons.profileIcon}/>
        </div>
        <div>
          <img alt="heart outline icon" className="wishlist-icon-laptop" src={imagesIcons.heartOutline}/>
        </div>
        <div>
          <img alt="cart icon" className="cart-icon-laptop" src={imagesIcons.cartIcon}/>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header