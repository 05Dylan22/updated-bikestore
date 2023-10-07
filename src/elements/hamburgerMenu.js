const HamburgerMenu = () => {
  function hamburgerClick() {
    console.log("Ham Clicked")
  }
  return (
    <div onClick={hamburgerClick} className="hamburger-menu">
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  )
}

export default HamburgerMenu