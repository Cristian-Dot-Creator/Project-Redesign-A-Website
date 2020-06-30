import React, { Component } from "react";
import { Link } from 'react-router-dom';
import style from './cards.module.css';

const buttons = [
    {
        name: "All",
        type: "All"
    },
    {
        name: "Tech",
        type: "Tech"
    },
    {
        name: "Politics",
        type: "Politics"
    },
    {
        name: "Sports",
        type: "Sports"
    }
  ];
  class Cards extends React.Component {
    constructor() {
      super();
      this.state = {
        Articles: [
        {
            "name": "Extra Crunch Live with Alexa Von Tobel",
            "date": "June 25",
            "type": "Tech"
        },
        {
            "name": "Extra Crunch Live with Hans Tung and Jeff Richards of GGV Capital",
            "date": "Jun 30",
            "type": "Tech"
        },
        {
            "name": "TC Early Stage 2020",
            "date": "Jul 21 - 22",
            "type": "Politics"
        },
        {
            "name": "Disrupt 2020",
            "date": "Sep 14 - 18",
            "type": "Politics"
        },
        {
            "name": "TC Sessions: Mobility 2020",
            "date": "Oct 6 - 7",
            "type": "Sports"
        },
        {
            "name": "TC Sessions: Space 2020",
            "date": "Dec 16 - 17",
            "type": "Sports"
        }
        ],
        filterItems: []
      };
    }
  
    componentDidMount() {
      this.setState({
        filterItems: this.state.Articles
      });
    }
  
    handleClick = type => {
      let filterItems = [];
      if (type === "All") {
        filterItems = this.state.Articles;
      } else {
        filterItems = this.state.Articles.filter(
          Articles => Articles.type === type
        );
      }
  
      this.setState({ filterItems });
    };
  
    render() {
      const renderAll = this.state.filterItems.map(Articles => (

<div className={style.article_card_container}>
    <div className={card_info}>
        <h3 className={style.title_span}>{Articles.name}</h3>
        <h4 className={style.article_card_date}>{Articles.date}</h4>
    </div>
    <div className={style.card_button_container}>
        <div className={style.card_line}></div>
            <button className={style.article_card_more }                className={style.button-style}>Learn More</button>
            <button className={style.article_card_sponsor}               className={style.button-style}>Be a Sponsor</button>
    </div>
</div>

      ));
      return (
        <div id={style.event_cards}>
    <div className={style.button_filter__container}>
        {buttons.map(({ name, type }) => (
          <button className="button-filter__style"
            key={name}
            type={type}
            onClick={this.handleClick.bind(this, type)}
          >
            {name}
        </button>
      ))}
    </div>
    <h1>Events</h1>

<div className="menu-list">
    <div className="card-section">{renderAll}</div>
</div>
</div>
);
}
};
export default Cards;