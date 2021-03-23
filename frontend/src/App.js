import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home_page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
