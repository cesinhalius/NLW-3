import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OphanegesMap from './pages/OrphanagesMap';

function Routes(){
  return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OphanegesMap}/>
        </Switch>
        </BrowserRouter>
  );
}

export default Routes