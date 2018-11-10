import React from 'react';
import {Route , Switch } from 'react-router-dom';

//Components
import App from '../../Components/App';
import Inicio from '../../Components/Templates//inicio'

const ApprRoutes = () => 

<App>
    <Switch>
        <Route path ="/" component = {Inicio} />
    </Switch>
</App>
export default ApprRoutes;