import React from 'react';
import {Categories, PizzaBlock, PizzaLoadingBlock, Sort} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categories = [
   'Мясные',
   'Вегетрианская',
   'Гриль',
   'Острые',
   'Закрытые',
]

const sortItems = [
   {name: 'Популярности', type: 'popular', order: 'desc'},
   {name: 'Цене', type: 'price', order: 'desc'},
   {name: 'Алафвиту', type: 'name', order: 'asc'},
]

function Home() {
   const dispatch = useDispatch();

   const {items, isLoaded} = useSelector(({pizzas}) => {
      return pizzas
   })

   const {category, sortBy} = useSelector(({filters}) => {
      return filters
   })

   React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
   }, [category, sortBy]);

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
   }, [])

   const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type))
   }, [])

   return (
      <div className="container">
         <div className="content__top">
            <Categories
               activeCategory={category}
               onSelectCategory={onSelectCategory}
               items={categories}
            />
            <Sort
               items={sortItems}
               activeSortType={sortBy.type}
               onClickSortType={onSelectSortType}
            />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoaded ? items.map(item =>
                  <PizzaBlock
                     onClickAddPizza={(item) => console.log(item)}
                     key={item.id}
                     isLoading={true}
                     {...item}
                  />) :
               Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)}
         </div>
      </div>
   );
}

export default Home;
