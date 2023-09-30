import './App.css';
import "./styles/largeHeader.css"
import "./styles/smallHeader.css"
import "./styles/wishlist.css"
import Wishlist from './elements/wishlist';
import { useState } from 'react';
import Home from './pages/home';

export const imagesIcons = {
  heartOutline: require("./images+icons/heart.png"),
  solidHeart: require("./images+icons/like-solid-heart-black-symbol-for-interface.png"),
  profileIcon: require("./images+icons/user.png"),
  searchIcon: require("./images+icons/search.png"),
  cartIcon: require("./images+icons/trolley.png"),
  logo: require("./images+icons/logo.png")
}

function App() {
  const [wishlistOpen, setWishlistOpen] = useState(false)

  //this is going to require a state for every header element
  //I think i can make this function work for all header elements
  //using just two or maybe three states
  //I worked it out last night ill
  function openCloseWishlist () {
    if (wishlistOpen) {
      fillHeart()
      setWishlistOpen(false)
      return
    }
    setWishlistOpen(true)
    return
  }

  return (
    <div className="App">
      <Home wishlistOpen={wishlistOpen} openCloseWishlist={openCloseWishlist} />
      {/* <Wishlist/> */}
    </div>
  );
}

export default App;
