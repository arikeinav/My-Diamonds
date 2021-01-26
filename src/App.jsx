import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes.js'
import {Navbar} from './cmps/Navbar.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>
    </div>
  );
}

export default App;
