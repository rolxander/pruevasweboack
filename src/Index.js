// Dependencias
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
//import { HashRouter} from 'react-router-dom'
//import App from './Components/App';

//Routes
import AppRoutes from './Assets/js/routes'

const app = document.getElementById('App');
render(<Router>
    <AppRoutes />
</Router>,app);