import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect } from "react"
import { imagesIcons } from "../App"
import Wishlist from "../elements/wishlist"

const Home = ({wishlistOpen, openCloseWishlist}) => {
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)

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

  return (
    <>
      {largeScreen ? <LargeHeader openCloseWishlist={openCloseWishlist} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      {wishlistOpen && <Wishlist/>}
    </>
  )
}

export default Home