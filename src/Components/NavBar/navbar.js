import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav id="navbar">
            <div class="container">
                <h1 class="logo"><span class="text-primary">Tech Crunch</span></h1>
                <ul>
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