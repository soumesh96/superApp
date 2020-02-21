import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Tabs from '../Tabs/Tabs.js';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/user" />} />
            <Route path="/user" render={props => <Tabs {...props} />} />
            <Redirect to="/user" />
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
export default App;
