import React from "react";
import { Link } from "react-router-dom";

function ColorList ({colors}) {
    const colorLinks = Object.keys(colors).map(color => (
        <li key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </li>
      ));

    return (
        <div>
            <h1>Welcome to the Color Factory!</h1>
            <h3><Link to="/colors/new">Add a Color</Link></h3>
            <div>
                <p>Please select a color.</p>
                <ul>
                    {colorLinks}
                </ul>
            </div>
        </div>
    );
}

export default ColorList;