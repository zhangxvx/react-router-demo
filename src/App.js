import React from 'react';
import { Card } from "../node_modules/antd";
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Header } from './Header';
import { Home } from './Home';

export class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Card>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/one' component={() => <h2>One</h2>} />
            <Route exact path='/two' component={() => <h2>Two</h2>} />
            <Route component={NotMatch} />
          </Switch>
        </Card>
      </HashRouter>
    )
  }
}

const NotMatch = ({ location }) => {
  let name = location.pathname
  alert("Not Found " + name)
}
