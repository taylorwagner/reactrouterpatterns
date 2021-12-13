import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h1>HELLO! Click on a dog for more information!</h1>
            <div>
                {dogs.map(dog => (
                    <div>
                        <img src={dog.src} alt={dog.name} />
                        <h3>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;