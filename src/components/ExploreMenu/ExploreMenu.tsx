import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

interface ExploreMenuProps {
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCategory: any;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
      </p>
      <div className="explore-menu-list">
        {menu_list.map((x, i) => {
          return (
            <div
              key={i}
              className="explore-menu-list-item"
              onClick={() =>
                setCategory((prev: string) =>
                  prev === x.menu_name ? "All" : x.menu_name
                )
              }
            >
              <img
                className={category === x.menu_name ? "active" : ""}
                src={x.menu_image}
                alt={x.menu_name}
              />
              <p>{x.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
