const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <div onClick={console.log("Clicked")} className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  )
}

export default HamburgerMenu