import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import "../styles/shoppingHero.css"
import { handleIcons } from "../redux/handleIcons"
import { useDispatch } from "react-redux"
import ShoppingPageProducts from "../elements/shoppingPageProducts"
import ShoppingSectionHero from "../elements/shoppingSectionHero"


const ShoppingPage = () => {
  const dispatch = useDispatch()
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const heroTerm = location.state.heroTerm
  const categoryName = location.state.categoryName

  useEffect(() => {
    dispatch(handleIcons({type: "close"}))
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    getData()
  }, [heroTerm])

  async function getData() {
    const data = await fetch("http://localhost:5000/")
    const response = await data.json()
    setMyData(response)
    setIsLoading(false)
  }

  return (
    <>
      {!isLoading ? 
      <>
        <ShoppingSectionHero img={myData?.heroData[heroTerm].img} categoryName={myData?.heroData[heroTerm].category} description={myData?.heroData[heroTerm].description}/>
        <ShoppingPageProducts data={myData?.allBikes[categoryName]}/>
      </>
      : <p style={{width: "100vw", height: "100vh", textAlign: "center", fontSize: "32px", marginTop: "200px"}}>Loading...</p>}
    </>
  )
}

export default ShoppingPage