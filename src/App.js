import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Components/Webpages/Home/Home';
import Article from './Components/Webpages/Article/Article';
import Contact from './Components/Webpages/Contact/Contact';
import NavBar from './Components/NavBar/navbar';
import ExtraCrunch from './Components/Webpages/ExtraCrunch/ExtraCrunch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/article' component={Article} />
      <Route exact path='/extracrunch' component={ExtraCrunch} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
