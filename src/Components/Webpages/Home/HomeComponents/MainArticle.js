import React from 'react';
import './MainArticle.css';

export default function MainArticle () {
    return(
        <div>
            <div className="card">
                <div className="cardImg">
                    <img src="/img/facebook.jpg" />
                </div>
                <div className="cardTitle">
                    <h1>Title</h1>
                </div>
                <div className="cardInfo">
                    <p>Lorem</p>
                </div>
            </div>
        </div>
    )
}