import React from "react";
import axios from "axios";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";

function App() {
   const [pizzaItems, setPizzaItems] = React.useState([]);

   React.useEffect(() => {
      async function getData() {
         const pizzas = await axios.get('http://localhost:3001/pizzas');

         setPizzaItems(pizzas.data)
      }

      getData();
   }, [])

   return (
         <div className="wrapper">
            <Header/>
            <div className="content">
               <Route path="/" render={() => <Home items={pizzaItems}/>} exact/>
               <Route path="/cart" component={Cart} exact/>
            </div>
         </div>
   );
}

export default App;
