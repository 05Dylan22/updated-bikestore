import "../styles/scrollingBanner.css"

const ScrollingBanner = () => {
  return (
    <div className="overflow-protection">
      <div className="scrolling-banner">
        <div className="logo-div">
          <img src={require("../images+icons/espn-logo.png")} alt="espn logo" className="banner-logo"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/gmbn-logo.webp")} alt="gmbn logo" className="banner-logo"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/fox-logo.png")} alt="fox logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/mtv-logo.png")} alt="mtv logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/bbc-logo.png")} alt="bbc logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/cbs-logo.png")} alt="cbs logo" className="cbs"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/nbc-logo.webp")} alt="nbc logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/espn-logo.png")} alt="espn logo" className="banner-logo"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/gmbn-logo.webp")} alt="gmbn logo" className="banner-logo"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/fox-logo.png")} alt="fox logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/mtv-logo.png")} alt="mtv logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/bbc-logo.png")} alt="bbc logo" className="tall"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/cbs-logo.png")} alt="cbs logo" className="cbs"/>
        </div>
        <div className="logo-div">
          <img src={require("../images+icons/nbc-logo.webp")} alt="nbc logo" className="tall"/>
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner