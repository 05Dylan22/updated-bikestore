import { useState } from "react"
import {Link} from "react-router-dom"

export const Mountain = [
  {
    text: "Full Suspension",
    key: "full"
  },

  {
    text: "Hardtail",
    key: "hard"
  },

  {
    text: "Cross Country",
    key: "cross"
  },

  {
    text: "Trail",
    key: "trail"
  },

  {
    text: "Enduro",
    key: "enduro"
  },

  {
    text: "Downhill",
    key: "down"
  },

  {
    text: "Fat Bikes",
    key: "fat"
  }
]


const MiddleHeader = () => {
  const [currentHover, setCurrentHover] = useState(null)

  function mouseEntered (e, list) {
    if (e.target !== currentHover && currentHover) {currentHover.classList.remove("large-header-links-class-hover")}
    e.target.classList.add("large-header-links-class-hover")
    setCurrentHover(e.target)
  }

  function mouseLeft (e) {
    if (currentHover == null) return
    currentHover.classList.remove("large-header-links-class-hover")
  }

  return (
  <nav onMouseLeave={(e) => {mouseLeft(e)}} className="large-middle-header">
    {Mountain.map((link) => {
      return (
        <div onMouseEnter={(e) => {mouseEntered(e)}} key={link.key} className="large-links-div">
          <Link state={{category: link.text}} to={"/shoppingCategory"} className="large-header-links">{link.text}</Link>
        </div>
      )
    })}
  </nav>
  )
}

export default MiddleHeader