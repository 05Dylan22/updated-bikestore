import { useState } from "react"

const Review = ({review}) => {
  const [upvote, setUpvote] = useState(0)
  const [downvote, setDownvote] = useState(0)
  const [voteInfo, setVoteInfo] = useState({voted: false, upOrDown: null})

  function handleDownVote() {
    if (voteInfo.voted && voteInfo.upOrDown === "down") return
    setVoteInfo({voted: true, upOrDown: "down"})
    setDownvote(prev => prev + 1)
    if (voteInfo.upOrDown === null) return
    setUpvote(prev => prev - 1)
  }

  function handleUpVote() {
    if (voteInfo.voted && voteInfo.upOrDown === "up") return
    setVoteInfo({voted: true, upOrDown: "up"})
    setUpvote(prev => prev + 1)
    if (voteInfo.upOrDown === null) return
    setDownvote(prev => prev - 1)
  }

  const starArray = []
  for (let i = 0; i < review.rating; i++) {
    starArray.push(0)
  }

  return (
    <div className="review">
      <div className="top-reviewer-div">
        <p className="reviewer-initial">{review.name[0]}</p>
        <p className="reviewer-title">{review.title}</p>
      </div>
      <div className="reviewer-stars">
        {starArray.map((star, index) => <span key={index} className="reviewer-star">&#11088;</span>)}
      </div>
      <div>
        <p className="reviewer-info">Submitted By: {review.name}</p>
        <p className="reviewer-info">From: {review.location}</p>
      </div>
      <p className="reviewer-text">{review.review}</p>
      <div className="upvote-downvote-div">
        <button onClick={handleDownVote} className="downvote-btn">&darr;</button>
        <p className="downvote-count">{downvote}</p>
        <button onClick={handleUpVote} className="upvote-btn">&uarr;</button>
        <p className="upvote-count">{upvote}</p>
      </div>
    </div>
  )
}

export default Review