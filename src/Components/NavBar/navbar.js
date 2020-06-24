import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {menuData} from "../../menu-data";

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
                </div>
			{/*	Sidebar */}
				{menuData.length && (
					<nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
						<div
							onClick={this.handleMenuButtonClick}
							className="close"
						>
							{/* <i className="fa fa-bars"/> */}
                            <p>X</p>
						</div>
						<ul className="menu-items">
							{menuData.map( item => (
								<li className="menu-list" key={item.name}>
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