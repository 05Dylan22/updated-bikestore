const HamburgerMenu = ({handleIconClick}) => {
  return (
    <div onClick={() => handleIconClick("hamburger")} className="hamburger-menu">
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  )
}

export default HamburgerMenu