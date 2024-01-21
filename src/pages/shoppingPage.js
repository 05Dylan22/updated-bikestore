import { useEffect, useLayoutEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import "../styles/shoppingHero.css"
import { handleIcons } from "../redux/handleIcons"
import { useDispatch } from "react-redux"
import ShoppingPageProducts from "../elements/shoppingPageProducts"
import ShoppingSectionHero from "../elements/shoppingSectionHero"
import { ColorRing } from "react-loader-spinner"


const ShoppingPage = () => {
  const dispatch = useDispatch()
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const heroTerm = location.state.product.heroTerm
  const categoryName = location.state.product.categoryName

  useEffect(() => {
    dispatch(handleIcons({type: "close"}))
  })

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
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
        <ShoppingPageProducts data={myData?.allBikes[categoryName]} categoryName={categoryName}/>
      </>
      : <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['black']}
    />}
    </>
  )
}

export default ShoppingPage