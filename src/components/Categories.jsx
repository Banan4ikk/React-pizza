import React from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

const Categories = React.memo(function Categories({activeCategory, items, onSelectCategory}) {

   return (
      <div className="categories">
         <ul>
            <li onClick={() => {
               onSelectCategory(null)
            }}
                className={activeCategory == null ? 'active' : ''}
            >
               Все
            </li>
            {items && items.map((item, index) => (
               <li
                  className={activeCategory === index ? 'active' : ''}
                  key={`${item}_${index}`}
                  onClick={() => onSelectCategory(index)}
               >{item}</li>
            ))}
         </ul>
      </div>
   );
})


PizzaBlock.propTypes = {
   activeCategory: PropTypes.oneOf([PropTypes.number, null]),
   items: PropTypes.arrayOf(PropTypes.string),
   onClickItem: PropTypes.func
};

PizzaBlock.defaultTypes = {
   activeCategory: null,
   items: [],
}
export default Categories;