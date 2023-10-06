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
  const [open, setOpen] = useState(false)
  const [currentOpen, setCurrentOpen] = useState(null)

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
        setDisplayIconEl(<Wishlist items={[
          {name: "This Is Bike Name This Can Also be long",
           price: 799.99,
           key: "Bike Item",
           quantity: 1,
           desc: "This is where the product description will go. it will also need cut off at some point cuz it can be longerthan",
           img: imagesIcons.testImg
          }
        ]}/>)
        break
      case "profile":
        setDisplayIconEl(<Profile handleIconClick={handleIconClick}/>)
        break
      case "cart":
        setDisplayIconEl(<Cart items={[]}/>)
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

  function handleIconClick (icon, fromPofile = false) {
    if (fromPofile) {
      closeIconDisplay()
      setOpen(false)
      setCurrentOpen(null)
    }
    if (!open && !fromPofile) {
      openIcon(icon)
      setOpen(true)
      setCurrentOpen(icon)
    }
    if ((open && icon === currentOpen) && !fromPofile) {
      closeIconDisplay()
      setOpen(false)
      setCurrentOpen(null)
    }
    if ((open && icon !== currentOpen) && !fromPofile) {
      setCurrentOpen(icon)
      openIcon(icon)
    }
  }

  return (
    <>
      {largeScreen ? <LargeHeader handleIconClick={handleIconClick} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader handleIconClick={handleIconClick} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      {displayIconEl}
    </>
  )
}

export default Home