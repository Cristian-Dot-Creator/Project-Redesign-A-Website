import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Components/Webpages/Home';
import Article from './Components/Webpages/Article';
import Contact from './Components/Webpages/Page3';
import Page3 from './Components/Webpages/Contact';
import NavBar from './Components/NavBar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/article' component={Article} />
      <Route exact path='/page3' component={Page3} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
