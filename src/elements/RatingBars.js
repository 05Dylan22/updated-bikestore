const RatingBars = () => {
  const starsOrder = [5, 4, 3, 2, 1]
  return (
    <>
      {
        starsOrder.map((starNum) => (
          <div className="rating-bar-sect" key={starNum}>
            <p className="rating-bar-head">{starNum} Stars</p>
            <div className="bar-and-percentage">
              <div className="star-rating-bar"></div>
              <p className="bar-filled-percentage">100%</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default RatingBars