import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">User List</Link>
            </li>
            <li>
                <Link to="/about" >About User</Link>
            </li>
        </ul>
    )
}

export default Navbar;