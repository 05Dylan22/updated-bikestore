import './App.css';
import "./styles/largeHeader.css"
import "./styles/smallHeader.css"
import "./styles/wishlist.css"
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
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
