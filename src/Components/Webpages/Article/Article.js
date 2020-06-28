import React, { Component } from 'react';
import './Article.css';
class Article extends Component {
    render (){
        setTimeout(() => {
            articleFilter("all")
        }, 0)
        
        const articleFilter = (c) => {
            console.log("test")
          var i;
          const x = document.getElementsByClassName('cards');
          const y = Array.from(x)
          console.log(y)
          if (c == "all") c = "";
          for (i = 0; i < y.length; i++) {
            removeClass(y[i], "show");
            if (y[i].className.indexOf(c) > -1) addClass(y[i], "show");
         } 
        }
        
        // Show filtered elements
        const addClass = (element, name) => {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
              element.className += " " + arr2[i];
            }
          }
        }
        
        // Hide elements that are not selected
        const removeClass = (element, name) => {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
          }
          element.className = arr1.join(" ");
        }   


    
    return(
        <div>
            <div className="container">
                <h1>ALL ARTICLES</h1>
                <h5>Filter:</h5>
                <div id="btnContainer">
                    <button className="button" onClick={() => {articleFilter('all')}}>Show all</button>
                    <button className="button" onClick={() => {articleFilter('political')}}>Political</button>
                    <button className="button" onClick={() => {articleFilter('technology')}}>Technology</button>
                    <button className="button" onClick={() => {articleFilter('business')}}>Business</button>
                    <button className="button" onClick={() => {articleFilter('events')}}>Events</button>
                </div>
                <div className="articles">
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>POLITICAL TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article1"></div>
                        <h1>TECHNOLOGY TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article1"></div>
                        <h1>BUSINESS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article1"></div>
                        <h1>EVENTS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>POLITICAL TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article1"></div>
                        <h1>BUSINESS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article1"></div>
                        <h1>TECHNOLOGY TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article1"></div>
                        <h1>EVENTS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>POLITICAL TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article1"></div>
                        <h1>TECHNOLOGY TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article1"></div>
                        <h1>BUSINESS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article1"></div>
                        <h1>EVENTS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>POLITICAL TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article1"></div>
                        <h1>TECHNOLOGY TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards business">
                        <div className="image article1"></div>
                        <h1>BUSINESS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards events">
                        <div className="image article1"></div>
                        <h1>EVENTS TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards political">
                        <div className="image article1"></div>
                        <h1>POLITICAL TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                    <div className="cards technology">
                        <div className="image article1"></div>
                        <h1>TECHNOLOGY TITLE GOES HERE</h1>
                        <h5>AUTHOR AND DATE GO HERE</h5>
                        <p>This is a sample article description that you can pull directly from the website and paste into this p tag. This is a sample article description that you can pull directly from the website and paste into this p tag.</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Article;