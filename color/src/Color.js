import React from "react";
import { Link } from "react-router-dom";

function Color({colors}) {
    return (
        <>
            <h1>This is the {colors.color} page!</h1>
            <p><Link to="/colors">Go Back to All Colors</Link></p>
        </>
    );
}

export default Color;