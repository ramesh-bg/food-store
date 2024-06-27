/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
const FoodItem: React.FC<any> = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart }: any =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="name" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
