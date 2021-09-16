import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import {Header} from "./components";
import {setPizzas} from "./redux/actions/pizzas";
import {Cart, Home} from "./pages";
import {useDispatch} from "react-redux";

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      axios.get('http://localhost:3000/DB.json').then(({data}) => {
         dispatch(setPizzas(data.pizzas));
      })
   }, []);

   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <Route path="/" component={Home} exact/>
            <Route path="/cart" component={Cart} exact/>
         </div>
      </div>
   );
}

export default App;
