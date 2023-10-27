import { useDispatch } from "react-redux"
import { handleIcons } from "../redux/handleIcons"

const HamburgerMenu = () => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(handleIcons({identifier: "HAMBURGER"}))} className="hamburger-menu">
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  )
}

export default HamburgerMenu