import { useState } from "react"
import "../styles/hamburgerMenus.css"
import SubCategoryMenu from "./subCategoryMenu"
import { imagesIcons } from "../App"

const HamburgerMenus = ({dispatch}) => {
  const [subCategory, setSubCategory] = useState(null)
  const [isSubCategory, setIsSubCategory] = useState(false)

  function hamburgCategoryClick (category) {
    setSubCategory(<SubCategoryMenu items={category}/>)
    setIsSubCategory(true)
  }

  function closeHamburger() {
    dispatch({payload: {identifier: "HAMBURGERMENU", component: <HamburgerMenus/>}})
    setIsSubCategory(false)
  }

  return (
    <>
      {!isSubCategory ? 
      <div className="hamburger-menus-container">
        <div className="top-hamburger">
          <img className="hamburger-logo" src={imagesIcons.logo} alt="logo" />
          <img onClick={closeHamburger} className="close-hamburger" src={require("../images+icons/search.cancel.icon.png")} alt="close menu" />
        </div>
        {/* <p onClick={() => hamburgCategoryClick(subRoad)} className="menu-main-section-p">Road<span>&gt;</span></p> */}
        {/* <p onClick={() => hamburgCategoryClick(subElectric)} className="menu-main-section-p">Electric<span>&gt;</span></p> */}
        {/* <p onClick={() => hamburgCategoryClick(subMountain)} className="menu-main-section-p">Mountain<span>&gt;</span></p> */}
        {/* <p onClick={() => hamburgCategoryClick(subParts)} className="menu-main-section-p">Parts<span>&gt;</span></p> */}
        {/* <p onClick={() => hamburgCategoryClick(subAccessories)} className="menu-main-section-p">Accessories<span>&gt;</span></p> */}
        {/* <p onClick={() => hamburgCategoryClick(subApparel)} className="menu-main-section-p">Apparel<span>&gt;</span></p> */}
      </div>
      : <div className="hamburger-menus-container">
          <div className="top-hamburger">
            <img className="hamburger-logo" src={imagesIcons.logo} alt="logo" />
            <img onClick={() => setIsSubCategory(false)} className="subcategory-goback" src={require("../images+icons/back-arrow.png")} alt="close menu" />
          </div>
        {subCategory}
      </div>
      }
    </>
  )
}

export default HamburgerMenus