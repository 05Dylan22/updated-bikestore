import "../styles/leaveReview.css"
import { useLayoutEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

const LeaveReview = () => {
  const location = useLocation()
  if (!location.state) window.location.href = "/404"
  const categoryName = location.state.categoryName
  const index = location.state.index
  const star1 = useRef(null)
  const star2 = useRef(null)
  const star3 = useRef(null)
  const star4 = useRef(null)
  const star5 = useRef(null)
  const stars = [star1, star2, star3, star4, star5]
  const [rating, setRating] = useState(null)
  const [noStarSubmit, setNoStarSubmit] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const [customerLocation, setCustomerLocation] = useState("Alabama")
  const [headline, setHeadline] = useState("")
  const [review, setReview] = useState("")
  const [maxHeadline, setMaxHeadline] = useState(false)
  const [maxReview, setMaxReview] = useState(false)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function highlightStars(e) {
    if (noStarSubmit) setNoStarSubmit(false)
    const selectedStar = e.target.id
    stars.forEach((star) => {
      star.current.src = "https://th.bing.com/th/id/OIP._23dY6EK5pGEjd-qMLx4owHaGl?rs=1&pid=ImgDetMain"
    })
    for (let i = 0; i < selectedStar; i++) {
      stars[i].current.src = "https://getsendster.in/images/landing/star.png"
    }
    setRating(selectedStar)
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

  function updateLocation(e) {
    setCustomerLocation(e.target.value)
  }

  function submitReview(e) {
    e.preventDefault()
    if (!rating) {
      setNoStarSubmit(true)
      return
    }
    const customerReview = {
      name: customerName,
      rating: rating,
      location: customerLocation,
      title: headline,
      review: review
    }
    fetch(`http://localhost:5000/reviewPage?categoryName=${categoryName}&index=${index}&review=${JSON.stringify(customerReview)}`, {fakereview: "My Review"})
    window.location.href = "/"
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
      {noStarSubmit && <p className="max-characters">Must Leave A Rating</p>}
      <label className="label-sect" htmlFor="customer-name">What's Your Name?</label>
      <input className="input-field" onInput={(e) => setCustomerName(e.target.value)} value={customerName} type="text" placeholder="Add A Name"/>
      <label className="label-sect" htmlFor="add-location">Where Are You From?</label>
      <select onInput={(e) => updateLocation(e)} value={customerLocation} className="input-field" required name="add-location" id="add-location">
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
      </select>
      <label className="label-sect" htmlFor="write-heading">Add A Headline:</label>
      <input required className="input-field" onInput={(e) => headlineInput(e)} value={headline} name="write-heading" type="text" placeholder="What's most important to know?"/>
      {maxHeadline && <label htmlFor="write-heading" className="max-characters">Max Characters</label>}
      <label className="label-sect" htmlFor="customer-review">Write Your Review:</label>
      <textarea required className="leave-review-textarea" value={review} onInput={(e) => reviewInput(e)} placeholder="What did you dislike or like?" name="customer-review" id="customer-review" cols="1" rows="5" maxLength={235}></textarea>
      {maxReview && <label className="max-characters" htmlFor="customer-review">Max Characters</label>}
      <div className="submit-review-div">
        <button onClick={(e) => submitReview(e)} className="leave-review-btn" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LeaveReview