import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
   dispatch(setLoaded(false));
   if(category === null){
      axios.get(`http://localhost:3001/pizzas`).then(({data}) => {
         dispatch(setPizzas(data));
         dispatch(setLoaded(true));
      })
   }else {
      axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({data}) => {
         dispatch(setPizzas(data));
         dispatch(setLoaded(true));
      })
   }
}

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});

export const setLoaded = val => ({
   type: 'SET_LOADED',
   payload: val
})


