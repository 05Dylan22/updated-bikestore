import { useState } from "react"

const MiddleHeader = () => {
  const subMountain = [
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
  const subRoad = [
    {
      text: "Performance",
      key: "perf"
    },

    {
      text: "Gravel",
      key: "grav"
    },

    {
      text: "Triathelon",
      key: "triath"
    }
  ]
  const subParts = [
    {
      text: "Wheels, Tires, Tubes",
      key: "wtt"
    },

    {
      text: "Road Wheels",
      key: "rw"
    },

    {
      text: "Mountain Wheels",
      key: "mw"
    },

    {
      text: "Road Tires",
      key: "rt"
    },

    {
      text: "Mountain Tires",
      key: "mt"
    },

    {
      text: "Gravel Tires",
      key: "gt"
    },

    {
      text: "City Tires",
      key: "ct"
    },

    {
      text: "Tubes",
      key: "tubes"
    },

    {
      text: "Tubeless Accessories",
      key: "ta"
    }
  ]
  const subApparel = [
    {
      text: "Pants",
      key: "pants"
    },

    {
      text: "Jackets",
      key: "jackets"
    },

    {
      text: "Helmets",
      key: "helmets"
    },

    {
      text: "Shoes",
      key: "shoes"
    }
  ]
  const subAccessories = [
    {
      text: "Pumps",
      key: "pumps"
    },

    {
      text: "Locks",
      key: "locks"
    },

    {
      text: "Bike Racks",
      key: "Bracks"
    },

    {
      text: "Car Racks",
      key: "Cracks"
    },

    {
      text: "Bike Storage",
      key: "storage"
    }
  ]
  const subElectric = [
    {
      text: "City & Hybrid",
      key: "city"
    },

    {
      text: "Commuter",
      key: "commute"
    },

    {
      text: "Recreation",
      key: "recre"
    }
  ]

  const middleLinks = [
    {
      text: "Road",
      subCat: subRoad,
      key: "subRoad"
    },

    {
      text: "Electric",
      subCat: subElectric,
      key: "electric"
    },

    {
      text: "Mountain",
      subCat: subMountain,
      key: "mtn"
    },

    {
      text: "Parts",
      subCat: subParts,
      key: "parts"
    },

    {
      text: "Accessories",
      subCat: subAccessories,
      key: "accessories"
    },

    {
      text: "Apparel",
      subCat: subApparel,
      key: "apparel"
    }
  ]

  const [isHovering, setIsHovering] = useState(false)
  const [hoverDiv, setHoverDiv] = useState(null)
  const [currentHover, setCurrentHover] = useState(null)

  function mouseEntered (e, list) {
    if (e.target !== currentHover && currentHover) {currentHover.classList.remove("large-header-links-class-hover")}
    setIsHovering(true)
    e.target.classList.add("large-header-links-class-hover")
    setCurrentHover(e.target)
    setHoverDiv(<HoverContent list={list}/>)
  }

  function mouseLeft (e) {
    currentHover.classList.remove("large-header-links-class-hover")
    setIsHovering(false)
  }

  return (
  <nav onMouseLeave={(e) => {mouseLeft(e)}} className="large-middle-header">
    {middleLinks.map((link) => {
      return (
        <div onMouseEnter={(e) => {mouseEntered(e, link.subCat)}} key={link.key} className="large-links-div">
          <p className="large-header-links">{link.text}</p>
        </div>
      )
    })}
    {isHovering && hoverDiv}
  </nav>
  )
}

const HoverContent = ({ list }) => {
  return (
    <div className="large-middle-links-hover">
      {list.map(item => <h1 key={item.key}>{item.text}</h1>)}
    </div>
  )
}

export default MiddleHeader