import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewColorForm = ({addColor}) => {
    const [formData, setFormData] = useState({
        color: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({...formData, id: uuidv4()});
        setFormData({color: ""});
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">New Color:</label>
                    <input
                        id="color"
                        name="color"
                        placeholder="color"
                        type="text"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                <button id="addColorButton">Add Color!</button>
            </form>
        </>
    );
}

export default NewColorForm;