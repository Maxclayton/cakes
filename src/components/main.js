import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Order from './order';
import Gallery from './gallery';

import Landing from './LandingPage';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/order" component={Order} />
        <Route path="/gallery" component={Gallery} />
      

    </Switch>
 );

export default Main;