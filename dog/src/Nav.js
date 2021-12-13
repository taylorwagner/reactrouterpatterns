import React from "react";
import { Link } from "react-router-dom";

function Nav({dogs}) {
    const links = dogs.map(dog => {
        <li>
            <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
                {dog.name}
            </Link>
        </li>
    })
    return (
        <ul>
            <li><Link to="/dogs">Home</Link></li>
            {links}
        </ul>
    );
}

export default Nav;