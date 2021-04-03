import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homepage from "./components/homepage"
import factura from "./components/Checkout"



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={homepage} exact />
          <Route path="/factura" component={factura} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
