const Review = () => {
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
        <button className="downvote-btn">&darr;</button>
        <p className="downvote-count">0</p>
        <button className="upvote-btn">&uarr;</button>
        <p className="upvote-count">329</p>
      </div>
    </div>
  )
}

export default Review