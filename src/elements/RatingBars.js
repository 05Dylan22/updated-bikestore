const RatingBars = ({bike}) => {
  const starsOrder = [5, 4, 3, 2, 1]

  //we need to organize the reviews array that is inside the bike object
  //we need to create an object that will store the amount of reviews left for each star value
  //use reduce method

  const ratings = bike.reviews.reduce((groupedRatings, review) => {
    const rating = review.rating
    if (groupedRatings[rating] === undefined) groupedRatings[rating] = []
    groupedRatings[rating].push(review)
    return groupedRatings
  }, {})

  return (
    <>
      {
        starsOrder.map((starNum) => (
          <div className="rating-bar-sect" key={starNum}>
            <p className="rating-bar-head">{starNum} Stars</p>
            <div className="bar-and-percentage">
              <div className="star-rating-bar" style={{backgroundImage: `linear-gradient(to right, rgb(255,164,28) ${ratings[starNum] ? (ratings[starNum].length / bike.reviews.length) * 100 : 0}%, white ${ratings[starNum] ? (ratings[starNum].length / bike.reviews.length) * 100 : 0}% 100%)`}}></div>
              <p className="bar-filled-percentage">{ratings[starNum] ? (ratings[starNum].length / bike.reviews.length) * 100 : 0}%</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default RatingBars