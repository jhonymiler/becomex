import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Paises from "../pages/Paises";
import Rotas from "../pages/Rotas";
import ItemDetalhes from "../pages/Detalhes";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/paises" component={ Paises } />
            <Route exact path="/rotas/:de/:para" component={ Rotas } />
            <Route exact path="/detalhes/:id" component={ ItemDetalhes } />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;