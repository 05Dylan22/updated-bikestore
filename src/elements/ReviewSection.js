import "../styles/reviewSect.css"
import Review from "./Review"
import RatingBars from "./RatingBars"

const ReviewSection = ({bike}) => {

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
      <Review/>
    </section>
  )
}

export default ReviewSection