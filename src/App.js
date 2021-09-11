import {Header} from "./components";
import {Cart, Home} from "./pages";
import React from "react";
import {Route} from "react-router-dom";

function App() {
   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <Route path = "/" component = {Home} exact/>
            <Route path = "/cart" component = {Cart} exact/>
         </div>
      </div>
   );
}

export default App;
