import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import "./Items.css";
function Items(props) {
  const itemCardElements = props.itemData.items.map((item, index) => {
    return (
      <ItemCard
        key={item.title}
        active={item.active}
        category={item.category}
        title={item.title}
        imageSrc={item.imageSrc}
        measurements={item.measurements}
      />
    );
  });
  return (
    <section>
      <div className="sub-row">
        <p className="item-counter text-normal">
          {props.itemData.items.length} Items
        </p>
        <button className="main-button black-button position-right">
          <Link to="/add" className="white-text text-normal">
            {" "}
            + Add
          </Link>
        </button>
      </div>
      <div className="item-container">{itemCardElements}</div>
    </section>
  );
}
export default Items;
