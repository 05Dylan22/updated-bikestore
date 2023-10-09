import LargeHeader from "../elements/largeHeader"
import SmallHeader from "../elements/smallHeader"
import { useState, useEffect, useReducer } from "react"
import { imagesIcons } from "../App"

const Home = () => {
  const [heartHover, setHeartHover] = useState(imagesIcons.heartOutline)
  const [state, dispatch] = useReducer(reducer, {open: false, currentOpen: null, displayIconEl: null})

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

  function reducer (state, action) {
    if (!state.open) {
      return {open: true, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
    if (state.open && state.currentOpen === action.payload.identifier) {
      return {open: false, currentOpen: null, displayIconEl: null}
    }
    if (state.open && state.currentOpen !== action.payload.identifier) {
      return {...state, currentOpen: action.payload.identifier, displayIconEl: action.payload.component}
    }
  }

  return (
    <>
      {largeScreen ? <LargeHeader dispatch={dispatch} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/> : <SmallHeader dispatch={dispatch} fillHeart={fillHeart} emptyHeart={emptyHeart} heartHover={heartHover}/>}
      {state.displayIconEl}
    </>
  )
}

export default Home