import "../styles/hamburgerMenus.css"
import { imagesIcons } from "../App"
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import { handleIcons } from "../redux/handleIcons"

const HamburgerMenus = () => {
  const dispatch = useDispatch()

  function closeHamburger() {
    dispatch(handleIcons({identifier: "HAMBURGER"}))
  }

  return (
    <>
      <div className="hamburger-menus-container">
        <div className="top-hamburger">
          <img className="hamburger-logo" src={imagesIcons.logo} alt="logo" />
          <img onClick={closeHamburger} className="close-hamburger" src={require("../images+icons/search.cancel.icon.png")} alt="close menu" />
        </div>
        <Link onClick={closeHamburger} state={{heroTerm: "fullSuspensionHero", categoryName: "fullsuspensionbikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Full Suspension<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "hardtailHero", categoryName: "hardtailbikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Hardtail<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "crosscountryHero", categoryName: "crosscountrybikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Cross Country<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "trailHero", categoryName: "trailbikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Trail<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "enduroHero", categoryName: "endurobikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Enduro<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "downhillHero", categoryName: "downhillbikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Downhill<span>&gt;</span></Link>
        <Link onClick={closeHamburger} state={{heroTerm: "fatHero", categoryName: "fatbikes"}} to={"/shoppingCategory"} className="menu-main-section-p">Fat Bikes<span>&gt;</span></Link>
      </div>
    </>
  )
}

export default HamburgerMenus