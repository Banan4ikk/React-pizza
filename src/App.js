import React from "react";
import axios from "axios";
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import {connect} from 'react-redux'
import {setPizzas} from "./redux/actions/pizzas";

// function App() {
//
//    React.useEffect(() => {
//       async function getData() {
//          const {data} = await axios.get('http://localhost:3001/pizzas');
//          setPizzaItems(data)
//       }
//
//       getData();
//    }, [])
//
//    return (

//    );
// }


class App extends React.Component {
   componentDidMount() {
      axios.get('http://localhost:3001/pizzas').then(({data}) => {
         this.props.setPizzas(data.pizzas)
      });
   }

   render() {
      return (
         <div className="wrapper">
            <Header/>
            <div className="content">
               <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
               <Route path="/cart" component={Cart} exact/>
            </div>
         </div>
      )
   }
}

export default connect(
   (state) => {
      return {
         items: state.pizzas.items,
         filters: state.filters,
      };
   },
   (dispatch) => {
      return {
         setPizzas: (items) => dispatch(setPizzas(items)),
      };
   },
)(App);
