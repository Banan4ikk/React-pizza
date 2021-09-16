import React from 'react';
import {Categories, PizzaBlock, Sort} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categories = [
   'Мясные',
   'Вегетрианская',
   'Гриль',
   'Острые',
   'Закрытые',
]

function Home() {
   const dispatch = useDispatch();
   const items = useSelector(({pizzas}) => {
      return pizzas.items
   })

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
   },[])

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onClickItem={onSelectCategory}
               items={categories}
            />
            <Sort
               items={[
                  {name: 'Популярности', type: 'popular'},
                  {name: 'Цене', type: 'price'},
                  {name: 'Алафвиту', type: 'alphabet'},
               ]}/>
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {items && items.map(item => <PizzaBlock key={item.id} {...item}/>)}
         </div>
      </div>
   );
}

export default Home;
