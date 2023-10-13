import "../styles/hamburgerMenus.css"
import { imagesIcons } from "../App"
import {Link} from "react-router-dom"

const HamburgerMenus = ({dispatch}) => {

  function closeHamburger() {
    dispatch({payload: {identifier: "HAMBURGERMENU", component: <HamburgerMenus/>}})
  }

  return (
    <>
      <div className="hamburger-menus-container">
        <div className="top-hamburger">
          <img className="hamburger-logo" src={imagesIcons.logo} alt="logo" />
          <img onClick={closeHamburger} className="close-hamburger" src={require("../images+icons/search.cancel.icon.png")} alt="close menu" />
        </div>
        <Link className="menu-main-section-p">Full Suspension<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Hardtail<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Cross Country<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Trail<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Enduro<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Downhill<span>&gt;</span></Link>
        <Link className="menu-main-section-p">Fat Bikes<span>&gt;</span></Link>
      </div>
    </>
  )
}

export default HamburgerMenus