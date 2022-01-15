import Shape from "../model/Shape";
import "./ShapeDisplay.css"

interface Props {
    shape: Shape;
    onDelete: () => void
}

function ShapeDisplay({shape, onDelete}: Props) {
    const style = {
        height: `${shape.size}px`,
        width: `${shape.size}px` ,
        backgroundColor: shape.color
    }

    let additionalClasses = "";
    if (shape.isCircle) {
        additionalClasses += " ShapeDisplay--circle";
    }

    return (
        <div className={"ShapeDisplay" + additionalClasses} style={style} onClick={onDelete}>

        </div>
    )
}

export default ShapeDisplay;