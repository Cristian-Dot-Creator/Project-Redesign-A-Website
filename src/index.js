import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Cards from './Components/Webpages/Cards';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Cards />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);