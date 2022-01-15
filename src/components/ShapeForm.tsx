import { FormEvent, useState } from "react";
import { createLogicalOr } from "typescript";
import Shape from "../model/Shape";
import ShapeDisplay from "./ShapeDisplay";
import "./ShapeForm.css"

interface Props {
    onSubmit: (shape: Shape) => void;
}



function ShapeForm({onSubmit}: Props) {

    const [size, setSize] = useState("100");
    const [isCircle, setIsCircle] = useState(false);
    const [color, setColor] = useState("pink");

    function handleFormSubmit(e:FormEvent) {
        e.preventDefault();
    
        const newShape: Shape = {
            color: color,
            size: parseInt(size),
            isCircle: isCircle
        };
        
        onSubmit(newShape);
        // Reset form
        setColor("");
        setSize("100");
        setIsCircle(false);
    }


    return (
        <div className="ShapeForm" onSubmit={handleFormSubmit}>
            <h1>Shape Form</h1>
            <form>
                <p>
                    <label htmlFor="ShapeForm__color">Color:</label>
                    <input id="ShapeForm__color" type="text" 
                    value={color}
                    onChange={e => setColor(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="ShapeForm__size">Size:</label>
                    <input id="ShapeForm__size" type="number" 
                    value={size}
                    onChange={e => setSize(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="ShapeForm__circle">Is Circle?</label>
                    <input id="ShapeForm__circle" type="checkbox" 
                    checked={isCircle} 
                    onChange={e => setIsCircle(e.target.checked)}/>
                </p>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ShapeForm;