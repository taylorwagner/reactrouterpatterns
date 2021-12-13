import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NewColorForm = ({addColor}) => {
    const [formData, setFormData] = useState({color: "", hex:"#ffffff"});
    const history = useHistory();

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
        history.push("/colors");
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
                <div>
                    <label htmlFor="hex">Color value</label>
                    <input
                        id="hex"
                        name="hex"
                        type="color"
                        value={formData.hex}
                        onChange={handleChange}
                    />
                </div>
                <button id="addColorButton">Add Color!</button>
            </form>
        </>
    );
}

export default NewColorForm;