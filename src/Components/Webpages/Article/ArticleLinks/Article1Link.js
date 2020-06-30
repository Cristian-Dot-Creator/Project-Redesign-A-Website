import React from 'react';
import { Link } from 'react-router-dom';


export default function Article1Link () {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Article1'>Read More</Link>
                </li>
            </ul>
        </div>
    )
}