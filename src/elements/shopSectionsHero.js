import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"

const ShopSectionHero = () => {
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const term = location.state

  async function getData(term) {
    const data = await fetch("http://localhost:5000/")
    const response = await data.json()
    setMyData(response)
    setIsLoading(false)
    return
  }

  useEffect(() => {
    getData(term)
  }, [term])

  if (!isLoading) {
    var title = myData.heroData[term].category
    var img = myData.heroData[term].img
    var desc = myData.heroData[term].description
  }

  return (
    <>
      {!isLoading ? 
        <section style={{backgroundImage: `url(${img})`}} className="shopping-section">
          <div className="shopping-hero">
            <h1>Shop All {title} Bikes</h1>
          </div>
          <p>{desc}</p>
          <h2>Explore All {title} Bikes</h2>
        </section>
      : <p>Loading...</p>}
    </>
  )
}

export default ShopSectionHero