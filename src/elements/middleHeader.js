const MiddleHeader = () => {
  const middleLinks = [
    {
      text: "Road",
      key: "road"
    },

    {
      text: "Electric",
      key: "electric"
    },

    {
      text: "BMX",
      key: "bmx"
    },

    {
      text: "Parts",
      key: "parts"
    },

    {
      text: "Accessories",
      key: "accessories"
    },

    {
      text: "Apparel",
      key: "apparel"
    }
  ]

  const subMountain = []
  const subRoad = []
  const subBMX = []
  const subParts = []
  const subApparel = []
  const subAccessories = []

  function handleHover (e) {
    e.target.nextElementSibling.classList = "large-middle-links-hover"
  }

  function handleHoverDropdown (e) {
    e.target.classList = "large-middle-links-hover"
  }

  function mouseLeave (e) {
    e.target.nextElementSibling.classList = "none"
  }

  function mouseLeaveDropdown (e) {
    e.target.classList = "none"
  }

  return (
  <nav className="large-middle-header">
    {middleLinks.map((link) => {
      return (
        <div key={link.key} className="large-links-div">
          <p onMouseLeave={(e) => {mouseLeave(e)}} onMouseOver={(e) => {handleHover(e)}} className="large-header-links">{link.text}</p>
          <div onMouseLeave={(e) => {mouseLeaveDropdown(e)}} onMouseOver={(e) => {handleHoverDropdown(e)}} className="none">

          </div>
        </div>
      )
    })}
  </nav>
  )
}

export default MiddleHeader