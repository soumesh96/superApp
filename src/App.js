import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Layout from './Components/Layout';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/user" />} />
            <Route path="/user" render={props => <Layout {...props} />} />
            <Redirect to="/user" />
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
export default App;
