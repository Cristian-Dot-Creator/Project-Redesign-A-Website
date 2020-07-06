import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {navData} from "../../nav-data";
import style from "../NavBar/nav.module.css"
import './NavBar.css'

// import Cards from "../Webpages/Cards"
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
            
            <div id={style.nav_crunch_container}>
                <div id={style.menu_container}>
						<img id={style.nav_logo} src={require('../../Images/TechCrunch.png')} alt="Tech Crunch Logo"/>
						<Link to='/'><h1 class="tech-crunch"><span className={style.text_primary}>Tech Crunch</span></h1></Link>
						<div className={style.menu_button} onClick={this.handleMenuButtonClick}>
							<i className="fa fa-bars"/>
						</div>
					<div id={style.nav_tablet}>
						<ul id={style.nav_tablet_bar}>
							<Link to='/allarticles'><li className={style.nav_tablet_item}><span className={style.text_primary}>All Articles</span></li></Link>
							<Link to='/extracrunch'><li className={style.nav_tablet_item}><span className={style.text_primary}>Extra Crunch</span></li></Link>
							<Link to='/contact'><li className={style.nav_tablet_item}><span className={style.text_primary}>Contact Us</span></li></Link>
						</ul>
					</div>
                </div>
			{/*	Sidebar */}
				{navData.length && (
					<nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
						<div
							onClick={this.handleMenuButtonClick}
							className={style.close}
						>
							<i className="fa fa-times"/>
						</div>
						<ul className={style.menu_list}>
							{navData.map( item => (
								<li className={style.menu_items} key={item.name}>
									<a className={style.menu_link} href={item.link}>{item.name}</a>
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
