import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/competitions">Competitions</NavLink>  
            </li>
            <li>
                <NavLink activeClassName="active" to="/teams">Teams</NavLink>
            </li>
            {/* <li>
                <NavLink activeClassName="active" to="/fixtures">Fixtures</NavLink>  
            </li> */}
        </ul>
    )
}

module.exports = Nav;