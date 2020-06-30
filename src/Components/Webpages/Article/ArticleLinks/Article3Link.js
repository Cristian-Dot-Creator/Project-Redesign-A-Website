import React from 'react';
import { Link } from 'react-router-dom';


export default function Article3Link () {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Article3'>Read More</Link>
                </li>
            </ul>
        </div>
    )
}