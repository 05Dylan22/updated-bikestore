import "../styles/reviewSect.css"
import Review from "./Review"
import RatingBars from "./RatingBars"
import { useRef, useState } from "react"

const ReviewSection = ({bike}) => {
  const reviewSet = useRef([])
  const [displayReviewSet, setDisplayReviewSect] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)

  if (firstLoad) {
    showReviews()
    setFirstLoad(false)
  }

  function showReviews() {
    const tempSet = []
    for (let i = reviewSet.current.length; i < reviewSet.current.length + 6; i++) {
      if (bike.reviews[i] === undefined) break
      tempSet.push(bike.reviews[i])
    }
    reviewSet.current = [...reviewSet.current, ...tempSet]
    setDisplayReviewSect(reviewSet.current)
  }

  return (
    <section className="review-section">
      <div className="top-review-sect-div">
        <div>
          <h2 className="review-sect-heading">Customer Reviews</h2>
          <RatingBars bike={bike}/>
        </div>
        <div className="leave-review-div">
          <h2 className="leave-review-title">Satisfied With Your Purchase? Let Us Know How It Went.</h2>
          <button className="leave-review-button">Leave A Review</button>
        </div>
      </div>
      <div className="reviews-container">
        {bike.reviews.length === 0 ? <h1 className="no-reviews">No Reviews</h1> : displayReviewSet.map((review) => {
          return <Review review={review}/>
        })}
        {bike.reviews.length > reviewSet.current.length ? <p className="show-more" onClick={showReviews}>Show More Reviews</p> : <></>}
      </div>
    </section>
  )
}

export default ReviewSection