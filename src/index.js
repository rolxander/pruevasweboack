// Dependencias
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './Assets/js/routes'

const app = document.getElementById('App');
render(<Router>
    <AppRoutes />
</Router>,app);