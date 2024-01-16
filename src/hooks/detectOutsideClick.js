import { useEffect } from "react";
import { clickedHeart } from "../redux/headerHearts";
import { useDispatch } from "react-redux";
import { handleIcons } from "../redux/handleIcons";

const useDetectOutsideClick = (popup) => {
  const dispatch = useDispatch()
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.classList[0] === "large-wishlist-icon" || event.target.classList[0] === "small-wishlist-icon") return 
      if (event.target.classList[0] === "large-cart-icon" || event.target.classList[0] === "small-cart-icon" || event.target.classList[0] === "large-search-icon" || event.target.classList[0] === "small-search-icon") {
        if (popup.current.id === "wishlist") dispatch(clickedHeart())
        return
      }
      if (popup.current && !popup.current.contains(event.target)) {
        if (popup.current.id === "wishlist") dispatch(clickedHeart())
        dispatch(handleIcons({type: "close"}))
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [popup, dispatch])
}

export default useDetectOutsideClick