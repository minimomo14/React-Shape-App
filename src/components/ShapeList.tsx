import { useState } from "react";
import "./ShapeList.css"
import Shape from "../model/Shape";
import ShapeDisplay from "./ShapeDisplay";
import ShapeForm from "./ShapeForm";

function ShapeList(){
    const [shapes,setShapes] = useState<Shape[]>([
        {color: "steelblue", size: 100, isCircle:true},
        {color: "crimson", size:200, isCircle:false},
        {color: "cornflowerblue", size: 150, isCircle:true}
    ])

    //const firstShape: Shape = shapes[0];

    function handleShapeFormSubmit(shape: Shape): void {
        setShapes(prev => [...shapes, shape]);
    }

    function handleDeleteShape(index: number) {
        setShapes(prev => [...prev.slice(0,index), ...prev.slice(index+1)]);
    }

    return (
        <div className="ShapeList">
          <h1>Shape List</h1>
          <div className="ShapeList__shapes">
            {shapes.map((shape, i) =>
              <ShapeDisplay key={i} shape={shape} onDelete={() => handleDeleteShape(i)} />)}
          </div>
          <ShapeForm onSubmit={handleShapeFormSubmit} />
        </div>
      );
    
};

export default ShapeList;