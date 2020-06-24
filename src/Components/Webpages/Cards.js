import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
            "id": "1",
            "name": "Extra Crunch Live with Hans Tung and Jeff Richards of GGV Capital",
            "date": "Jun 30",
            "type": "Tech"
        },
        {
            "id": "2",
            "name": "TC Early Stage 2020",
            "date": "Jul 21 - 22",
            "type": "Politics"
        },
        {
            "id": "3",
            "name": "TC Dessions: Mobility 2020",
            "date": "Oct 6 - 7",
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

<div className="article-card_container">
    <div className="card-info">
        <h3 className="title-span">{Articles.name}</h3>
        <h4 className="article-card_date">{Articles.date}</h4>
    </div>
    <div className="card-button_container">
        <div className="card-line"></div>
            <button className="article-card_more button-style">Learn More</button>
            <button className="article-card_sponsor button-style">Be a Sponsor</button>
    </div>
</div>

      ));
      return (
        <div>
    <div className="button-filter__container">
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

<div className="">
    <h1>Top Articles</h1>
    <div className="card-section">{renderAll}</div>
</div>
</div>
);
}
};
export default Cards;