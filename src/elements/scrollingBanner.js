import "../styles/scrollingBanner.css"

const ScrollingBanner = () => {
  return (
    <div class="overflow-protection">
      <div class="scrolling-banner">
        <div class="logo-div">
          <img src={require("../images+icons/espn-logo.png")} alt="espn logo" class="banner-logo"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/gmbn-logo.webp")} alt="gmbn logo" class="banner-logo"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/fox-logo.png")} alt="fox logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/mtv-logo.png")} alt="mtv logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/bbc-logo.png")} alt="bbc logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/cbs-logo.png")} alt="cbs logo" class="cbs"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/nbc-logo.webp")} alt="nbc logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/espn-logo.png")} alt="espn logo" class="banner-logo"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/gmbn-logo.webp")} alt="gmbn logo" class="banner-logo"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/fox-logo.png")} alt="fox logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/mtv-logo.png")} alt="mtv logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/bbc-logo.png")} alt="bbc logo" class="tall"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/cbs-logo.png")} alt="cbs logo" class="cbs"/>
        </div>
        <div class="logo-div">
          <img src={require("../images+icons/nbc-logo.webp")} alt="nbc logo" class="tall"/>
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner