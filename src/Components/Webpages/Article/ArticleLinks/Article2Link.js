import React from 'react';
import { Link } from 'react-router-dom';


export default function Article2Link () {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/Article2'>Read More</Link>
                </li>
            </ul>
        </div>
    )
}