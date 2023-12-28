import { useState } from "react"

const Review = () => {
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

  return (
    <div className="review">
      <div className="top-reviewer-div">
        <p className="reviewer-initial">J</p>
        <p className="reviewer-title">Great Bike And Company</p>
      </div>
      <div className="reviewer-stars">
        <span className="reviewer-star">&#11088;</span>
        <span className="reviewer-star">&#11088;</span>
        <span className="reviewer-star">&#11088;</span>
        <span className="reviewer-star">&#11088;</span>
        <span className="reviewer-star">&#11088;</span>
      </div>
      <div>
        <p className="reviewer-info">Submitted By: John</p>
        <p className="reviewer-info">From: Denver</p>
        <p className="reviewer-info">1 Month Ago</p>
      </div>
      <p className="reviewer-text">Dang this thing ride good af boi. I suggest you buy one today!!</p>
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