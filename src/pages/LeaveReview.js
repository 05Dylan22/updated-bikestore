import "../styles/leaveReview.css"
import { useLayoutEffect } from "react"

const LeaveReview = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <form className="leave-review-container">
      <h1 className="leaving-review-title">Share Your Thoughts With Other Customers</h1>
      <p className="label-sect">Overall Rating:</p>
      <div className="leave-rating-stars">
        <p className="reviewing-star">&#9734;</p>
        <p className="reviewing-star">&#9734;</p>
        <p className="reviewing-star">&#9734;</p>
        <p className="reviewing-star">&#9734;</p>
        <p className="reviewing-star">&#9734;</p>
      </div>
      <label className="label-sect" htmlFor="write-heading">Add A Headline:</label>
      <input className="write-heading" name="write-heading" type="text" placeholder="What's most important to know?"/>
      <label className="label-sect" htmlFor="customer-review">Write Your Review:</label>
      <textarea className="leave-review-textarea" placeholder="What did you dislike or like?" name="customer-review" id="customer-review" cols="1" rows="5" maxLength={235}></textarea>
      <div className="submit-review-div">
        <button className="leave-review-btn" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LeaveReview