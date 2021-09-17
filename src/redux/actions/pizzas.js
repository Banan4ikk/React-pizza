import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
   dispatch(setLoaded(false));
   axios.get('http://localhost:3001/pizzas').then(({data}) => {
      dispatch(setPizzas(data));
      dispatch(setLoaded(true));
   })
}

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});

export const setLoaded = val => ({
   type: 'SET_LOADED',
   payload: val
})


