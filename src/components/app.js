import React from 'react';
import "materialize-css/dist/css/materialize.min.css"
import { Route } from "react-router-dom";
import Home from "./home/home.js";
import Chat from "./chat";


const App = () => (
    <div className="container">
        <Route path="/" exact component = { Home } />  
        <Route path="/chat" component={Chat}/>   
    </div>
);

export default App;
