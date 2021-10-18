import {BrowserRouter, Route, Switch} from "react-router-dom";

import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";

import Header from "./Components/Header";

function Routes(){
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Catalog}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;