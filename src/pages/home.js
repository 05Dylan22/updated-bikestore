import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect } from "react"
import { imagesIcons } from "../App"
import Wishlist from "../elements/wishlist"
import Profile from "../elements/profile"
import Cart from "../elements/cart"

const Home = () => {
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)
  const [displayIconEl, setDisplayIconEl] = useState()

  function fillHeart () {
    setHeartHover(imagesIcons.solidHeart)
  }

  function emptyHeart () {
    setHeartHover(require("../images+icons/heart.png"))
  }

  const [largeScreen, setLargeScreen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 1199) setLargeScreen(true)
  }, [])

  function checkScreenSize () {
    if (window.innerWidth > 1199) {
      setLargeScreen(true)
      return
    }
    setLargeScreen(false)
  }

  window.addEventListener("resize", checkScreenSize)

  function openIcon (icon) {
    switch (icon) {
      case "wishlist":
        setDisplayIconEl(<Wishlist items={[{
          name: "bike",
          price: 799.99,
          key: "abc"
        }]} />)
        break
      case "profile":
        setDisplayIconEl(<Profile closeDisplay={closeIconDisplay}/>)
        break
      case "cart":
        setDisplayIconEl(<Cart/>)
        break
      case "search":
        setDisplayIconEl(<Wishlist items={[]} />)
        break
      default:
        console.log("default")
    }
  }

  function closeIconDisplay (icon) {
    setDisplayIconEl(null)
  }

  return (
    <>
      {largeScreen ? <LargeHeader closeIconDisplay={closeIconDisplay} openIcon={openIcon} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      {displayIconEl}
    </>
  )
}

export default Home