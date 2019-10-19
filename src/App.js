import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

import Index from "./pages/Index";

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
