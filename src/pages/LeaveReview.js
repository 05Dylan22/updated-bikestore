import "../styles/leaveReview.css"
import { useLayoutEffect, useRef, useState } from "react"

const LeaveReview = () => {
  const star1 = useRef(null)
  const star2 = useRef(null)
  const star3 = useRef(null)
  const star4 = useRef(null)
  const star5 = useRef(null)
  const stars = [star1, star2, star3, star4, star5]
  const [headline, setHeadline] = useState("")
  const [review, setReview] = useState("")
  const [maxHeadline, setMaxHeadline] = useState(false)
  const [maxReview, setMaxReview] = useState(false)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function highlightStars(e) {
    const selectedStar = e.target.id
    stars.forEach((star) => {
      star.current.src = "https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain"
    })
    for (let i = 0; i < selectedStar; i++) {
      stars[i].current.src = "https://getsendster.in/images/landing/star.png"
    }
  }

  function headlineInput(e) {
    if (maxHeadline && e.target.value.length < 36) {
      setMaxHeadline(false)
    }
    if (e.target.value.length === 36) {
      setMaxHeadline(true)
      return
    }
    setHeadline(e.target.value)
  }

  function reviewInput(e) {
    if (maxReview && e.target.value.length < 235) {
      setMaxReview(false)
    }
    if (e.target.value.length === 235) {
      setMaxReview(true)
      return
    }
    setReview(e.target.value)
  }

  function reviewSubmitted() {
    
  }
  
  return (
    <form className="leave-review-container">
      <h1 className="leaving-review-title">Share Your Thoughts With Other Customers</h1>
      <p className="label-sect">Overall Rating:</p>
      <div className="leave-rating-stars">
        <img ref={star1} id="1" className="reviewing-star-img" onClick={(e) => highlightStars(e)} src="https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain" alt="" />
        <img ref={star2} id="2" className="reviewing-star-img" onClick={(e) => highlightStars(e)} src="https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain" alt="" />
        <img ref={star3} id="3" className="reviewing-star-img" onClick={(e) => highlightStars(e)} src="https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain" alt="" />
        <img ref={star4} id="4" className="reviewing-star-img" onClick={(e) => highlightStars(e)} src="https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain" alt="" />
        <img ref={star5} id="5" className="reviewing-star-img" onClick={(e) => highlightStars(e)} src="https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain" alt="" />
      </div>
      <label className="label-sect" htmlFor="write-heading">Add A Headline:</label>
      <input className="write-heading" onInput={(e) => headlineInput(e)} value={headline} name="write-heading" type="text" placeholder="What's most important to know?"/>
      {maxHeadline && <label htmlFor="write-heading" className="max-characters">Max Characters</label>}
      <label className="label-sect" htmlFor="customer-review">Write Your Review:</label>
      <textarea className="leave-review-textarea" onInput={(e) => reviewInput(e)} placeholder="What did you dislike or like?" name="customer-review" id="customer-review" cols="1" rows="5" maxLength={235}></textarea>
      {maxReview && <label className="max-characters" htmlFor="customer-review">Max Characters</label>}
      <div className="submit-review-div">
        <button onClick={reviewSubmitted} className="leave-review-btn" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LeaveReview