import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"

const ShopSectionHero = () => {
  const [myData, setMyData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const term = location.state
  useEffect(() => {
    fetch("http://localhost:5000/").then(res => res.json()).then((data) => {
      setMyData(data)
      setIsLoading(false)
    })
  }, [])

  if (!isLoading) {
    var title = myData.heroData[term].category
    var img = myData.heroData[term].img
    var desc = myData.heroData[term].description
  }

  console.log(term)

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