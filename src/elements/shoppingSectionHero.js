const ShoppingSectionHero = ({img, categoryName, description}) => {
  return (
    <section>
      <div className="shopping-hero" style={{backgroundImage: `url(${img})`}}>
        <h1 className="shopping-hero-title">Shop All {categoryName} Bikes</h1>
      </div>
      <p className="shopping-hero-desc">{description}</p>
      <h2 className="shopping-hero-explore">Explore All {categoryName} Bikes</h2>
    </section>
  )
}

export default ShoppingSectionHero