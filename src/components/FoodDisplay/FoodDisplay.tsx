/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay: React.FC<any> = ({ category }) => {
  const { food_list }: any = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((x: any, i: any) => {
          if (category === "All" || x.category === category) {
            return (
              <FoodItem
                key={i}
                id={x._id}
                name={x.name}
                price={x.price}
                description={x.description}
                image={x.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
