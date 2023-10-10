import './App.css';
import "./styles/largeHeader.css"
import "./styles/smallHeader.css"
import "./styles/wishlist.css"
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import {DataProvider} from './context/DataContext';

export const imagesIcons = {
  heartOutline: require("./images+icons/heart.png"),
  solidHeart: require("./images+icons/like-solid-heart-black-symbol-for-interface.png"),
  profileIcon: require("./images+icons/user.png"),
  searchIcon: require("./images+icons/search.png"),
  cartIcon: require("./images+icons/trolley.png"),
  logo: require("./images+icons/logo.png"),
  testImg: require("./images+icons/profile-collageimg.jpg")
}

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
