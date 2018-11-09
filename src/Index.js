import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter} from 'react-router-dom'
import App from './Components/App';


const app = document.getElementById('App');
render(<HashRouter><App /></HashRouter>,app);