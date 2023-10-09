import HamburgerMenus from "./hamburgerMenus"

const HamburgerMenu = ({dispatch}) => {
  return (
    <div onClick={() => dispatch({payload: {identifier: "HAMBURGERMENU", component: <HamburgerMenus dispatch={dispatch}/>}})} className="hamburger-menu">
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  )
}

export default HamburgerMenu