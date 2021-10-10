import React, {useState, useEffect, useRef} from "react";
import * as d3 from "d3";
import "./d3demo.css" ;


const DragAndDrop = () => {

    const Container = useRef(null)

    const moveRectangle= (svg) =>{
        svg.on("mousemove", () => {
          let point = d3.mouse(Container.current);
          setXPos(point[0]);
          setYPos(point[1]);  
        })
    }

    const placeRectangle = (svg) => {
        svg.on("mousemove", null)
    }

    const [x, setXPos] = useState ("125");
    const [y, setYPos] = useState ("50");

    useEffect(() => {
        let svg = d3.select(Container.current);

        svg.on("mousedown", () => {
            moveRectangle(svg);
        });

        svg.on("mouseup", () => {
            placeRectangle(svg);
        })
    })

   


    return(
    
       <div className= "Main">
           <h1 style={{textAlign:"center" , fontSize:"3em" }}>Laiout drag and drop demo</h1>

           <div className="Drag-and-drop-container">
           <svg 
                viewBox="0 0 300 150"
                preserveAspectRatio="xMinYMin"  
                style={{backgroundColor: "black"}}
                ref={Container}
                >

           <rect x={x} y={y} width="50" height="35" fill="white"/>
           </svg>

           </div>
       </div>

    
);
}
  
  export default DragAndDrop;