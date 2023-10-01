import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect } from "react"
import { imagesIcons } from "../App"
import Wishlist from "../elements/wishlist"

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
      case "logo":
        setDisplayIconEl(<Wishlist/>)
        break
      case "wishlist":
        setDisplayIconEl(<Wishlist/>)
        break
      case "profile":
        setDisplayIconEl(<Wishlist/>)
        break
      case "cart":
        setDisplayIconEl(<Wishlist/>)
        break
      case "search":
        setDisplayIconEl(<Wishlist/>)
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