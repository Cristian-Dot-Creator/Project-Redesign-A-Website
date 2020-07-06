import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/Webpages/Home/Home';
import Article from './Components/Webpages/Article/Article';
import Contact from './Components/Webpages/Contact/Contact';
import ExtraCrunch from './Components/Webpages/ExtraCrunch/ExtraCrunch';
import Article1 from './Components/Webpages/Article/ArticlePages/Article1';
import Article2 from './Components/Webpages/Article/ArticlePages/Article2';
import Article3 from './Components/Webpages/Article/ArticlePages/Article3';
import Article4 from './Components/Webpages/Article/ArticlePages/Article4';
import Article5 from './Components/Webpages/Article/ArticlePages/Article5';
import Article6 from './Components/Webpages/Article/ArticlePages/Article6';
import Article7 from './Components/Webpages/Article/ArticlePages/Article7';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/allarticles' component={Article} />
      <Route exact path='/extracrunch' component={ExtraCrunch} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/article1' component={Article1} />
      <Route exact path='/article2' component={Article2} />
      <Route exact path='/article3' component={Article3} />
      <Route exact path='/article4' component={Article4} />
      <Route exact path='/article5' component={Article5} />
      <Route exact path='/article6' component={Article6} />
      <Route exact path='/article7' component={Article7} />

    </div>
  );
}

export default App;
