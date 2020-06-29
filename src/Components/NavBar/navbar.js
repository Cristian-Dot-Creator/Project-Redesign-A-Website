import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {navData} from "../../nav-data";
import Cards from "../Webpages/Cards"
class NavBar extends Component {
      
    constructor( props ) {
		super( props );

		this.state = {
			isSidebarOpen: false
		}
	}

	handleMenuButtonClick = () => {
		this.setState(  {isSidebarOpen: ! this.state.isSidebarOpen} )
	};

	render() {
		const {isSidebarOpen} = this.state;

		return(
            
            <div id="nav-crunch_container">
                <div id="menu-container">
                    <img id="nav-logo" src={require('../../Images/TechCrunch.png')} alt="Tech Crunch Logo"/>
                    <Link to='/'><h1 class=""><span class="text-primary">Tech Crunch</span></h1></Link>
						<div className="menu-button" onClick={this.handleMenuButtonClick}>
							<i className="fa fa-bars"/>
						</div>
					<div id="nav-tablet">
						<ul id="nav-tablet_bar">
							<Link to='/article'><li className="nav-tablet_item"><span class="text-primary">Article</span></li></Link>
							<Link to='/extracrunch'><li className="nav-tablet_item"><span class="text-primary">Extra Crunch</span></li></Link>
							<Link to='/contact'><li className="nav-tablet_item"><span class="text-primary">Contact Us</span></li></Link>
						</ul>
					</div>
                </div>
			{/*	Sidebar */}
				{navData.length && (
					<nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
						<div
							onClick={this.handleMenuButtonClick}
							className="close"
						>
							<i className="fa fa-times"/>
						</div>
						<ul className="menu-list">
							{navData.map( item => (
								<li className="menu-items" key={item.name}>
									<a className="menu-link" href={item.link}>{item.name}</a>
								</li>
							) )}
						</ul>
					</nav>
				)}
			</div>
		)
	}
}

export default NavBar;
