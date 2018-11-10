import React from 'react';
import {Route , Switch } from 'react-router-dom';

//Components
import App from '../../Components/App';
import Inicio from '../../Components/Templates/inicio';
import Archivos from '../../Components/Templates/archivos';

const AppsRoutes = () => 

<App>
    <Switch>
        <Route exact path ="/" component = {Inicio}/>
        <Route exact path ="/archivos" component = {Archivos}/>
    </Switch>
</App>
export default AppsRoutes;