import React from 'react';

const Categories  = React.memo(function Categories({items, onClickItem}) {
   const [activeItem, setActiveItem] = React.useState(null);

   const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index)
   };

   return (
      <div className="categories">
         <ul>
            <li onClick={() => {
               onSelectItem(null)
            }}
                className={activeItem == null ? 'active' : ''}
            >
               Все
            </li>
            {items &&  items.map((item, index) => (
               <li
                  className={activeItem === index ? 'active' : ''}
                  key={`${item}_${index}`}
                  onClick={() => onSelectItem(index)}
               >{item}</li>
            ))}
         </ul>
      </div>
   );
})

export default Categories;