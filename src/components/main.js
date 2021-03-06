import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Order from './order';
import Pricing from './pricing';

import Landing from './LandingPage';
import ScrollToTop from './ScrollToTop';



const Main = () => (

    <Switch>
        
        <Route exact path="/" component={Landing} />
        <Route path="/order" component={Order} />
        <Route path="/pricing" component={Pricing} />
      

    </Switch>
   
 );

export default Main;