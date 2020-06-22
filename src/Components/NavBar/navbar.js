import React, { Component } from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav id="navbar" className="container">

            <div id="nav-crunch_container">
                <img id="nav-logo" src={require('../../Images/TechCrunch.png')} alt="Tech Crunch Logo"/>
                <h1 class=""><span class="text-primary">Tech Crunch</span></h1>
            </div>

            <div id="nav-routes">
                <ul className="container">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/article'>Article</Link></li>
                    <li><Link to='/extracrunch'>ExtraCrunch</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;