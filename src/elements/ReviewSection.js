import "../styles/reviewSect.css"
import Review from "./Review"
import RatingBars from "./RatingBars"

const ReviewSection = ({bike}) => {
  //I WANT TO BE ABLE TO SHOW A CERTAIN NUMBER OF REVIEWS
  //FOR EXAMPLE IF THERE IS 100 REVIEWS, I WANT THE FIRST 10 SHOWING
  //THEY WILL BE IN A DIV THAT HAS A MAX HEIGHT WITH AN OVERFLOW Y SET TO SCROLL
  //THEN WHEN YOU REACH THE BOTTOM THERE WILL BE A SHOW MORE BUTTON
  //ON THIS BUTTON 10 MORE SHOULD LOAD INTO THE SCROLLABLE DIV
  //THIS SHOULD NOT ERROR IF LESS THAN 10 REVIEWS ARE GIVEN

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
      {bike.reviews.length === 0 ? <h1 className="no-reviews">No Reviews</h1> : bike.reviews.map((review) => {
        return <Review review={review}/>
      })}
    </section>
  )
}

export default ReviewSection